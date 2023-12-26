import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoTitle: string = '';

  listItems: string[] = ['Pao', 'Leite', 'Carro'];
  
  addTodo(todoTitle: string) {
    if(todoTitle != '' && todoTitle != undefined) {
      this.listItems.push(todoTitle);
    }
  }
}
