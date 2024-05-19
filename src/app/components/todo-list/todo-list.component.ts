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
// trackByItemId: TrackByFunction<ITask> | undefined;

  constructor() { 
    this.taskChanged = new EventEmitter();
  }
  

  // onClick() {
  //   this.articleChange.emit(this.articleViewer.title)
  // }

  public onTaskClick(changedTask: ITask): void {
    // this.taskChanged.emit({ title: 'Title88_app-todo-list',  description: 'Comentar1'})
    this.taskChanged.emit(changedTask)

  }
}

//==============
// *@Component*  
// ({
// selector: 'zippy',
// template: `
// <div class="zippy">
// <div (click)="toggle()">Toggle</div>
// <div [hidden]="!visible">
// <ng-content></ng-content>
// </div>
// </div>`})
// export class Zippy {
// visible: boolean = true;  

// *@Output* — () open: EventEmitter<any> = new EventEmitter();  

// *@Output*  
// () close: EventEmitter<any> = new EventEmitter();

// toggle() {
// this.visible = !this.visible;
// if (this.visible) {
// this.open.emit(null);
// } else {
// this.close.emit(null);
// }
// }
// }
// Access the event object with the $event argument passed to the output event handler:

// <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
// @see — Observables in Angular

// @publicApi

// @publicApi