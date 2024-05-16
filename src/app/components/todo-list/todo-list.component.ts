import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ITask } from './todo-list.type';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  //@Input() tasks: ITask[] = [title: 'Це заголовок1',  discription: 'Це коментар1'];
  @Input() tasks: ITask[] = [];
  @Output() taskChanged: EventEmitter<ITask>;

  constructor() { 
    this.taskChanged = new EventEmitter();
  }
  
  public onTaskClick(changedTask: ITask): void {
    this.taskChanged.emit(changedTask)
  }
}

