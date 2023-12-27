import { Component, Input, SimpleChanges } from '@angular/core';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  todo?: Todo;
  todoTitle = this.todo?.name;
  valor: string = '';

  @Input() todos?: Todo[];

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.list().subscribe(dados => this.todos = dados);
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

  printar() {
    alert('Teste de alerta');
  }
}
