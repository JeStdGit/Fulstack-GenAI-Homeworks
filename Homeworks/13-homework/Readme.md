# **Homework — Inheritance & Polymorphism**

This assignment covers the core concepts of object-oriented programming in JavaScript, specifically focusing on prototype-based inheritance and polymorphism.

## **Exercise 1 — Vehicle Fleet (Inheritance)**

Build a prototype-based inheritance chain for a vehicle management system.

1. **Define a constructor Vehicle(brand, speed) with:**  
   * Properties: `brand`, `speed`, `running = false`
   * Prototype method `start()` — sets `running = true`, logs: `"${brand} engine started"`
   * Prototype method `stop()` — sets `running = false`, logs: `"${brand} engine stopped"`
2. **Define a constructor Car(brand, speed, doors) that:**  
   * Inherits from Vehicle using apply and Object.create  
   * Adds a doors property  
   * Resets the constructor back to Car  
   * Adds a prototype method `openTrunk()` — logs: `"${brand} trunk is open"`  
3. **Define a constructor ElectricCar(brand, speed, doors, batteryLevel) that:**  
   * Inherits from Car  
   * Adds a batteryLevel property (0–100)  
   * Resets the constructor back to ElectricCar  
   * Adds a prototype method charge() — sets batteryLevel \= 100, logs: "\<brand\> is fully charged"  
4. **Create one instance of each (Vehicle, Car, ElectricCar) and verify:**  
   * All three can call start() and stop()  
   * Car and ElectricCar can call openTrunk()  
   * Only ElectricCar can call charge()  
   * Check instanceof for all three levels

## **Exercise 2 — Payment Methods (Polymorphism)**

A checkout system needs to process payments — same pay() call, different behavior per method.

1. **Define a constructor PaymentMethod(ownerName) with:**  
   * Property: ownerName  
   * Prototype method pay(amount) — logs: "pay() not implemented"  
   * Prototype method receipt(amount) — calls this.pay(amount), then logs: "Receipt sent to \<ownerName\>"  
2. **Define CreditCard(ownerName, cardNumber) that:**  
   * Inherits from PaymentMethod  
   * Overrides pay(amount) — logs: "Charging \<amount\> NIS to card ending in \<last 4 digits of cardNumber\>"  
3. **Define PayPal(ownerName, email) that:**  
   * Inherits from PaymentMethod  
   * Overrides pay(amount) — logs: "Sending \<amount\> NIS via PayPal to \<email\>"  
4. **Define BankTransfer(ownerName, iban) that:**  
   * Inherits from PaymentMethod  
   * Overrides pay(amount) — logs: "Transferring \<amount\> NIS from IBAN \<iban\>"  
5. **Create an array with one instance of each payment type and loop over it — call receipt(500) on each.**  
   * You call the *same method* on every object, but the output differs. That is polymorphism.

## **Exercise 3 — Notification System**

Build a notification system where each channel sends differently but shares a common interface.

1. **Define a constructor Notification(sender, message) with:**  
   * Properties: sender, message, sent \= false  
   * Prototype method send() — logs: "send() not implemented"  
   * Prototype method log() — calls this.send(), sets sent \= true, logs: "\[LOG\] notification from \<sender\> sent: \<sent\>"  
2. **Define EmailNotification(sender, message, toEmail) that:**  
   * Inherits from Notification  
   * Adds toEmail property  
   * Overrides send() — logs: "Email to \<toEmail\>: \<message\>"  
3. **Define SMSNotification(sender, message, phone) that:**  
   * Inherits from Notification  
   * Adds phone property  
   * Overrides send() — logs: "SMS to \<phone\>: \<message\>"  
4. **Define PushNotification(sender, message, deviceId) that:**  
   * Inherits from Notification  
   * Adds deviceId property  
   * Overrides send() — logs: "Push to device \<deviceId\>: \<message\>"  
5. **Create an array of all three and loop — call log() on each.**  
6. **Bonus:** After the loop, filter the array to find only notifications where sent \=== true and count them.

## **Thinking Questions (answer in comments, no extra code needed)**

1. Why do we use Object.create(Parent.prototype) instead of Child.prototype \= Parent.prototype directly?  
2. Why must we reset Child.prototype.constructor \= Child after setting up inheritance?  
3. In Exercise 2, receipt() calls this.pay(amount) — when the object is a PayPal instance, which version of pay() runs? Why?  
4. What is the difference between **inheritance** and **polymorphism**?