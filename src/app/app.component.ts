import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import { ITask } from './components/todo-list/todo-list.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, HomeComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'my-angular-first-77раз';
  isDisabled=false;//true;
  // tasks = [{title: 'новий т 17'},{title : 'новий заголовок 22'}];
  //tasks = [{title: 'Test0', description: 'Description0'} , {title: 'Test1', description: 'Description1'}] ;
  tasks: ITask[] =  [{title: 'Test_1002424', description: 'Description_0024242'} , {title: 'Test_11', description: 'Description_11'}] ;
  // task: ITask= { title: 'Title88_app-root',  description: 'Comentar1'}

}
