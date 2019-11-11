import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from 'src/app/redux/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'fl-nipote',
  template: `
    <h4>Counter</h4>
    <h5>{{counter$ | async}}</h5>
    <button class="btn btn-danger" (click)="reset()">Reset</button>
  `,
  styles: []
})
export class NipoteComponent {

  @select() counter$: Observable<number>;

  constructor(private ngRedux: NgRedux<AppState>) {}

  reset() {
    this.ngRedux.dispatch({ type: 'RESET' });
  }

}
