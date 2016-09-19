import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/core';

import { InsightService } from '../shared/insight.service';
import { Element } from '../shared/element';

@Component({
  selector: 'stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  animations: [
    trigger('topBoardEnter', [
      state('in', style({ transform: 'translateZ(75px)' })),
      transition('void => *', [
        style({ transform: 'translateZ(600px)' }),
        animate('1500ms 1300ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('midBoardEnter', [
      state('in', style({ transform: 'translateZ(0)' })),
      transition('void => *', [
        style({ transform: 'translateZ(600px)' }),
        animate('1500ms 1100ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('btmBoardEnter', [
      state('in', style({ transform: 'translateZ(-75px)' })),
      transition('void => *', [
        style({ transform: 'translateZ(600px)' }),
        animate('1500ms 900ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('shadowEnter', [
      state('in', style({ opacity: 1, '-webkit-filter': 'blur(8px)' })),
      transition('void => *', [
        style({ opacity: 0, '-webkit-filter': 'blur(16px)' }),
        animate('1900ms 1100ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class StackComponent implements OnInit {

  @Input() highlightedElements: Array<Element>;

  get salesElements(): Array<Element> {
    return this._service.elements.filter(el => el.category.id === 1);
  }

  get operationalElements(): Array<Element> {
    return this._service.elements.filter(el => el.category.id === 2);
  }

  isHighlighted(element: Element): boolean {
    return !!this.highlightedElements.find(el => el.id === element.id);
  }

  constructor(private _service: InsightService) { }

  ngOnInit() {
    this.highlightedElements = new Array<Element>();
  }

}
