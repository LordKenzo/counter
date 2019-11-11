import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fl-figlio',
  template: `
    <h4>Counter</h4>
    <h5>{{counter}}</h5>
    <div class="form-group col col-2 offset-5">
      <label for="num">Factor:</label>
      <input type="number" class="form-control" id="num" value="1" min="1" (change)="factor=$event.target.value">
    </div>
    <button class="btn btn-primary" (click)="multiply()">Multply</button>
    <button [disabled]="counter===0" class="btn btn-dark" (click)="divide()">Divide</button>
    <hr>
    <fl-nipote [counter]="counter" (resetClick)="handleReset($event)"></fl-nipote>
  `,
  styles: []
})
export class FiglioComponent {

  @Input() counter: number;
  @Output() changeCounter: EventEmitter<number> = new EventEmitter();
  factor = 1;

  constructor() { }

  multiply() {
    this.counter *= this.factor;
    this.onChangeCounter(this.counter);
  }

  divide() {
    this.counter /= this.factor;
    this.counter = this.counter < 1 ? 0 : this.counter;
    this.onChangeCounter(this.counter);
  }

  handleReset(counter) {
    this.counter = counter;
    this.onChangeCounter(this.counter);
  }

  private onChangeCounter(value) {
    this.changeCounter.emit(value);
  }
}
