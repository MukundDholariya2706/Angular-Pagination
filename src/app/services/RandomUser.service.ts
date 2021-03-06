import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomUserService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = 'https://randomuser.me/api/?results=10';
    return this.http.get<any>(url);
  }
}
