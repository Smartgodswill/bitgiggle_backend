//me importing twillio
const twillio = require('twilio')
// accountsid
const AccountSID = 'ACe02a4d13185686d988761eb518e81b5e'
//authtoken
const AuthToken = '8a62bf8c33a0bbd0788c48e44e4ee32f'
// verification Service
const Verify_service = 'VAdd4ae74171fc9b43f52b389a2d3015f1'
//assigning twillio to a variable named client
const client = twillio(AccountSID, AuthToken);

//sending otp
const sendOtp = (phonenumber) => {
    return client.verify.v2.services(Verify_service)
        .verifications.create({ to: phonenumber, channel: 'sms' }).then
}
//verify otp
const otpVerification = (phonenumber, code) => {
    return client.verify.v2.services(Verify_service)
    .verifications.create({ to: phonenumber, code: code })
}
module.exports={
    sendOtp,
    otpVerification
}