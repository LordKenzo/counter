import { Component } from '@angular/core';
import { CounterState, AppState } from 'src/app/store/reducers/counter.reducer';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { reset } from 'src/app/store/actions';

@Component({
  selector: 'fl-nipote',
  template: `
    <h4>Counter</h4>
    <h5>{{(counter$ | async).counter}}</h5>
    <button class="btn btn-danger" (click)="reset()">Reset</button>
  `,
  styles: []
})
export class NipoteComponent {

  counter$: Observable<CounterState>;
  constructor(private store: Store<AppState>) {
    this.counter$ = store.pipe(select('counter'));
  }

  reset() {
    this.store.dispatch(reset());
  }

}
