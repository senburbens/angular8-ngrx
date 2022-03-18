import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { initialCounterState } from './counter.state';


const _counterReducer = createReducer(
  initialCounterState,
  on(increment, (state : any) => ({ ...state, counter : state.counter + 1 })),
  on(decrement, (state : any) => ({ ...state, counter : state.counter - 1 })),
  on(reset, (state : any) => ({ ...state, counter : 0 }))
);

export function counterReducer(state : any, action : any) {
  return _counterReducer(state, action);
}
