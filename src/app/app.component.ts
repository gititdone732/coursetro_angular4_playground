import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<h1>Hello..Welcome to my first Angular4 App</h1>
  <p>This is {{myObject.name}} from {{myObject.location}}</p> 
  <ul>
  <li *ngFor='let arr of myArray'>{{arr}}</li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myObject={
    name:'Vrn',
    age:26,
    location:'India'

  };

  myArray=['components','templates','modules'];
}
