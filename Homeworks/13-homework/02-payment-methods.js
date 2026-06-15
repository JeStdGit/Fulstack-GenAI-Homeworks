class PaymentMethod {
    constructor(ownerName) {
        this.ownerName = ownerName
    }

    pay(amount) {
        throw new Error(`pay() method is not implemented for ${this.constructor.name}!`);
    }

    receipt(amount) {
        this.pay(amount)
        console.log("Receipt send to", this.ownerName);
    }
}

class CreditCard extends PaymentMethod {
    constructor(ownerName, cardNumber) {
        super(ownerName)
        this.cardNumber = cardNumber
    }

    pay(amount) {
        console.log(`Charging ${amount} NIS to card ending in ${this.cardNumber.toString().slice(-4)}`);
    }
}

class PayPal extends PaymentMethod {
    constructor(ownerName, email) {
        super(ownerName)
        this.email = email
    }

    pay(amount) {
        console.log(`Sending ${amount} NIS via PayPal to ${this.email}`);
    }
}

class BankTransfer extends PaymentMethod {
    constructor(ownerName, iban) {
        super(ownerName)
        this.iban = iban
    }

    pay(amount) {
        console.log(`Transferring ${amount} NIS from IBAN ${this.iban}`);
    }
}

const paymentMethods = [
    new CreditCard("Joey", "4580556485988956"),
    new PayPal("Billy", "billy536@gmail.com"),
    new BankTransfer("Frank", "85984421")
]

for (const method of paymentMethods) method.receipt(500)