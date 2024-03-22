import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero'; // Correct the path if needed
import { HEROES } from '../mock-heroes'; // Correct the path if needed
import { RemoveSpacesPipe } from '../remove-spaces.pipe';
import { UpperCaseDirective } from '../upper-case.directive';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule, // This provides the *ngFor directive
    RemoveSpacesPipe, // And this is your custom pipe, which also needs to be standalone
    UpperCaseDirective
  ],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent{
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }
}
