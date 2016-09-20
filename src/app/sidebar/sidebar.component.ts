import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { animate, style, state, transition, trigger } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/debounce';

import { InsightService } from '../shared/insight.service';
import { Objective } from '../shared/objective';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('itemInOut', [
      state('in', style({ opacity: 1, 'max-height': '100px' })),
      transition('void => *', [
        style({ opacity: 0, 'max-height': 0 }),
        animate('200ms')
      ]),
      transition('* => void', [
        animate('200ms', style({ opacity: 0, 'max-height': 0 }))
      ])
    ]),
    trigger('sidebarEnter', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms 200ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  private _items: Array<Objective>;

  @Output() selected: EventEmitter<Objective> = new EventEmitter<Objective>();

  query: any = '';

  get items(): Array<Objective> {
    return this._items.filter(item => {
      return item.name.search(this.query) >= 0;
    });
  }

  searchControl: FormControl = new FormControl();

  constructor(private _service: InsightService) {
    this._items = this._service.objectives;
  }

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

  select(item) {
    this.selected.emit(item);
  }

}
