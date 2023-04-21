export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new TypeError('Abstract class "Building" cannot be instantiated directly.');
    }
    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new TypeError('Classes extending Building must implement evacuationWarningMessage method.');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof val !== 'number') {
      throw new TypeError('sqft must be a number.');
    }
    this._sqft = val;
  }
}
