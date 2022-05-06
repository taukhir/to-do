import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Urls } from '../urls';
import {Task} from '../task';

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

  public getTodosApi = Urls.baseUrl + Urls.getTodos;
  public deleteTodoApi = Urls.baseUrl + Urls.deleteTodo;
  public addTodoApi = Urls.baseUrl + Urls.addTodo;
  public updateTodoApi = Urls.baseUrl + Urls.updateTodo;

  constructor(private http: HttpClient) { }

  fetchTodos(): Observable<any> {
    return this.http.get<any>(this.getTodosApi).pipe(retry(1),
      catchError(this.handleError));
  }

  addTodo(data :Task) : Observable<any> {
    return this.http.post<any>(this.addTodoApi,data).pipe(retry(1),
    catchError(this.handleError));
  }

  deleteTodo(id : number) :Observable<any> {
    return this.http.delete<any>(this.deleteTodoApi+"/"+id).pipe(retry(1),
    catchError(this.handleError));
  }

  updateTodo(data : Task, id : number) :Observable<any> {
    return this.http.put<any>(this.updateTodoApi+"/"+id, data).pipe(retry(1),
    catchError(this.handleError));
  }

  patchTodo(data : Task, id : number) :Observable<any> {
    return this.http.put<any>(this.updateTodoApi+"/"+id, data).pipe(retry(1),
    catchError(this.handleError));
  }

  // updateTodoCompletionStatus(data : Task) :Observable<any> {
  //   return this.http.put<any>(this.updateTodoApi, data).pipe(retry(1),
  //   catchError(this.handleError));
  // }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
      console.error('An error occurred:', error.error.message);
    } else {
      // Get server-side error
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`);
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
