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

  update(body: any) {
    return this.http.put<Todo[]>(this.API, `${body}`);
  }

  create(todo: Todo) {
    return this.http.post<Todo>(this.API, todo);
  }

  delete(id: number) {
    return this.http.delete<Todo>(`${this.API}/${id}`)
  }
}
