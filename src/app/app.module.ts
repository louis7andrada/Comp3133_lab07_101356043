import { NgModule } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // If you're using [(ngModel)] in your templates
import { Component } from '@angular/core';
import { UpperCaseDirective } from './upper-case.directive';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component'; // Adjust the path as needed

// If you have created any pipes, import them here
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import {CommonModule} from "@angular/common"; // Adjust the path as needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // This provides the *ngFor directive
    RemoveSpacesPipe, // And this is your custom pipe, which also needs to be standalone
    UpperCaseDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@NgModule({
  declarations: [
    InputFormatDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
