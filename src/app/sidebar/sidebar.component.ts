import { Component, OnInit } from '@angular/core';
import {
  animate,
  style,
  state,
  transition,
  trigger
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounce';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('itemInOut', [
      state('in', style({ opacity: 1, height: '23px' })),
      transition('void => *', [
        style({ opacity: 0, height: 0 }),
        animate('200ms')
      ]),
      transition('* => void', [
        animate('200ms', style({ opacity: 0, height: 0 }))
      ])
    ]),
    trigger('sidebarEnter', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  private _items: Array<string> = [
    'Value Selling',
    'Ability to Differentiate',
    'Overcoming Objections',
    'Sales Competencies',
    'Risk & Insurance Plans',
    'Bid Preparation',
    'BD Tools & Templates',
    'Service Excellence',
    'Product Development',
    '(Human Asset & Environmental)',
    'Business Planning',
    'Business Benchmarking',
    'Ideal Customer Profile',
    'Industry Segmentation',
    'Marketing',
    'Website Development',
    'Search Engine Optimisation',
    'Sales Process',
    'Lead Generation Outsourcing',
    'Net Promoter Score',
    'Business Growth Coaching',
    'Top Performer',
    'Employee Benchmarking'
  ];

  private query: any = '';

  get items(): Array<string> {
    return this._items.filter(item => {
      return item.search(this.query) >= 0;
    });
  }

  searchControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.searchControl.valueChanges
      .debounce((value) => {
        // Emits nothing when input contains only whitespaces
        if (/^\s+$/.test(value)) {
          return Observable.never();
        }

        return value && value.trim().length && /^\w*$/.test(this.query)
          ? Observable.timer(300) : Observable.timer(0);
      })
      .subscribe(query => {
        this.query = new RegExp(query, 'i');
      });
  }

}
