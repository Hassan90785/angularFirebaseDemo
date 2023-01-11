import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromMessage from '../reducers/message.reducer'

/**
 *  Messages Selector
 */


export const selectMessages = createFeatureSelector<fromMessage.MessageState>(fromMessage.messageFeatureKey);
export const messagesSelector = createSelector(selectMessages, (messagesState: fromMessage.MessageState) => messagesState.messages);
