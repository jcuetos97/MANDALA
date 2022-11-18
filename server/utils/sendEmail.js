//npm install nodemailer para activarlo
//Dominio http://localhost:4242


const nodemailer = require("nodemailer");
const env = require('dotenv');

//Contiene infomracion del mail prinncipal


// nodemailer.createTestAccount((err, account) => {
//     if(err) {
//         console.log('Failed');
//         console.log(err);
//         return process.exit(1);
//     }

//     console.log('Sending message');
// })

nodemailer.createTransport({
    host: "smtp.gmail.com",
    //587 para no tener secure
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: 'process.env.SMTP_USERNAME',
      pass: 'process.env.SMTP_PASSWORD',
    },
  });




const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'process.env.SMTP_USERNAME',
            pass: 'process.env.SMTP_PASSWORD',
          },
     });

const mailOption = {
    from: 'martqetplace@gmail.com',
    //Aqui se cambia el mail del usuario
    //Este mail es de testing
    to: '25sparnol@gmail.com',
    subject: 'EMAIL TEST',
    text: 'Este email es de test'
};

transporter.sendMail(mailOption, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Ya se mandó el mail' + info.response);
    }
});


// let message = {
//     from: '<>',
//     to: '<25sparnol@gmail.com>',
//     subject: 'EMAIL Test',
//     text: 'Esto es un test',
//     html: `<p><b>TEST</b> <img src="https://images.unsplash.com/photo-1668603486663-5fd96b778391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></p>
//     <p>Esto es un test de la pag de html<br/></p>`,
//     amp: `<!DOCTYPE html>
//     <html ⚡4email data-css-strict>
//       <head>
//         <meta charset="utf-8" />
//         <style amp4email-boilerplate>
//           body {
//             visibility: hidden;
//           }
//         </style>
//         <script async src="https://cdn.ampproject.org/v0.js"></script>
//         <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>

//       </head>
//       <body>
//         Hello, this is a test.
//       </body>
//     </html>`
// };

// transporter.sendMail(message, (error, info) => {
//     if(err) {
//         console.log('Error en el test');
//         return process.exit(1);
//     }

//     console.log('El mensaje se mandó bien');
//     console.log(nodemailer.getTestMessageUrl(info));
//     transporter.close();
// })