import { Injectable } from '@angular/core';
import { ITask } from './components/todo-list/todo-list.type';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private _items: ITask[] = [];
  constructor() { }

  get headerItems(): ITask[] {
    return this._items;
  }

  set headerItems(newItems: ITask[]) {
    this._items = newItems;
  }

  // updateItem(id: number, newName: string){
  //   const currentItem = this._items.find(item => item.id  === id);

  //   if(currentItem){
  //     currentItem.name = newName
  //   }
  // }
}
