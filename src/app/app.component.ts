import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  lastName: string = '';
  
  updateName(name: string, lastName: string) {
    alert(`Seu nome é ${name}, e seu sobrenome é ${lastName}`);
  }
}
