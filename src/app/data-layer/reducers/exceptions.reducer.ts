import {Action, createReducer, on} from '@ngrx/store';
import * as messageActions from '../actions/messages.actions'

export const exceptionFeatureKey = 'exception';

export interface ExceptionState {
  readonly exceptions: any;
}

export const initialState: ExceptionState = {
  exceptions: undefined
};

export const reducer = createReducer(
  initialState,
  on(messageActions.loadAddMessageFailure, (state, {error}) => ({exceptions: error})),
  on(messageActions.loadGetMessagesFailure, (state, {error}) => ({exceptions: error})),
);

export function exceptionsReducer(state: ExceptionState | undefined, action: Action) {
  return reducer(state, action);
}
