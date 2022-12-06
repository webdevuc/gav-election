import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private _apiUrl = environment.apiUrl + 'voter/';

  constructor(private _httpClient: HttpClient) { }

  getVotersList(param): Observable<any> {
    let fullUrl: string = this._apiUrl + 'getVoterDetailsList';
    if (param) {
      Object.entries(param).forEach(([key, val]) =>
        fullUrl = this.appendQueryParam(fullUrl, key, val)
      );
    }
    return this._httpClient.get<any>(fullUrl).pipe(
      map((response) => {
        return response;
      }));
  }

  postVoter(data): Observable<any> {
    return this._httpClient.post<any>(this._apiUrl + 'addVoterDetails', data).pipe(map((response) => {
      return response;
    }));
  }

  putVoter(data): Observable<any> {
    return this._httpClient.post<any>(this._apiUrl + 'updateVoterDetails/' + data.id, data).pipe(map((response) => {
      return response;
    }));
  }

  getVoterById(id) {
    return this._httpClient.get<any>(this._apiUrl + 'getVoterDetailsById/' + id).pipe(
      map((response) => {
        return response;
      }));
  }

  deleteVoterById(id) {
    return this._httpClient.delete<any>(this._apiUrl + 'deleteVoterDetails/' + id).pipe(
      map((response) => {
        return response;
      }));
  }


  appendQueryParam(url: string, paramName?: any, value?: any): string {
    if (value !== null && value !== undefined && value) {
      if (url.includes('?')) {
        return url + '&' + paramName + '=' + value;
      } else {
        return url + '?' + paramName + '=' + value;
      }
    } else {
      return url;
    }
  }
  // appendQueryParam(url: string, param: any): string {
  //   // let returnUrl: string;
  //   Object.entries(param).forEach(([key, value]) => {
  //     console.log(key, value);
  //     if (value !== null && value !== undefined && value) {
  //       if (url.includes('?')) {
  //         console.log('url', url + '&' + key + '=' + value);
  //         return url + '&' + key + '=' + value;
  //       } else {
  //         console.log('url', url + '?' + key + '=' + value);
  //         return url + '?' + key + '=' + value;
  //       }
  //     } else {
  //       return url;
  //     }
  //   });
  //   return url
  // }

}
