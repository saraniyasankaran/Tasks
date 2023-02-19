//1 & 2
/*Create a class called "Shape" whose constructor
takes one parameter:
- colour
Assign "colour" to the instance of Shape with a 
default value of "Transparent"
Add a "type" property to "this" with a default
value of "Shape"
Add a method to "Shape" called "describe" that will log out following to the console:
       "A ${this.colour} ${this.type}"*/
class Shape {
    constructor(colour = "Transparent") {
      this.colour = colour;
      this.type = "Shape";
    }
    describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}
  const myShape = new Shape("Lavender");
  myShape.describe();
  
  console.log(myShape.colour); 
  console.log(myShape.type); 

//3 & 4
/* Create a class called "Square" whose constructor
       takes 2 parameters (Square has to extend Shape):
       - colour
       - sideLength 
       Call the super constructor with "colour"
       Assign "sideLength" to the instance of "Square"
       Assign "Square" to the "type" property*
       
       Add an "area" method to "Square" that will calculate
       and return the total area of the square.
       (Area of a square is: sideLength * sideLength)*/
class Square extends Shape {
    constructor(colour, sideLength) {
      super(colour);
      this.sideLength = sideLength;
      this.type = "Square";
    }
    area()
    {
      return this.sideLength*this.sideLength;
    }
  }
//5
/*Create a class called "Rectangle" whose constructor
       takes 3 parameters (Rectangle has to extend Shape):
       - colour
       - width
       - height
       Call the super constructor with "colour"
       Assign all of these to the instance of "Rectangle"
       Assign "Rectangle" to the "type" property  */
  const mySquare = new Square("Blue", 4);
  console.log(mySquare.colour); 
  console.log(mySquare.sideLength);
  console.log(mySquare.type);
  mySquare.describe(); 
  console.log(mySquare.area());

//6
/* Add an "area" method to "Rectangle" that will calculate
       and return the total area of the square.
       (Area of a rectangle is: width * height) */
  class Rectangle extends Shape {
    constructor(colour, width, height) {
      super(colour);
      this.width = width;
      this.height = height;
      this.type = "Rectangle";
    }
    area()
    {
        return this.width*this.height;
    }
  }
  const myRectangle = new Rectangle("yellow", 4, 8);
  console.log(myRectangle.colour);
  console.log(myRectangle.width); 
  console.log(myRectangle.height); 
  console.log(myRectangle.type); 
  myRectangle.describe(); 
  console.log(myRectangle.area());
//7
/*  Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       for ( const shape of [square, rectangle] ) shape.describe();
       // A blue square
       // A red rectangle
*/
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       for ( const shape of [square, rectangle] ) shape.describe();
       //The first line creates a instance of class named Square with color blue and sidelength 5
       //the second line creates a instance of class named Rectangle with color red and height and width respectively
       //the third and fourth line prints the area of the square and rectangle.
       //the for loop runs for square and rectangle  invoked the describe() method