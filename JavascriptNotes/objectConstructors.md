# The Object Constructor
Make bob using the Object constructor

```javascript
var bob = new Object();
bob.name = "Bob Smith";

//Add bob's age/set it equal to 20
bob.age = 20;
```

## Custom Constructors

```javascript
function Person(name,age) {
  this.name = name;
  this.age = age;
}
```

Using our constructor make bob and susan

```javascript
var bob = new Person("Bob Smith", 30);

var susan = new Person("Susan Jordan", 25);
```

Add george, whose name is "George Washington" and age is 275
```javascript
var george = new Person("George Washington", 275);
console.log(george);
```

## Try it out
```javascript
function Cat(age, color) {
  this.age = age;
  this.color = color;
}
```
Make a Dog constructor here
```javascript
function Dog(age, name, breed, gender) {
    this.age = age;
    this.name = name;
    this.breed = breed;
    this.gender = gender;
};
```

## More Options
Using shared Properties
```javascript
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally =  new Person ();
sally.name = "Sally Bowles";
sally.age = 39;

var holden = new Person ();
holden.name = "Holden Caulfield";
holden.age = 16;

console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);
```

## Constructor With Methods
```javascript
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // make perimeter function
  this.calcPerimeter = function() {
      return (2 * this.height) + (2 * this.width);
     }
};

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
```

## Constructors in Review
```javascript
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };
}
```

Now we can easily make all of our rabbits
```javascript
var rabbit1 = new Rabbit("fluffy");

var rabbit2 = new Rabbit("happy");

var rabbit3 = new Rabbit("sleepy");


this.describeMyself = function() {
    console.log("I'm a very " + rabbit1 + " rabbit..");
    console.log("I don't feel like a very " + rabbit2 + " rabbit");
    console.log("Yesterday, I was a " + rabbit3 + " rabbit..");
};
```

## Array of Objects

Our person constructor
```javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
}
```

Now we can make an array of people
```javascript
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
```

## Loop the Loop

Our Person constructor
``` javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
};
```
Now we can make an array of people
``` javascript
var family = new Array();
family[0] = new Person("alice",40);
family[1] = new Person("bob",42);
family[2] = new Person("michelle",8);
family[3] = new Person("timmy",6);
```
Loop through our new array
``` javascript
for (var i = 0; i < family.length; i++) {
   console.log(family[i]);
 };
```
 ## Passing Objects into Functions

 Our person constructor
``` javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
}
```
We can make a function which takes persons as arguments
This one computes the difference in ages between two people
``` javascript
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
```
Get the difference in age between alice and billy
``` javascript
var diff = ageDifference(alice, billy);
```
## Practice

Our person constructor
``` javascript
function Person (name, age) {
    this.name = name;
    this.age = age;
};
```

``` javascript
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};
```
Make a new function, olderAge, to return the age of the older of two people
``` javascript
var olderAge = function(person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
    } else {
        return person2.age;
     }
   };
```
Test our new function
``` javascript
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
```
## Literal Notation/ Constructer Notation
###### Literal Notation
``` javascript
var spencer = {
  age: 22,
  country: "United States"
};
```
###### Constructor Notation
``` javascript
var spencer2 = new Object();
spencer2.age =  22;
spencer2.country = "United States";
```
## Properties
``` javascript
var snoopy = new Object();
snoopy.species = "beagle";
snoopy.age = 10;
```

Save Snoopy's age and species into variables
Dot notation:
``` javascript
var species = snoopy.species;
```
Bracket notation:
``` javascript
var age = snoopy["age"];
```

## Customizing Constructors

3 lines required to make harry_potter
``` javascript
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";
```
A custom constructor for book
``` javascript
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}
```
Use our new constructor to make the_hobbit in one line
```javascript
var the_hobbit = new Book(320,"J.R.R. Tolkien");
```

## Methods

``` javascript
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;

    };
```
Define a perimeter method here

```javascript
this.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
```

## Practice with Objects and Arrays

```javascript
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888 - 8888",
    email: "mary.johnson@example.com",
};

var contacts = new Array();
contacts[0] =  bob;
contacts[1] = mary;

//display Mary's phone number
console.log(contacts[1].phoneNumber);
```

## Displaying People
```javascript
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here
var printPerson = function(person) {
    console.log( person.firstName + " " + person.lastName);
};

printPerson(contacts[0]);
printPerson(contacts[1]);
```
## Listing Everybody
``` javascript
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

//List everyone from Contact List
var list = function() {
    var contactsLength = contacts;
    for(var i = 0; i < contacts.length; i++) {
        printPerson(contacts[i]);
    }
};
list();
```
## Finding Your Contact
``` javascript
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
};

 
//create a search function
var search = function(lastName) {
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++) {
        if(lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
};

//then call it passing "Jones"
search("Jones");
```
## Adding a New Contact

``` javascript
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
};

/*Create a search function
then call it passing "Jones"*/
var search = function(lastName) {
    var contactsLength = contacts.length;
    for(var i = 0; i < contactsLength; i++) {
        if(lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
};

//Make an add function and add object to the end of array
var add = function(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
}
};
add("Sarah", "Carson", "(430) 449-900)", "scarson@aol.com");
list();
```


