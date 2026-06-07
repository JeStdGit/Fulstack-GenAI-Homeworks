const paymentGateway = {
    gatewayName: "Stripe",
    processPayment: function () {
        console.log("Proccesing payment through", this.gatewayName);
    }
}

paymentGateway.processPayment()

const externalProcessor = paymentGateway.processPayment
externalProcessor()

const boundProcessor = externalProcessor.bind(paymentGateway)
boundProcessor()