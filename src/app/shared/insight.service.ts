import { Injectable } from '@angular/core';

import { Objective } from './objective';
import { Element } from './element';
import { Category } from './category';
import { CATEGORIES, ELEMENTS, OBJECTIVES } from '../data/database';

@Injectable()
export class InsightService {

  constructor() { }

  get categories(): Array<Category> {
    return CATEGORIES;
  }

  get objectives(): Array<Objective> {
    return OBJECTIVES;
  }

  get elements(): Array<Element> {
    return ELEMENTS;
  }

  findElementsFor(objective: Objective): Array<Element> {
    if (objective.elements) {
      return ELEMENTS.filter(el => {
        return objective.elements.indexOf(el.id) >= 0;
      });
    }
    return [];
  }

}
