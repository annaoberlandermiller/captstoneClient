import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../JsonResponse';
import { Observable } from 'rxjs';
import { Product } from '@product/product';

const url = 'http://localhost:49231/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products: Product[];

  List(): Observable<JsonResponse> {
    return this.http.get(url+"/List") as Observable<JsonResponse>;
  }
  
  Get(id): Observable<JsonResponse> {
    return this.http.get(url+"/Get/" + id) as Observable<JsonResponse>;
  }
  
  Create(product: Product): Observable<JsonResponse> {
    return this.http.post(url+"/Create", product) as Observable<JsonResponse>;
  }
  
  Change(product: Product): Observable<JsonResponse> {
    return this.http.post(url+"/Change", product) as Observable<JsonResponse>;
  }
  
  Remove(product: Product): Observable<JsonResponse> {
    return this.http.post(url+"/Remove", product) as Observable<JsonResponse>;
  }
  
    constructor(private http: HttpClient) { }  
  }
  