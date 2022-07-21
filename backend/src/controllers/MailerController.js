const nodemailer = require("nodemailer");
require("dotenv").config();

class MailerController {
  static sendMail = async (req, res) => {
    const { email, firstname, lastname, company, message } = req.body;

    const transporter = await nodemailer.createTransport({
      host: process.env.SMTP_SENDIN,
      port: process.env.SMTP_PORT_SENDIN,
      secure: false,
      auth: {
        user: process.env.SMTP_SENDIN_USER,
        pass: process.env.SMTP_SENDIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: `olivia.huet@hotmail.fr`, // this is the address to which the email will be sent
      subject: `Mail from ${firstname} ${lastname} come from dans tes rêves website`,
      text: `${message} \n\n Email: ${email} \n\n Structure: ${company}`,
      html: `<p>${message}</p> <p>Email: ${email}</p> <p>Structure: ${company}</p>`,
    };

    return transporter
      .sendMail(mailOptions)
      .then((info) => {
        res.status(200).send(info);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
}

module.exports = MailerController;
