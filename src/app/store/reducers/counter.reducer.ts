import { createReducer, on, ActionReducerMap, ActionReducer } from '@ngrx/store';
import * as CounterActions from '../actions';

export interface AppState {
    counter: CounterState;
}

export interface CounterState {
  counter: number;
}

const initialState: CounterState = {
    counter: 0
};

// tslint:disable-next-line: variable-name
const counterReducer: ActionReducer<CounterState> = createReducer(
  initialState,
  on(CounterActions.increment, state => ({...state, counter: ++state.counter})),
  on(CounterActions.decrement, state => ({...state, counter: state.counter < 1 ? 0 : --state.counter})),
  on(CounterActions.multiply, (state, action) => ({...state, counter: action.counter})),
  on(CounterActions.divide, (state, action) => ({...state, counter: action.counter})),
  on(CounterActions.reset, state => ({...state, counter: 0})),
);

export const appReducers: ActionReducerMap<AppState> = {
  counter: counterReducer
  // qui potrei avere altri Reducer
};
