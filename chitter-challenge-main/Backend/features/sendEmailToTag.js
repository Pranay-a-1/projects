import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

const smtpTransport = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
})


const sendEmailToTag = async (taggedUsernameEmail) => {
    let sendResult = await smtpTransport.sendMail({
        from: 'PranayChitterEmail <chitteremail@gmail.com',
        to: taggedUsernameEmail,
        subject: 'You got tagged in chitter',
        text: 'Hi, this was sent from NodeJS and NodeMailer!',
        html: '<body><h1>Hello</h1><p>You have been just tagged in peep</p></body>',
    })

}
export default sendEmailToTag;