var nodemailer = require('nodemailer')

var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'pranayag18@gmail.com',
        pass: 'Root#1999bbsr'
    }
  });

const sendMail = (data) => {
    let HelperOptions = {
        from: data.mail,
        to: 'pranayag18@gmail.com',
        subject: data.name + ' send you a message from portfolio',
        text: data.name+ '(' + data.mail +') says ' +data.message
      };

    return smtpTransport.sendMail(HelperOptions)
}

const sendEmail = module.exports = sendMail