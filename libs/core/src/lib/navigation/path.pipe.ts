import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

import type { GetPathParams, PathValues } from './navigation';
import { toPath } from './navigation';

@Pipe({
  name: 'path',
})
export class PathPipe implements PipeTransform {
  transform(path: PathValues, params?: GetPathParams<PathValues>): string {
    return toPath(path, params);
  }
}
