import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  constructor() { }
  @Input() errorMessage: string;
  @Output() tryAgain =  new EventEmitter<any>();
  ngOnInit() {
  }

  refresh() {
    this.tryAgain.emit(true);
  }

}
