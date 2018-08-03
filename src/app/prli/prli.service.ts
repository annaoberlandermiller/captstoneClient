import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../JsonResponse';
import { Observable } from 'rxjs';

import { PRLI } from '@prli/prli';



const url = 'http://localhost:49231/PurchaseRequestLineItems';

@Injectable({
  providedIn: 'root'
})

export class PrliService {

  List(): Observable<JsonResponse> {
    return this.http.get(url+"/List") as Observable<JsonResponse>;
  }
  
  Get(id): Observable<JsonResponse> {
    return this.http.get(url+"/Get/" + id) as Observable<JsonResponse>;
  }
  
  Create(prli: PRLI): Observable<JsonResponse> {
    return this.http.post(url+"/Create", prli) as Observable<JsonResponse>;
  }
  
  Change(prli: PRLI): Observable<JsonResponse> {
    return this.http.post(url+"/Change", prli) as Observable<JsonResponse>;
  }

  Remove(prli: PRLI): Observable<JsonResponse> {
    return this.http.post(url+"/Remove", prli) as Observable<JsonResponse>;
  }

    constructor(private http: HttpClient) { }  
  }
  