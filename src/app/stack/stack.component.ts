import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  animations: [
    trigger('topBoardEnter', [
      state('in', style({ transform: 'translateZ(75px)' })),
      transition('void => *', [
        style({ transform: 'translateZ(600px)' }),
        animate('1500ms 600ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('midBoardEnter', [
      state('in', style({ transform: 'translateZ(0)' })),
      transition('void => *', [
        style({ transform: 'translateZ(600px)' }),
        animate('1500ms 400ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('btmBoardEnter', [
      state('in', style({ transform: 'translateZ(-75px)' })),
      transition('void => *', [
        style({ transform: 'translateZ(600px)' }),
        animate('1500ms 200ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ]),
    trigger('shadowEnter', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1900ms 400ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class StackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
