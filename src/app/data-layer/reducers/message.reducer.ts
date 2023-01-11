import {Action, createReducer, on} from '@ngrx/store';
import {MessageModel} from '../../business-layer/models/message.model';
import * as messageActions from '../actions/messages.actions';

export const messageFeatureKey = 'message';

export interface MessageState {
  readonly messages: MessageModel[] | undefined;
}

export const initialState: MessageState = {
  messages: undefined
};

export const reducer = createReducer(
  initialState,
  on(messageActions.loadGetMessagesSuccess, (state, {data}) => ({messages: data})),
);

export function messagesReducer(state: MessageState | undefined, action: Action) {
  return reducer(state, action);
}
