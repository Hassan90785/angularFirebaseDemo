import {Injectable} from '@angular/core';
import {HttpWebService} from "../../business-layer/services/http-web.service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private api: HttpWebService) {

  }

  addNewMessage(params: any): Observable<any> {
    // const headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    // const httpParams: HttpParamsModel = new HttpParamsModel(uploadSupportingDocumentsParams.data,
    //   servicesParam.serviceEndpoint, headersHttpClient);
    console.log(' this.api.temp', this.api.temp)
    console.log(' params', params)
    this.api.temp = [...this.api.temp, params]
    // this.api.temp.push(params);
    console.log(' this.api.temps', this.api.temp)
    return of(this.api.temp);
    // return this.api.post(params);
  }

  getAllMessages(): Observable<any> {
    // const headersHttpClient: HttpHeaders = this.headerUtil.setHeaderInfo(servicesParam);
    // const httpParams: HttpParamsModel = new HttpParamsModel(uploadSupportingDocumentsParams.data,
    //   servicesParam.serviceEndpoint, headersHttpClient);


    console.log(' this.api11.tempsarr', this.api.temp);
    return of(this.api.temp);
    // return this.api.post(params);
  }

}
