import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
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
