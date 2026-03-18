import { getRoute, PATHS, PathValues, toPath, withNavigationRoutes } from './navigation';

describe('PATHS', () => {
  it('should define home path', () => {
    expect(PATHS.home).toBe('/');
  });

  it('should define about path', () => {
    expect(PATHS.about).toBe('/about');
  });

  it('should define adventure path', () => {
    expect(PATHS.adventure).toBe('/adventure');
  });

  it('should define novels path', () => {
    expect(PATHS.novels).toBe('/novels');
  });

  it('should define wildcard path', () => {
    expect(PATHS.any).toBe('**');
  });
});

describe('getRoute', () => {
  it('should return root array for home path', () => {
    expect(getRoute('/')).toEqual(['/']);
  });

  it('should split path into segments', () => {
    expect(getRoute('/about')).toEqual(['/', 'about']);
  });

  it('should split multi-segment path', () => {
    expect(getRoute('/novels')).toEqual(['/', 'novels']);
  });

  it('should replace named param with provided value', () => {
    expect(getRoute('/novels/:id', { id: 42 })).toEqual(['/', 'novels', 42]);
  });

  it('should use param name if value not provided', () => {
    expect(getRoute('/novels/:id')).toEqual(['/', 'novels', 'id']);
  });

  it('should replace string param', () => {
    expect(getRoute('/novels/:id', { id: 'my-novel' })).toEqual(['/', 'novels', 'my-novel']);
  });
});

describe('toPath', () => {
  it('should return "/" for home', () => {
    expect(toPath('/')).toBe('/');
  });

  it('should return path string for about', () => {
    expect(toPath('/about')).toBe('/about');
  });

  it('should return path string for novels', () => {
    expect(toPath('/novels')).toBe('/novels');
  });
});

describe('withNavigationRoutes', () => {
  it('should strip leading slash from path', () => {
    const routes = [{ path: '/about' as PathValues }];
    const result = withNavigationRoutes(routes);
    expect(result[0].path).toBe('about');
  });

  it('should leave wildcard route unchanged', () => {
    const routes = [{ path: '**' as PathValues }];
    const result = withNavigationRoutes(routes);
    expect(result[0].path).toBe('**');
  });

  it('should leave empty path unchanged', () => {
    const routes = [{ path: '' as PathValues }];
    const result = withNavigationRoutes(routes);
    expect(result[0].path).toBe('');
  });

  it('should strip parent prefix from path', () => {
    const routes = [{ path: '/parent/child' as PathValues }];
    const result = withNavigationRoutes(routes, 'parent');
    expect(result[0].path).toBe('/child');
  });

  it('should preserve other route properties', () => {
    const routes = [{ path: '/about' as PathValues, title: 'About' }];
    const result = withNavigationRoutes(routes);
    expect(result[0]).toMatchObject({ title: 'About' });
  });
});
