import { Component } from '@angular/core';
import { AppState } from '../redux/reducers';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'fl-counter',
  template: `
    <div class="row">
      <div class="col text-center">
        <h4>Counter</h4>
        <h5>{{counter$ | async}}</h5>
        <button class="btn btn-info" (click)="increment()">Increment</button>
        <button [disabled]="(counter$ | async)===0" class="btn btn-warning" (click)="decrement()">Decrement</button>
        <hr>
        <fl-figlio></fl-figlio>
      </div>
    </div>
  `,
  styles: []
})
export class CounterComponent {

  @select() counter$: Observable<number>;

  constructor(private ngRedux: NgRedux<AppState>) {}

  increment() {
    this.ngRedux.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    this.ngRedux.dispatch({ type: 'DECREMENT' });
  }

}
