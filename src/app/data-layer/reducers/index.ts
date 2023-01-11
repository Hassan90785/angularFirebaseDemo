import * as fromMessage from './message.reducer'
import * as fromException from './exceptions.reducer'
import {ActionReducerMap} from "@ngrx/store";

export interface GlobalState {
  [fromMessage.messageFeatureKey]: fromMessage.MessageState;
  [fromException.exceptionFeatureKey]: fromException.ExceptionState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  [fromMessage.messageFeatureKey]: fromMessage.messagesReducer,
  [fromException.exceptionFeatureKey]: fromException.exceptionsReducer,
};
