import { Component } from '@angular/core';

import { getPersons, Person } from './persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public persons: Person[];

  public constructor() {
    this.persons = getPersons();
  }

  public sortByName(): void {
    this.persons.sort((a,b)=>a.name.localeCompare(b.name));
  }

  public sortByAge(): void {
    this.persons.sort((a,b)=>a['age'] - b['age']);
  }
}
