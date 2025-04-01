class Human {
    name: string
}

const human = new Human();
human.name = 'Jane';
console.log(human);

//class visibility on properties of a class
class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person = new Person('stephen');

//visibility modifiers to the parameter in a class
class Persons {
    // name is a private member variable
    public constructor(private readonly name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
        
  const persons = new Persons("Jane");
  
  console.log(person.getName());
