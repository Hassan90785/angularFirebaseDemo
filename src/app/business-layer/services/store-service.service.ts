import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {loadAddMessage, loadGetMessages} from "../../data-layer/actions/messages.actions";
import {messagesSelector} from "../../data-layer/selectors/messages.selectors";
import {filter, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store) {
  }


  addMessage(props: any) {
    this.store.dispatch(loadAddMessage({data: props}));
  }

  getAllMessages() {
    this.store.dispatch(loadGetMessages());
  }

  getMessageSelector(): Observable<any> {
    return this.store.select(messagesSelector).pipe(filter(value => value !== undefined))
  }
}
