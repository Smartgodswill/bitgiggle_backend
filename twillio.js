//me importing twillio
const twillio = require('twilio')
require('dotenv').config();
// accountsid
const AccountSID = process.env.ACCOUNTT_SID
console.log(AccountSID);

//authtoken
const AuthToken = process.env.AUTH_TOKEN
console.log(AuthToken);

// verification Service
const Verify_service = process.env.VERIFY_SERVICE_ID
console.log(Verify_service);

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
module.exports = {
    sendOtp,
    otpVerification
}