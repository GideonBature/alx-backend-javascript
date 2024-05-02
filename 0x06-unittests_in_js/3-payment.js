const sendPaymentRequestToApi = (totalAmount, totalShipping, callback) => {
	const total = totalAmount + totalShipping;
	console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
