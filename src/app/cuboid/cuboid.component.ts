import { Component, Input, OnInit } from '@angular/core';

const Color = require('color');

@Component({
  selector: 'cuboid',
  templateUrl: './cuboid.component.html',
  styleUrls: ['./cuboid.component.scss']
})
export class CuboidComponent implements OnInit {

  @Input() color: string;
  @Input() highlight: boolean;

  constructor() { }

  ngOnInit() { }

  get frontColor(): string {
    return this.highlight ? this.lighten(this.color, .5) : this.color;
  }

  get sideColor(): string {
    let sideColor = Color(this.color).darken(.2).hexString();
    return this.highlight ? this.lighten(sideColor, .5) : sideColor;
  }

  private lighten(color: string, amount: number): string {
    return Color(color).lighten(amount).hexString();
  }
}
