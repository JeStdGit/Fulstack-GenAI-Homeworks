class Vehicle {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
        this.running = false
    }

    start() {
        this.running = true
        console.log(`${this.brand} engine started`);
    }

    stop() {
        this.running = false
        console.log(`${this.brand} engine stopped`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, doors) {
        super(brand, speed)
        this.doors = doors
    }

    openTrunk() {
        console.log(`${this.brand} trunk is open`);
    }
}

class ElectricCar extends Car {
    constructor(brand, speed, doors, batteryLevel) {
        super(brand, speed, doors)
        this.batteryLevel = batteryLevel
    }

    charge() {
        this.batteryLevel = 100
        console.log(`${this.brand} is fully charged`);
    }
}

const vehicle = new Vehicle("BMW", 380)
vehicle.start()
vehicle.stop()
// vehicle.openTrunk() - won't work
console.log("Vehicle:", vehicle instanceof Vehicle);


const car = new Car("Bentley", 340, 5)
car.start()
car.stop()
car.openTrunk()
// car.charge() - won't work
console.log("Car:", car instanceof Car);

const electricCar = new ElectricCar("Tesla", 400, 5, 80)
electricCar.start()
electricCar.stop()
electricCar.openTrunk()
electricCar.charge()
console.log("ElectricCar:", electricCar instanceof ElectricCar);