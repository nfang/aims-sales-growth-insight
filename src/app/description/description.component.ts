import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    trigger('descInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
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
