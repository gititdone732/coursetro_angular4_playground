import { Component } from '@angular/core';
import {DataService } from './data.service';
@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:`<h1>Hello..Welcome to my first Angular4 App</h1>
  <p>This is {{myObject.name}} from {{myObject.location}}</p> 
  <p>{{returnVal}}</p>
  <ul>
  <li *ngFor='let arr of myArray'>{{arr}}</li>
  </ul>
  <li *ngIf="myArray;else otherTempl">myArrayDefined</li>
  <ng-template #otherTempl>myArray not defined</ng-template>


  <button [disabled]="buttoneStatus">Click</button>
  <button (click)="myEvent($event)">myButton</button>
  <h1 [class]="className">Hello</h1>
  <h2 [ngClass]="myClasses">using ng class</h2>

  <h3 [style.color]="titleColor?'green':'pink'">dynamic color change</h3>
  <h3 [ngStyle]="ngStyles">ngStyle not preferred personally</h3>
  `,
 // styleUrls: ['./app.component.css']
 styles:[`
 

 h1
 {
   font-size:2em;
 }
 .colorChange
 {
   color:red;
 }

 .blue-title
 {
   color:blue;
 }
 .large-title
 {
   font-size:3em;
 }
 `]
})
export class AppComponent {
  title = 'app';
constructor(private dataService:DataService)
{
  console.log(this.dataService.cars);
}
returnVal=this.dataService.myData();
  myObject={
    name:'Vrn',
    age:26,
    location:'India'

  };
  myArray=['components','templates','modules'];
  buttoneStatus=false;
  className="colorChange";
  myClasses={
    'blue-title':true,
    'large-title':true
  };
  myEvent(event)
  {
    console.log(event);
  }
  titleColor='green';
  ngStyles={
    'color':'red',
    'font-size':'4em'
  };

}
