# 

Homework — Abstraction

## **Topics covered**

* Classes and constructors  
* `static` properties (shared across all instances)  
* Private methods (`#`) — hidden internal logic  
* Public methods — the only interface the outside world sees  
* Abstraction pillar — expose what's needed, hide the rest

## **Exercise 1 — Car Wash Machine**

Build a `CarWash` class.  
**Requirements:**

* static property totalWashes — counts how many washes have been done across all instances  
* Constructor receives: `carModel`, `washType` ('basic' / 'full')  
* Private methods:  
  * `#spray()` — logs `"Spraying water..."`  
  * `#applysoap()` — logs `"Applying soap..."`  
  * `#dry()` — logs `"Drying car..."` (only if washType is 'full')  
* Public method startWash():  
  * Calls the private methods in order  
  * Increments CarWash.totalWashes  
  * Logs `"${carModel} wash complete. Total washes today: ${totalWashes}"`

**Expected output:**
```
Spraying water...  
Applying soap...  
Toyota wash complete. Total washes today: 1  
Spraying water...  
Applying soap...  
Drying car...  
BMW wash complete. Total washes today: 2
```

## **Exercise 2 — ATM Machine**

Build an `ATM` class.  
**Requirements:**

* `static` property `totalTransactions` — shared counter across all ATM instances  
* Constructor receives: bankName, initialBalance  
* Private methods:  
  * `#verifyPin(pin)` — returns `true` if `pin` equals 1234, else logs `"Wrong PIN"` and returns `false`  
  * `#updateBalance(amount)` — subtracts `amount` from `balance`  
  * `#printReceipt(amount)` — logs `"Receipt: withdrew ${amount}. Remaining: ${balance}"`  
* Public method `withdraw(pin, amount)`:  
  * Calls `#verifyPin(pin)` — if false, stop  
  * Checks if `balance` is sufficient — if not, logs `"Insufficient funds"` 
  * Otherwise calls `#updateBalance`, `#printReceipt`, increments `ATM.totalTransactions`

## **Bonus — Think about it**

1. Why can't you call `#spray()` from outside the class?  
**answer:** `it's a private method and cannot be accessed aoutside.`
2. What's the difference between a static property and a regular instance property?  
**answer:** `regular property bounds to an instance of the class and a static property is bound to the class itself`
3. What is the point of abstraction — why not just make everything public?
**answer:** `blocking access to certain properies/methods helps to make enforce a work flow or specify authorities to change stuff that's seposed to happend under the hood...`