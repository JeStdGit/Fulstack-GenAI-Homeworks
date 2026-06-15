class Notification {
    constructor(sender, message) {
        this.sender = sender
        this.message = message
        this.sent = false
    }

    send() {
        throw new Error(`send() method is not implemented for ${this.constructor.name}!`);
    }

    log() {
        this.send()
        this.sent = true
        console.log(`[LOG] notification from ${this.sender} sent: ${this.sent}`);
    }
}

class EmailNotification extends Notification {
    constructor(sender, message, toEmail) {
        super(sender, message)
        this.toEmail = toEmail
    }

    send() {
        console.log(`Email to ${this.toEmail}: ${this.message}`);
    }
}

class SMSNotification extends Notification {
    constructor(sender, message, phone) {
        super(sender, message)
        this.phone = phone
    }

    send() {
        console.log(`SMS to ${this.phone}: ${this.message}`);

    }
}

class PushNotification extends Notification {
    constructor(sender, message, deviceId) {
        super(sender, message)
        this.deviceId = deviceId
    }

    send() {
        console.log(`Push to device ${this.deviceId}: ${this.message}`);
    }
}

const notifications = [
    new EmailNotification("joey2456@gmail.com", "Hi there", "someCompany@gamil.org"),
    new SMSNotification("0543212321", "How are you?", "0554321234"),
    new PushNotification("Manager", "New Task", "Smasung-S26")
]

for (const notification of notifications) notification.log()

const sentNotificationCounter = notifications.filter(n => n.sent).length
console.log(`successfully sent notification: ${sentNotificationCounter}`);
