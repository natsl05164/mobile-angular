import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class LayoutService {
  private subject = new Subject<any>();

  sendShowLayout(keys: Object) {
    this.subject.next( keys);
  }

  clearShowLayout() {
    this.subject.next();
  }

  getShowLayout(): Observable<any> {
    return this.subject.asObservable();
  }
}
