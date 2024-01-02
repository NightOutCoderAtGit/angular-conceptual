import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  //templateUrl: './app.component.html',
  template: `
    <div class = "data">

      <!--One way data binding-->
      <!-- 
      <button (click)="handleClick($event)">Reset</button>
      <input type="text" [value] ="title" (blur)="handleBlur($event)" (input)="handleInput($event)">
      <div> {{ title }} </div> 
      -->

      <!--Two way data binding-->
      <!-- <input type="text" [ngModel] ="name" (ngModelChange)="handleChange($event)">
      <div> {{ name }} </div> -->

      <!--Two way data binding shorter form-->
      <!-- <input type="text" [(ngModel)] ="name">
      <div> {{ name }} </div> -->

      <!-- #ref -->
      <!-- 
      <button (click)="handleClickRef(inputData.value)">Reset</button>
      <input type="text" #inputData>
      <div> {{ name }} </div> 
      -->
      
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title;
  name: string = 'Basics'

  constructor(){
    this.title = 'angular-basics-1';
  }

  handleBlur(event: any) {
    this.title = event.target.value;
    console.log(event);
  }
  handleInput(event: any){
    this.title = event.target.value;
    this.name = event.target.value;
    console.log(event);
  }
  handleClick(event: any){
    this.title = 'Dummy input';
    console.log(event);
  }
  handleChange(value: any){
    this.name = value;
  }

  handleClickRef(value: any){
    this.name = value;
  }
}
