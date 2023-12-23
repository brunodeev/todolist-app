import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  lastName: string = '';

  listItems: string[] = ['Pao', 'Leite', 'Carro'];
  
  updateName(name: string) {
    alert(`Seu nome é ${name}!`);
  }
}
