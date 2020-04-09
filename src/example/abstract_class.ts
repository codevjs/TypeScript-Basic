abstract class Vehicle {
    
    abstract  wheels : number;

    start() : void {

        console.log("Brum......");
    }
}

class Car extends Vehicle {
     wheels : number = 4;
}

class Motorcycle extends Vehicle {
    wheels : number = 2
}

let car = new Car();
car.start();

let motorcycle = new Motorcycle();
motorcycle.start();
