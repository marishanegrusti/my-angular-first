import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ITask } from './todo-list.type';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent  {  //implements OnInit
  // @Input() task: ITask= { title: 'Title88_app-todo-list',  description: 'Comentar1'}

  // @Input() tasks: ITask[] =  [{title: 'Test_00TodoListComponent', description: 'Description_00'} , {title: 'Test_11', description: 'Description_11'}] ;
  @Input() tasks: ITask[] = [];
  // @Input() tasks: ITask[] =[{title: 'Test', description: 'Test Description'} , {title: 'Test 1', description: 'Test Description 1'}] 
  @Output() taskChanged: EventEmitter<ITask>;

  constructor() { 
    this.taskChanged = new EventEmitter();
  }
  
  public onTaskClick(changedTask: ITask): void {
    this.taskChanged.emit(changedTask)
  }
}

