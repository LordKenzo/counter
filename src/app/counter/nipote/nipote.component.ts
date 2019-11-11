import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fl-nipote',
  template: `
    <h4>Counter</h4>
    <h5>{{counter}}</h5>
    <button class="btn btn-danger" (click)="reset()">Reset</button>
  `,
  styles: []
})
export class NipoteComponent {

  @Input() counter: number;
  @Output() resetClick: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  reset() {
    this.counter = 0;
    this.resetClick.emit(this.counter);
  }

}
