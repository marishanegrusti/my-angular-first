import { Component, Input, Output, EventEmitter, TrackByFunction} from '@angular/core';
import { ITask } from './todo-list.type';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent  {  //implements OnInit
  // @Input() task: ITask= { title: 'Title88_app-todo-list',  description: 'Comentar1'}

  // @Input() tasks: ITask[] =  [{title: 'Test_00TodoListComponent', description: 'Description_00'} , {title: 'Test_11', description: 'Description_11'}] ;
  @Input() tasks: ITask[] = [];
  
  // @Input() tasks: ITask[] =[{title: 'Test', description: 'Test Description'} , {title: 'Test 1', description: 'Test Description 1'}] 
  @Output() taskChanged: EventEmitter<ITask>;
  @Output() taskChanged2: EventEmitter<ITask>;

  constructor() { 
    this.taskChanged = new EventEmitter();
    this.taskChanged2 = new EventEmitter();
    
  }

  public onTaskClick(changedTask: ITask): void {
    console.log("changedTask=",changedTask)
    this.taskChanged.emit(changedTask)
    
  }

  public onTaskClick2(changedTask: ITask): void {
    console.log("changedTask2=",changedTask)
   this.taskChanged2.emit(changedTask)
    // taskChanged2
  }
}