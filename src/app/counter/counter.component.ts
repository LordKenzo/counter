import { Component } from '@angular/core';

@Component({
  selector: 'fl-counter',
  template: `
    <div class="row">
      <div class="col text-center">
        <h4>Counter</h4>
        <h5>{{counter}}</h5>
        <button class="btn btn-info" (click)="increment()">Increment</button>
        <button [disabled]="counter<=0" class="btn btn-warning" (click)="decrement()">Decrement</button>
        <hr>
        <fl-figlio [counter]="counter" (changeCounter)="this.counter = $event"></fl-figlio>
      </div>
    </div>
  `,
  styles: []
})
export class CounterComponent {

  counter = 0;

  constructor() { }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= this.counter < 1 ? 0 : 1;
  }

}
