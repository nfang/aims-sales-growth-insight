/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar.component';
import { InsightService } from '../shared/insight.service';

const fakeInsightService = {
  objectives: [],
  categories: [],
  elements: [],
  findElementsFor: (objective) => {
    return [];
  }
};

describe('Component: Sidebar', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [ ReactiveFormsModule ],
      providers: [
        { provide: InsightService, useValue: fakeInsightService }
      ]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(SidebarComponent);
    let component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should list objectives', () => {

  });

  it('should filter objectives according to criteria', () => {

  });

});
