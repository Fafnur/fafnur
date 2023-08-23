import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { DestroyRef, Inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize, interval, Subject, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatrixService {
  private fontSize = 12;
  private drops: number[] = [];

  private matrix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}'.split('');

  private readonly reset$ = new Subject<void>();

  resetFn = () => this.reset$.next();

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly platform: Platform,
    private readonly destroyRef: DestroyRef
  ) {}

  get canvas(): HTMLCanvasElement {
    const canvas = this.document.getElementById('canvas') as HTMLCanvasElement | null;

    if (canvas) {
      return canvas;
    }

    const element = this.document.createElement('canvas');
    element.setAttribute('id', 'canvas');
    element.height = window.innerHeight;
    element.width = window.innerWidth;
    element.style.setProperty('position', 'absolute');
    element.style.setProperty('top', '0');
    element.style.setProperty('left', '0');
    element.style.setProperty('z-index', '1000');

    const columns = element.width / this.fontSize; //number of columns for the rain

    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) {
      this.drops[x] = 1;
    }
    element.addEventListener('click', this.resetFn);

    this.document.body.append(element);
    this.document.body.style.setProperty('overflow', 'hidden');

    return element;
  }

  select(): void {
    if (this.platform.isBrowser) {
      interval(35)
        .pipe(
          tap(() => this.draw()),
          takeUntil(this.reset$),
          takeUntilDestroyed(this.destroyRef),
          finalize(() => {
            this.canvas.removeEventListener('click', this.resetFn);
            this.document.dispatchEvent(new Event('matrixFinish'));
            this.canvas.remove();
            this.document.body.style.setProperty('overflow', 'initial');
          })
        )
        .subscribe();
    }
  }

  //drawing the characters
  private draw(): void {
    const canvas = this.canvas;
    const context = canvas.getContext('2d');

    if (context) {
      //Black BG for the canvas
      //translucent BG to show trail
      context.fillStyle = 'rgba(0, 0, 0, 0.04)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#00695c'; //green text
      context.font = this.fontSize + 'px arial';

      //looping over drops
      this.drops.forEach((item, index, arr) => {
        //a random chinese character to print
        const text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        context.fillText(text, index * this.fontSize, item * this.fontSize);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (item * this.fontSize > canvas.height && Math.random() > 0.975) {
          arr[index] = 0;
        }

        // incrementing Y coordinate
        arr[index]++;
      });
    }
  }
}
