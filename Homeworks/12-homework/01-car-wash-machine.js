class CarWash {

    static totalWashes = 0

    constructor(carModel, washType) {
        this.carModel = carModel
        this.washType = washType
    }

    #spray() {
        console.log("Spraying water...");
    }

    #applySoap() {
        console.log("Applying soap...");
    }

    #dry() {
        if (this.washType === 'full') console.log("Drying car...");
    }

    startWash() {
        this.#spray()
        this.#applySoap()
        this.#dry()

        console.log(`${this.carModel} wash complete. Total washes today: ${++CarWash.totalWashes}`);
    }

    enterNewCar(carModel, washType) {
        this.carModel = carModel
        this.washType = washType
    }
}

const carWash = new CarWash('Toyota', 'basic')

carWash.startWash()

carWash.enterNewCar('BMW', 'full')

carWash.startWash()