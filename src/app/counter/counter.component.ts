import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/reducers/counter.reducer';
import { increment, decrement } from '../store/actions';

@Component({
  selector: 'fl-counter',
  template: `
    <div class="row">
      <div class="col text-center">
        <h4>Counter</h4>
        <h5>{{counter }}</h5>
        <button class="btn btn-info" (click)="increment()">Increment</button>
        <button [disabled]="counter <= 0" class="btn btn-warning" (click)="decrement()">Decrement</button>
        <hr>
        <fl-figlio></fl-figlio>
      </div>
    </div>
  `,
  styles: []
})
export class CounterComponent {

  counter: number;

  constructor(private store: Store<AppState>) {
    store.pipe(select('counter')).subscribe(
      counterState => this.counter = counterState.counter
    );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

}
