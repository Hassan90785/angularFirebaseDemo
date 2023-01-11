import {createAction, props} from '@ngrx/store';

/**
 *  Add new message
 */
export const loadAddMessage = createAction(
  '[Messages] Load Add MessageModel',
  props<{ data: any }>()
);

export const loadAddMessageSuccess = createAction(
  '[Messages] Load Add MessageModel Success',
  props<{ data: any }>()
);

export const loadAddMessageFailure = createAction(
  '[Messages] Load Add MessageModel Failure',
  props<{ error: any }>()
);


/**
 *  Get new message
 */
export const loadGetMessages = createAction(
  '[Messages] Load Get Messages'
);

export const loadGetMessagesSuccess = createAction(
  '[Messages] Load Get Messages Success',
  props<{ data: any }>()
);

export const loadGetMessagesFailure = createAction(
  '[Messages] Load Get Messages Failure',
  props<{ error: any }>()
);
