import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {HttpParamsModel} from "../models/http-params.model";
import {MessageModel} from "../models/message.model";

@Injectable({
  providedIn: 'root'
})
export class HttpWebService {
  public temp: MessageModel[] = [];

  constructor(private http: HttpClient) {
  }


  /**
   * Post Request
   * @param params
   * @param responseType
   */

  post(params: HttpParamsModel, responseType?: any): Observable<any> {
    // Call Rest API using Post.
    return this.http.post(params.uri, params.payload, {headers: params.httpHeader});
  }

  /**
   * Get Request
   * @param params
   */

  get(params: any): Observable<any> {
    return this.http.get(params.payload)
      .pipe(catchError((err: HttpErrorResponse) => {
        console.log(err);
        this.exceptionHandler(err);
        return throwError(err.error);
      }));
  }

  /**
   * For showing error in console.
   * @param err
   */
  exceptionHandler(err: HttpErrorResponse): void {
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
  }
}
