class ATM {

    static totalTransactions = 0

    constructor(bankName, initialBalance) {
        this.bankName = bankName
        this.balance = initialBalance
    }

    #verifyPin(pin) {
        if (pin == '1234') return true

        console.log("Wrong PIN");
        return false
    }

    #updateBalance(amount) {
        this.balance -= amount
    }

    #printReceipt(amount) {
        console.log(`Receipt: withdrew ${amount}. Remaining: ${this.balance}`);
    }

    withdrew(pin, amount) {
        if (this.#verifyPin(pin)) {
            if (this.balance < amount) {
                console.log("Insufficient funds");
                return
            }

            this.#updateBalance(amount)
            this.#printReceipt(amount)

            ATM.totalTransactions++
        }
    }
}

const atm = new ATM("Discount", 40_000)
atm.withdrew('2468', 100)
atm.withdrew('1234', 200)
atm.withdrew(1234, 40_000)

