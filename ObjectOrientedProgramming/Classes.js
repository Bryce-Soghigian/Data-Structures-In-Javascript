/**
 * Defining Classes
 * One way to define a class is the use a class declaration . To delare a class you use the class keyword with the name of the class
 */
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  /**
   * The "static" keyword defines a static method or property for a class.
   * Static members(properties and methods) are called without instantiating their class and cannot be called through a class instance
   * Static methods are often used to create utility functions for an application whereas static properties are useful for caches, fixed-configuration, or any other data that you don/t need to replicate
   *     */

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
  //Getter
  get area() {
    return this.calculateArea();
  }

  calculateArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(100, 100);
console.log(square.area);

console.log(Rectangle.displayName)// Will return point
console.log(square.displayName)// will return undefined due to it beign a static declariation


/**
 * HOISTING
 *
 *
 *
 * An important difference between classes and fucntions is that functions are hoisted and classes are not you
 * first need to declare a class and then access it otherwise you will get a reference error
 *
 * const p = new Rectangle():// Reference error
 *
 * class Rectangle{}
 */

 /**
  * Binding this with protoyype and static methods
  */

//   let Animal = class Animal {
//       speak(){
//           return this
//       }
//       static eat(){
//           return this
//       }
//   }

//   let obj = new Animal();
//   console.log(  obj.speak())
// let speak = obj.speak();
// console.log(speak()) // Breaks because speak is not a function


function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object (in non–strict mode)

let eat = Animal.eat;
eat(); // global object (in non-strict mode)