class Key {  constructor(private signature: number = Math.random()) {}
getSignature(): number {
    return this.signature;
  }
}
class Person {
    private key: Key;
    constructor(key: Key) {
      this.key = key;
    }
    getKey(): Key {
      return this.key;
    }
  }
abstract class House{
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
    abstract openDoor(key: Key): void;

    constructor(key: Key) {
        this.key = key;
      }

      comeIn(person: Person): void {
        if (this.door) {
          this.tenants.push(person);
          console.log('Welcome))');
        } else {
          console.log('Doors closed.No trespassing!!');
        }
      }
    }
class MyHouse extends House{
    openDoor(key: Key): void{
        if (key.getSignature() === this.key.getSignature()){
            this.door = true;
            console.log('The door is open.');
        }else{
            console.log('Wrong key. The door is locked')
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};