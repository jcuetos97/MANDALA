//npm install nodemailer para activarlo
//Dominio http://localhost:4242


const nodemailer = require("nodemailer");

//Contiene infomracion del mail prinncipal


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    //587 para no tener secure
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      //Agregar en user el correo@electronico.com
      user: '',
      //Agregar la contraseña para aplicaciones
      pass: '',
    },
  });
  
const mailOption = {
      from: '',
      //Aqui se cambia el mail del usuario
      //Este mail es de testing
      to: '',
      subject: 'EMAIL TEST',
      text: 'Este email es de test'
  };
  
transporter.sendMail(mailOption, function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email Enviado! 👍📧');
      }
  });



