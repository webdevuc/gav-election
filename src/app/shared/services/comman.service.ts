import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CommanService {
  private _enveronmentApiUrl: string = environment.apiUrl;

  constructor(private _httpClient: HttpClient) { }


  public getRolesList(): Observable<any> {
    return this._httpClient.get<any>(this._enveronmentApiUrl + 'roleMaster/getRoleMaster').pipe(map(
      response => {
        return response
      }));
  }

  public getPartiesList(): Observable<any> {
    return this._httpClient.get<any>(this._enveronmentApiUrl + 'parties/getPartiesList').pipe(
      map((response) => {
        return response;
      })
    );
  }

  public getAssigneeList(): Observable<any> {
    return this._httpClient.get<any>(this._enveronmentApiUrl + 'user/getAssigneeList').pipe(
      map((response) => {
        return response;
      })
    );
  }
  public getVotingList(): Observable<any> {
    return this._httpClient.get<any>(this._enveronmentApiUrl + 'voting/getVotingList').pipe(
      map((response) => {
        return response;
      })
    );
  }

  public getGenders() {
    return [
      { id: 1, name: 'पुरुष' },
      { id: 1, name: 'स्त्री' },
      { id: 1, name: 'इतर' }
    ]
  }



}

export interface voter {
  assignedPersonId: number;
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  partiesId: number;
  village: string;
  votingForId: number;
  ward: number
}

export interface party {
  id: number;
  isDelete: boolean;
  name: string;
}

export interface subuser {
  deviceId: string
  id: number
  isDelete: false
  isLoggedIn: boolean;
  mobileNo: string;
  name: string;
  password: string;
  role: number;
  status: number
}

export interface assignedPerson {
  id: 0;
  name: string
}

export interface roles {
  id: number,
  name: string,
  isDelete?: boolean
}

export function ageCheck(ageKey: string) {
  return (group: FormGroup) => {
    let age = group.controls[ageKey];
    if (age.value && age.value <= 18) {
      return age.setErrors({ ageMissmatch: true })
    }
  }
}