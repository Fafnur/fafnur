import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postCardImage',
  standalone: true,
})
export class PostCardImagePipe implements PipeTransform {
  transform(image: string | null | undefined): object | null {
    return typeof image === 'string' && image.length ? { backgroundImage: `url(${image})` } : null;
  }
}
