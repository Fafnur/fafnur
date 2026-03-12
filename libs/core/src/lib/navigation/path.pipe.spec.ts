import { PathPipe } from './path.pipe';

describe('PathPipe', () => {
  let pipe: PathPipe;

  beforeEach(() => {
    pipe = new PathPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform home path', () => {
    expect(pipe.transform('/')).toBe('/');
  });

  it('should transform about path', () => {
    expect(pipe.transform('/about')).toBe('/about');
  });

  it('should transform adventure path', () => {
    expect(pipe.transform('/adventure')).toBe('/adventure');
  });

  it('should transform novels path', () => {
    expect(pipe.transform('/novels')).toBe('/novels');
  });
});
