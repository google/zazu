import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GhostService {

  ghostStatus  = false;

  ghostStatusObservable = new Subject<boolean>();

  constructor() { }


  getStatus() {
    this.ghostStatusObservable.next(this.ghostStatus);
  }

  activatedGhost() {
    this.ghostStatus = true;
    this.ghostStatusObservable.next(this.ghostStatus);
  }

  disableGhost() {
    this.ghostStatus = false;
    this.ghostStatusObservable.next(this.ghostStatus);
  }
}
