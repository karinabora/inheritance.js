// Prototype chaining is used to build new types of objects based on existing ones. 
// It is similar to inheritance in a class based language.

// Inheritance :-
const parent = {
    value: 2,
    method() {
      return this.value + 1;
    }
  };
  
  console.log(parent.method())

// prototype chain:-

const o = {
    a: 1,
    b: 2,
    __proto__: {
      b: 3,
      c: 4,
    },
  };
  console.log(o.a); 
  console.log(o.b); 
  console.log(o.c); 