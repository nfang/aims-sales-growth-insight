import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    trigger('descInOut', [
      /**
       * MUST use translate3d to work around z-index bug in Safari:
       * http://stackoverflow.com/questions/5472802/css-z-index-lost-after-webkit-transform-translate3d
       */
      state('in', style({ transform: 'translate3d(0px,0px,0px)' })),
      state('out', style({ transform: 'translate3d(100%,0px,0px)' })),
      transition('out => in', [
        animate('400ms cubic-bezier(0.0, 0.0, 0.2, 1)')
      ]),
      transition('in => out', [
        style({ opacity: 1 }),
        animate('200ms cubic-bezier(0.4, 0.0, 1, 1)',
          style({
            opacity: 0,
            transform: 'translateY(100%)'
          }))
      ])
    ])
  ]
})
export class DescriptionComponent implements OnInit {

  @Input() content: string;

  get state(): string {
    return this.content && this.content.length ? 'in' : 'out';
  }

  constructor() { }

  ngOnInit() {
  }

}
