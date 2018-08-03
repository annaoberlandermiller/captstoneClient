import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../JsonResponse';
import { Observable } from 'rxjs';
import { User } from '@user/user';

const url = 'http://localhost:49231/Users';

@Injectable({
  providedIn: 'root'
})


export class UserService {
Users: User[];

List(): Observable<JsonResponse> {
  return this.http.get(url+"/List") as Observable<JsonResponse>;
}

Get(id): Observable<JsonResponse> {
  return this.http.get(url+"/Get/" + id) as Observable<JsonResponse>;
}

Create(user:User): Observable<JsonResponse> {
  return this.http.post(url+"/Create", user) as Observable<JsonResponse>;
}

Change(user:User): Observable<JsonResponse> {
  return this.http.post(url+"/Change", user) as Observable<JsonResponse>;
}

Remove(user:User): Observable<JsonResponse> {
  return this.http.post(url+"/Remove", user) as Observable<JsonResponse>;
}

  constructor(private http: HttpClient) { }  
}
