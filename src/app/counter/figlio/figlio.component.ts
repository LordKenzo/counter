import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, NgRedux } from '@angular-redux/store';
import { AppState } from 'src/app/redux/reducers';

@Component({
  selector: 'fl-figlio',
  template: `
    <h4>Counter</h4>
    <h5>{{counter$ | async}}</h5>
    <div class="form-group col col-2 offset-5">
      <label for="num">Factor:</label>
      <input type="number" class="form-control" id="num" value="1" min="1" (change)="factor=$event.target.value">
    </div>
    <button class="btn btn-primary" (click)="multiply()">Multply</button>
    <button [disabled]="(counter$ | async)===0" class="btn btn-dark" (click)="divide()">Divide</button>
    <hr>
    <fl-nipote></fl-nipote>
  `,
  styles: []
})
export class FiglioComponent {

  @select() counter$: Observable<number>;

  factor = 1;
  counter: number;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.counter$.subscribe(
      counter => this.counter = counter
    );
  }

  multiply() {
    this.counter *= this.factor;
    this.ngRedux.dispatch({ type: 'MULTIPLY', payload: {counter: this.counter} });
  }

  divide() {
    this.counter /= this.factor;
    this.ngRedux.dispatch({ type: 'DIVIDE' , payload: {counter: this.counter} });
  }

}
