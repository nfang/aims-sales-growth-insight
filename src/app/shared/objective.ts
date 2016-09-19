export class Objective {

  id: number;
  name: string;
  description: string;
  elements: Array<number>;

  constructor() {
    this.elements = new Array<number>();
  }

}
