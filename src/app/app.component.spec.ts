import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should sort persons by name', () => {
    component.sortByName();

    expect(component.persons).toEqual([
      { age: 45, name: 'Alan Walker' },
      { age: 27, name: 'Alice Ramirez' },
      { age: 67, name: 'Amy Anderson' },
      { age: 32, name: 'Anna Hernandez' },
      { age: 21, name: 'Anne Davis' },
      { age: 74, name: 'Betty Edwards' },
      { age: 69, name: 'Brandon Flores' },
      { age: 39, name: 'Carlos Rivera' },
      { age: 50, name: 'Carol Garcia' },
      { age: 36, name: 'Chris Rodriguez' },
      { age: 47, name: 'Christina Carter' },
      { age: 40, name: 'Christopher Martin' },
      { age: 33, name: 'Craig Williams' },
      { age: 31, name: 'Deborah Martinez' },
      { age: 72, name: 'Debra Adams' },
      { age: 48, name: 'Dennis Coleman' },
      { age: 71, name: 'Donna Bennett' },
      { age: 28, name: 'Doris Alexander' },
      { age: 60, name: 'Elizabeth Evans' },
      { age: 62, name: 'Eric Harris' },
      { age: 71, name: 'Ernest Brooks' },
      { age: 41, name: 'Frances Barnes' },
      { age: 39, name: 'Gregory Collins' },
      { age: 32, name: 'Harry Bell' },
      { age: 21, name: 'Howard Sanchez' },
      { age: 58, name: 'Jack Griffin' },
      { age: 29, name: 'Janet Lopez' },
      { age: 26, name: 'Jennifer Peterson' },
      { age: 55, name: 'John Patterson' },
      { age: 35, name: 'Kathy Cook' },
      { age: 30, name: 'Kelly Lewis' },
      { age: 40, name: 'Kenneth Richardson' },
      { age: 55, name: 'Kevin Reed' },
      { age: 33, name: 'Mark Powell' },
      { age: 56, name: 'Melissa Young' },
      { age: 37, name: 'Michael Hall' },
      { age: 53, name: 'Michelle Simmons' },
      { age: 24, name: 'Mildred Clark' },
      { age: 59, name: 'Pamela Mitchell' },
      { age: 42, name: 'Paula Butler' },
      { age: 43, name: 'Rachel Foster' },
      { age: 66, name: 'Richard Morris' },
      { age: 72, name: 'Rose Moore' },
      { age: 66, name: 'Scott Price' },
      { age: 34, name: 'Shawn Campbell' },
      { age: 25, name: 'Teresa Taylor' },
      { age: 69, name: 'Thomas Baker' },
      { age: 21, name: 'Victor Kelly' },
      { age: 45, name: 'Walter Robinson' },
      { age: 51, name: 'Wanda Stewart' },
    ]);
  });

  it('should sort persons by age', () => {
    component.sortByAge();

    expect(component.persons).toEqual([
      { age: 21, name: 'Anne Davis' },
      { age: 21, name: 'Victor Kelly' },
      { age: 21, name: 'Howard Sanchez' },
      { age: 24, name: 'Mildred Clark' },
      { age: 25, name: 'Teresa Taylor' },
      { age: 26, name: 'Jennifer Peterson' },
      { age: 27, name: 'Alice Ramirez' },
      { age: 28, name: 'Doris Alexander' },
      { age: 29, name: 'Janet Lopez' },
      { age: 30, name: 'Kelly Lewis' },
      { age: 31, name: 'Deborah Martinez' },
      { age: 32, name: 'Anna Hernandez' },
      { age: 32, name: 'Harry Bell' },
      { age: 33, name: 'Mark Powell' },
      { age: 33, name: 'Craig Williams' },
      { age: 34, name: 'Shawn Campbell' },
      { age: 35, name: 'Kathy Cook' },
      { age: 36, name: 'Chris Rodriguez' },
      { age: 37, name: 'Michael Hall' },
      { age: 39, name: 'Carlos Rivera' },
      { age: 39, name: 'Gregory Collins' },
      { age: 40, name: 'Kenneth Richardson' },
      { age: 40, name: 'Christopher Martin' },
      { age: 41, name: 'Frances Barnes' },
      { age: 42, name: 'Paula Butler' },
      { age: 43, name: 'Rachel Foster' },
      { age: 45, name: 'Alan Walker' },
      { age: 45, name: 'Walter Robinson' },
      { age: 47, name: 'Christina Carter' },
      { age: 48, name: 'Dennis Coleman' },
      { age: 50, name: 'Carol Garcia' },
      { age: 51, name: 'Wanda Stewart' },
      { age: 53, name: 'Michelle Simmons' },
      { age: 55, name: 'Kevin Reed' },
      { age: 55, name: 'John Patterson' },
      { age: 56, name: 'Melissa Young' },
      { age: 58, name: 'Jack Griffin' },
      { age: 59, name: 'Pamela Mitchell' },
      { age: 60, name: 'Elizabeth Evans' },
      { age: 62, name: 'Eric Harris' },
      { age: 66, name: 'Richard Morris' },
      { age: 66, name: 'Scott Price' },
      { age: 67, name: 'Amy Anderson' },
      { age: 69, name: 'Brandon Flores' },
      { age: 69, name: 'Thomas Baker' },
      { age: 71, name: 'Ernest Brooks' },
      { age: 71, name: 'Donna Bennett' },
      { age: 72, name: 'Debra Adams' },
      { age: 72, name: 'Rose Moore' },
      { age: 74, name: 'Betty Edwards' },
    ]);
  });
});
