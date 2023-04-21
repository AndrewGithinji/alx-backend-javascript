export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // eslint-disable-next-line no-new-object
    return new Object(this);
  }
}
