import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CuponModalService {
  private openModalSubject = new Subject<void>();
  openModal$ = this.openModalSubject.asObservable();

  openModal() {
    this.openModalSubject.next();
  }
}
