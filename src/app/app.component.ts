import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/core';

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
  title = '';

  constructor() {
  }

  setContent(content) {
    this.title = '';
    setTimeout(() => { this.title = content; }, 200);
  }
}
