const express = require('express');
const { sendOtp, otpVerification } = require('./twillio');
const bodyparse = require('body-parser');
const app = express();
app.use(express.json()); // Use the built-in JSON parser

app.post('/send-otp', async (req, res) => {
    const { phonenumber } = req.body
    console.log('OTP sent successfully:', phonenumber); // Log Twilio response

    try {
        const response = await sendOtp(phonenumber);
        console.log('OTP sent successfully:', response); // Log Twilio response
        res.status(200).json({ message: 'Otp send succesfully', data: response });

    } catch (error) {
        console.error('Error sending OTP:', error); // Log error details
        res.status(500).json({
            message: 'Error sending Otp code',
            data: error.message,
        })
    }
});
app.post('/verify-otp',async(req,res)=>{
    const {phonenumber,code}=req.body;
    try {
        const response = await otpVerification(phonenumber,code);
        if(response=='approved'){
        res.status(200).json({
            message:'Phone number verified successfully'
        })
        }else{
            res.status(400).json({
                message:'OTP verification faild'
            });
        }
    } catch (error) {
        res.status(500).json({
            message:"Error verifying OTP",
            data:error.message
        })
        
    }
})
app.listen(3000,()=>{
    console.log('port running on sever 3000');
    
})