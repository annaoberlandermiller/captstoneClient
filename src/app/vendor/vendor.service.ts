import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../JsonResponse';
import { Observable } from 'rxjs';
import { Vendor } from '@vendor/vendor';

const url = 'http://localhost:49231/Vendors';

@Injectable({
  providedIn: 'root'
})

export class VendorService {

  Vendors: Vendor[];

  List(): Observable<JsonResponse> {
    return this.http.get(url+"/List") as Observable<JsonResponse>;
  }
  
  Get(id): Observable<JsonResponse> {
    return this.http.get(url+"/Get/" + id) as Observable<JsonResponse>;
  }
  
  Create(vendor:Vendor): Observable<JsonResponse> {
    return this.http.post(url+"/Create", vendor) as Observable<JsonResponse>;
  }
  
  Change(vendor:Vendor): Observable<JsonResponse> {
    return this.http.post(url+"/Change", vendor) as Observable<JsonResponse>;
  }
  
  Remove(vendor:Vendor): Observable<JsonResponse> {
    return this.http.post(url+"/Remove", vendor) as Observable<JsonResponse>;
  }
  
    constructor(private http: HttpClient) { }  
  }
  