import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoverService {
  private hoverSubject = new BehaviorSubject<string>(''); // Default value
  hover$ = this.hoverSubject.asObservable();

  setHoverValue(value: string) {
    this.hoverSubject.next(value);
  }
}
