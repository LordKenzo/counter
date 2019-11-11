export interface AppState {
    counter: number;
}

const initialState: AppState = {
    counter: 0
};

export function counterReducer(state = initialState, action): AppState {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: ++state.counter };
        case 'DECREMENT':
            return {...state, counter: --state.counter };
        case 'MULTIPLY':
        case 'DIVIDE':
            return {...state, counter: action.payload.counter};
        case 'RESET':
            return {...state, counter: 0 };
      default:
            return state;
    }
  }
