import { Component, OnInit } from '@angular/core';
import {
  animate,
  style,
  state,
  transition,
  trigger
} from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('itemInOut', [
      state('in', style({ opacity: 1, height: '23px' })),
      transition('void => *', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({ opacity: 0, height: 0 }))
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

  get items(): Array<string> {
    if (!/^\w*$/.test(this.query)) {
      return this._items;
    }

    return this._items.filter((val) => {
      return val.search(new RegExp(this.query, 'i')) >= 0;
    });
  }

  query: string = '';

  constructor() { }

  ngOnInit() {
  }

}
