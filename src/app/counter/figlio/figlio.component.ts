import { Component } from '@angular/core';
import { AppState, CounterState } from 'src/app/store/reducers/counter.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { divide, multiply } from 'src/app/store/actions';

@Component({
  selector: 'fl-figlio',
  template: `
    <h4>Counter</h4>
    <h5>{{(counter$ | async).counter}}</h5>
    <div class="form-group col col-2 offset-5">
      <label for="num">Factor:</label>
      <input type="number" class="form-control" id="num" value="1" min="1" (change)="factor=$event.target.value">
    </div>
    <button class="btn btn-primary" (click)="multiply()">Multply</button>
    <button [disabled]="(counter$ | async).counter===0" class="btn btn-dark" (click)="divide()">Divide</button>
    <hr>
    <fl-nipote></fl-nipote>
  `,
  styles: []
})
export class FiglioComponent {

  counter$: Observable<CounterState> = this.store.pipe(select('counter'));
  factor = 1;
  private counter: number;

  constructor(private store: Store<AppState>) {
    this.counter$.subscribe(
      counterState => this.counter = counterState.counter
    );
  }

  multiply() {
    this.counter *= this.factor;
    this.store.dispatch(multiply({counter: this.counter}));
  }

  divide() {
    this.counter /= this.factor;
    this.store.dispatch(divide({counter: this.counter}));
  }

}
