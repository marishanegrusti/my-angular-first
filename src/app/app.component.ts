import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import { ITask } from './components/todo-list/todo-list.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomeComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  title : string = 'my-angular-first-77раз';
  isDisabled=false;//true;
  //onTaskClick=true;
  // tasks = [{title: 'новий т 17'},{title : 'новий заголовок 22'}];
  //tasks = [{title: 'Test0', description: 'Description0'} , {title: 'Test1', description: 'Description1'}] ;
  tasks: ITask[] =  [{title: 'Заголовок1_родительский', description: 'Содержание1_род.', color: 'red'} , 
                     {title: 'Title_2', description: 'Description_2'}
                    ] ;
  // task1: ITask ={title: 'tit1', description: 'Des1'} ;
  // task: ITask= { title: 'Title88_app-root',  description: 'Comentar1'}

  
  public onTaskClick(changedTask: ITask): void {
    console.log("changedTask_from_perent=",changedTask)
    // this.tasks.push(changedTask) ;
    this.tasks.push({...changedTask, color: 'green'}) ;

  }

  public onTaskClick2(changedTask: ITask): void {
    console.log("changedTask_from_perent_blue=",changedTask)
    // this.tasks.push(changedTask) ;
    this.tasks.push({...changedTask, color: 'blue'}) ;

  }



  // protected readonly onTaskClick = onTaskClick;

  // onTaskClick($event: string) {
  //   console.log("eventEmmiter:",$event)
  // }


  // protected readonly onclick = onclick;

  // onClick($event: string) {
  //   console.log("eventEmmiter:",$event)
  // }


}
