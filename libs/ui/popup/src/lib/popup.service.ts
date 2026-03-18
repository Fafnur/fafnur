import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  DOCUMENT,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  Type,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { v4 } from 'uuid';

import { POPUP_DATA, POPUP_REF, PopupOptions } from './popup.type';
import { Popup } from './popup/popup';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  private readonly injector = inject(Injector);
  private readonly document = inject(DOCUMENT);
  private readonly applicationRef = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);

  private readonly map = new Map<string, ComponentRef<Popup>>();

  has(): boolean {
    return this.map.size > 0;
  }

  open<T>(component: Type<unknown>, options?: PopupOptions): Observable<T | undefined> {
    const componentRef = createComponent(Popup, {
      environmentInjector: this.environmentInjector,
    });
    const widgetId = v4();

    const childInjector = Injector.create({
      providers: [
        {
          provide: POPUP_REF,
          useValue: componentRef.instance,
        },
        {
          provide: POPUP_DATA,
          useValue: options?.data,
        },
      ],
      parent: this.injector,
    });

    componentRef.setInput('child', component);
    componentRef.setInput('injector', childInjector);
    componentRef.setInput('options', options ?? {});

    this.applicationRef.attachView(componentRef.hostView);
    this.document.body.appendChild(componentRef.location.nativeElement);

    this.map.set(widgetId, componentRef);
    const subject = new Subject<T | undefined>();

    componentRef.instance.closed.subscribe((value) => {
      this.applicationRef.detachView(componentRef.hostView);
      componentRef.location.nativeElement.remove();
      componentRef.destroy();
      subject.next(value as T | undefined);
      subject.complete();
      this.map.delete(widgetId);
    });

    return subject.asObservable();
  }

  close(): void {
    this.map.forEach((componentRef) => componentRef.instance.onClose());
  }
}
