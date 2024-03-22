import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component'; // adjust the path as necessary

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent], // Import the standalone HeroesComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab07';
}
