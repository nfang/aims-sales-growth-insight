/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar.component';
import { InsightService } from '../shared/insight.service';

const fakeInsightService = {
  objectives: [
    {
      id: 1, name: 'Value Selling', description: 'Value Selling', elements: [1, 7, 8, 9]
    }, {
      id: 2, name: 'Ability to Differentiate', description: 'Ability to Differentiate', elements: [1, 7, 8, 9]
    }, {
      id: 3, name: 'Overcoming Objections', description: 'Overcoming Objections', elements: [1, 7, 8, 9, 10]
    }
  ],
  categories: [],
  elements: [],
  findElementsFor: (objective) => {
    return [];
  }
};

let fixture: ComponentFixture<SidebarComponent>;
let component: SidebarComponent;

describe('Component: Sidebar', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: InsightService, useValue: fakeInsightService }
      ]
    });
  });

  it('should create an instance', () => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have a search field', () => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    let searchEl = fixture.debugElement.query(By.css('input[type=search]'));
    expect(searchEl).toBeTruthy();
  });

  it('should list objectives', () => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let listItemEls = fixture.debugElement.queryAll(By.css('ul > li'));
    let service = fixture.debugElement.injector.get(InsightService);
    expect(listItemEls.length).toBe(service.objectives.length);
  });

  it('should filter objectives according to criteria', () => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.query = new RegExp('value', 'i');
    expect(component.items.length).toBe(1);
  });

});
