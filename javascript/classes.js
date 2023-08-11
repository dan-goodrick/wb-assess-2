// Complete the class definition for Bicycle so it models properties of bicycles
// outlined below (you'll find the property names you should use in the tests):
//
// - All bicycles have 2 wheels
// - There are a bunch of bicycle manufacturing companies (Schwinn, Santa Fe, etc.) so
//   bicycles might come from different manufacturers
// - Bicycles come in different colors (ex.: red, silver, blue…)
class Bicycle {
  constructor(color="", manufacturer=""){
    this.manufacturer=manufacturer
    this.color = color
    this.numWheels = 2
  }
}
const bike = new Bicycle("schwinn", 'red')
console.log(bike.color)
// This User class is intended to be used in a web application where users can
// log in with a username and password.
//
// Your task is to implement the processChangePassword method that'll be called to
// process data from a password change form. As a security measure, the method
// should check the given currentPassword to make sure it matches the one
// stored on the User instance. If they match, it should update the user's
// password with the value of the new password and return true. If they don't
// match, it should return false.
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  processChangePassword(currentPassword, newPassword) {
    if (this.password===currentPassword){
      this.password = newPassword
      return true
    }
    return false
  }
}

const dan = new User('dan', 'safe')
console.log(dan.processChangePassword('save', 'safer'))
console.log(dan.password)
// This Book class is complete -- you don't need to change anything here. Instad,
// you'll use it to implement two methods on the Library class below:
//
// - createAndAddBook: This method should create a new Book instance with the
//   given title and author and add it to the Library's books array.
// - findBooksByAuthor: This method should return an array of all the books in
//   the Library's books array that were written by the given author. If no
//   books are found, it should return an empty array.
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  createAndAddBook (title, author){
    const book = new Book(title, author)
    this.books.push(book)
  }
  findBooksByAuthor (author){
    return this.books.filter(obj => obj.author === author)
  }
}

const lib = new Library()
lib.createAndAddBook("lost", "milton")
lib.createAndAddBook("lest", "malton")
lib.createAndAddBook("paradise", "malton")
console.log(lib.findBooksByAuthor('milton'))
// You might be familiar with the fact that, in geometry, squares are rectangles
// with four equal sides. In other words, Square is a subclass of Rectangle.
//
// The Rectangle class is already complete. Complete the Square class according
// to these specifications:
//
// - Squares have equal sides, so Square should have constructor that takes one
//   argument: a number used to set the value of both this.length and this.width
// - Square should override its parent's getArea method. Square's version of
//   getArea needs to do some extra validation to make sure that the area is
//   valid for a square (because it's possible that a user could have
//   accidentally updated the square's length or width and the sides are no longer
//   the same length):
//   - A square is valid if its length and width are equal
//   - If the square is valid, return the area of the square
//   - If the square is invalid, return undefined
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}
const rect = new Rectangle(3,4)
rect
class Square extends Rectangle {
  constructor(dim){
    super(dim, dim)
  }
  getArea(){
    if (this.length === this.width)
{    return super.getArea()
}  }
}
const square = new Square(5)
square.length = 6
console.log(square.getArea())
export { Bicycle, Book, Library, Rectangle, Square, User };
