import { Component } from '@angular/core';
import { HeroService } from '../../hero.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public heroService: HeroService) {
  }
  onHomeClick() {
  console.log(this.heroService.headerItems)
  }

}
