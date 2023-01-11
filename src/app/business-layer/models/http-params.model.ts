import {HttpHeaders} from '@angular/common/http';

export class HttpParamsModel {
  payload: any;
  uri = '';
  httpHeader: HttpHeaders;

  constructor(payload: any, uri: string, httpHeaders: HttpHeaders) {
    this.payload = payload;
    this.uri = uri;
    this.httpHeader = httpHeaders;
  }
}
