import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
//import {ITask} from './components/todo-list/todo-list.type';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, HomeComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'my-angular-first-4раз';
  isDisabled=false;//true;

}
