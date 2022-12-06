import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from './../../../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubuserService {
  private _apiUrl = environment.apiUrl + 'user/';

  constructor(private _httpClient: HttpClient) { }

  getUsersList(): Observable<any> {
    return this._httpClient.get<any>(this._apiUrl + 'getUserList').pipe(
      map((response) => {
        return response;
      }));
  }

  postUser(params): Observable<any> {
    return this._httpClient.post<any>(this._apiUrl + 'addUser', params).pipe(
      map((response) => {
        return response;
      }));
  }
  putUser(params): Observable<any> {
    return this._httpClient.post<any>(this._apiUrl + 'updateUser/' + params.id, params).pipe(
      map((response) => {
        return response;
      }));
  }

  getUserById(id) {
    return this._httpClient.get<any>(this._apiUrl + 'getUserById/' + id).pipe(
      map((response) => {
        return response;
      }));
  }

  deleteUserById(id) {
    return this._httpClient.delete<any>(this._apiUrl + 'deleteUser/' + id).pipe(
      map((response) => {
        return response;
      }));
  }
}


export interface subUser {
  id?: number,
  name: string,
  mobileNo: string,
  password: string,
  role?: number,
  status?: number
}