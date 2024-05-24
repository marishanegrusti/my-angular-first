import { Component } from '@angular/core';
import { ITask } from '../todo-list/todo-list.type';
import { HeroService } from '../../hero.service';
import { NgForOf, NgIf} from "@angular/common";
import { HighlightDirective } from '../../highlight.directive'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgForOf,NgIf,HighlightDirective ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  items: ITask[] = [
    { id: 1, name: 'Name 1', title: 'Item 1', description: 'Содержание1_service', color: 'red'},
    { id: 2, name: 'Name 2', title: 'Item 2', description: 'Содержание2 service', color: 'red'},
    { id: 3, name: 'Name 3', title: 'Item 3', description: 'Содержание3_.', color: 'red'}
  ];

  constructor(public heroService: HeroService) {
  }

  // ngOnDestroy(): void {
  //       throw new Error('Method not implemented.');
  //   }

  trackByItemId(index: number, item: any): number {
    return item.id; // Return the unique identifier for the item
  }

  updateHeaderItems() {
    this.heroService.headerItems = this.items;

    console.log(this.heroService.headerItems)
  }

  // ngOnInit(): void {
  //   console.log("On Init")
  // } 

}
