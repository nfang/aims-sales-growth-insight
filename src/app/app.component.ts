import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/core';

import { InsightService } from './shared/insight.service';
import { Objective } from './shared/objective';
import { Element } from './shared/element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('logoEnter', [
      state('in', style({ transform: 'rotate(0deg) scale(1)' })),
      transition('void => *', [
        style({ transform: 'rotate(-1800deg) scale(0)' }),
        animate('500ms 500ms')
      ])
    ]),
    trigger('brandEnter', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-120%)' }),
        animate('500ms 500ms')
      ])
    ]),
    trigger('headingEnter', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms 500ms ease-out')
      ])
    ])
  ]
})
export class AppComponent {
  selectedObjective: Objective = new Objective();

  get selectedElements(): Array<Element> {
    return this._service.findElementsFor(this.selectedObjective);
  }

  constructor(private _service: InsightService) { }

  setObjective(objective: Objective) {
    this.selectedObjective = new Objective();
    setTimeout(() => { this.selectedObjective = objective; }, 200);
  }
}
