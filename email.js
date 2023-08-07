const nodemailer = require("nodemailer");

// Data das férias
const vacationDate = new Date("2023-08-08");

// Configurações do transporte de email
const transport = nodemailer.createTransport({
  host: "outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "example@hotmail.com",
    pass: "example",
  },
});

// Função que calcula quantos dias faltam para as férias começarem
function daysUntilVacation() {
  const today = new Date();
  const diffTime = vacationDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// Função que envia o email
function sendEmail() {
  try {
    const days = daysUntilVacation();
    const message = `Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    Faltam ${days} dias para vc perder seu email! HAAHAHAHAHAHAHAHAHAHAHAHAH
    `;
    const mailOptions = {
      from: "example@hotmail.com",
      to: "example@hotmail.com",
      subject: "Contagem regressiva para vc perder seu email",
      text: message,
    };
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email enviado: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
}


// Envia o email diariamente
// setInterval(sendEmail, 24 * 60 * 60 * 1000);
sendEmail();