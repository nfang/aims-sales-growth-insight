/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { StackComponent } from './stack.component';
import { CuboidComponent } from '../cuboid/cuboid.component';
import { InsightService } from '../shared/insight.service';

const fakeInsightService = {
  objectives: [],
  categories: [],
  elements: [],
  findElementsFor: (objective) => {
    return [];
  }
};

describe('Component: Stack', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CuboidComponent,
        StackComponent
      ],
      providers: [
        { provide: InsightService, useValue: fakeInsightService }
      ]
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(StackComponent);
    let component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
