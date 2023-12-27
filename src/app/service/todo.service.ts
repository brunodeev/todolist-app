import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Todo[]>(this.API);
  }

  create(todo: Todo) {
    return this.http.post(this.API, todo);
  }
}
