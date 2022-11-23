//npm install nodemailer para activarlo
//npm install nodemailer-express-handlebars -S
//Dominio http://localhost:4242
//Contiene infomracion del mail prinncipal


const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;


// We made the transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: '25sparnol@gmail.com',  
        pass: 'evufodyhefjnkdwu', 
    },
});


transporter.use('compile', hbs({
    viewEngine: 'express-handlebars',
    viewPath: './views/'
}));


let mailOptions = {
    from: '25sparnol@gmail.com', // TODO: email sender
    to: '25sparnol@gmail.com', // TODO: email receiver
    subject: 'Thank you for shopping with MANDALA',
    text: 'Hola hola',
    template: 'index',
};

// We use the .sendMail() function that receives two values
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email Enviado! 👍📧');
});