import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {MessageService} from "../api-services/message.service";
import {catchError, map, mergeMap, of} from "rxjs";
import * as messageActions from '../actions/messages.actions'

@Injectable()
export class MessagesEffects {
  /**
   *  Effect for adding new Message
   */
  loadAddNewMessage$ = createEffect(() => this.actions$.pipe(
      ofType(messageActions.loadAddMessage),
      mergeMap((action) => this.api.addNewMessage(action.data)
        .pipe(
          map(response => {

            return {type: messageActions.loadAddMessageSuccess.type, payload: response}
          }),
          catchError((err) => of({type: messageActions.loadAddMessageFailure.type, error: err.message}))
        ))
    )
  );
  /**
   *  Effect for getting all Messages
   */
  loadGetAllMessages$ = createEffect(() => this.actions$.pipe(
      ofType(messageActions.loadGetMessages),
      mergeMap((action) => this.api.getAllMessages()
        .pipe(
          map(response => ({type: messageActions.loadGetMessagesSuccess.type, payload: response})
          ),
          catchError((err) => of({type: messageActions.loadGetMessagesFailure.type, error: err.message}))
        ))
    )
  );

  constructor(private actions$: Actions, private api: MessageService) {
  }
}
