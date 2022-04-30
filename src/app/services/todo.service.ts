import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from '../urls'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public getTodos = Urls.baseUrl + Urls.getTodos;

  constructor(private http: HttpClient) { }

  fetchTodos() {
    return this.http.get(this.getTodos);
  }
}
