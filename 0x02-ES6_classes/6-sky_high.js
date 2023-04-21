import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (!(typeof val === 'number')) {
      throw new TypeError(`${val} must be number`);
    }
    this._floors = val;
  }

  set sqft(val) {
    if (!(val instanceof Number)) {
      throw new TypeError(`${val} must be number`);
    }
    this._sqft = val;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
