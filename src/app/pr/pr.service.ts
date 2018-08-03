import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../JsonResponse';
import { Observable } from 'rxjs';
import { PR } from '@pr/pr';
import { User } from '@user/user';

const url = 'http://localhost:49231/PurchaseRequests';

@Injectable({
  providedIn: 'root'
})
export class PrService {


  List(): Observable<JsonResponse> {
    return this.http.get(url+"/List") as Observable<JsonResponse>;
  }
  
  Get(id): Observable<JsonResponse> {
    return this.http.get(url+"/Get/" + id) as Observable<JsonResponse>;
  }
  
  Create(pr: PR): Observable<JsonResponse> {
    return this.http.post(url+"/Create", pr) as Observable<JsonResponse>;
  }
  
  Change(pr: PR): Observable<JsonResponse> {
    return this.http.post(url+"/Change", pr) as Observable<JsonResponse>;
  }

  Remove(pr: PR): Observable<JsonResponse> {
    return this.http.post(url+"/Remove", pr) as Observable<JsonResponse>;
  }

    constructor(private http: HttpClient) { }  
  }
  