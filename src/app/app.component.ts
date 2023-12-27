import { Component, Input, SimpleChanges } from '@angular/core';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  todo?: Todo;
  valor: string = '';

  @Input() todos?: Todo[];

  constructor(private service: TodoService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.service.list().subscribe(tasks => this.todos = tasks);
  }
  
  addTodo(todoTitle: string) {
    if(todoTitle != '' && todoTitle != undefined) {
      this.valor = '';
      this.todo = {
        "name": todoTitle,
        "done": false
      }
      this.service.create(this.todo).subscribe();
      this.service.list().subscribe(dados => this.todos = dados);
    }
  }

  deletar(itemId?: number) {
    this.service.delete(itemId!).subscribe(() => this.getTasks());
  }
}
