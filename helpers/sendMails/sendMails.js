require('dotenv').config();
const { SENDGRID_EMAIL } = require("../../const/const");
const sgMail = require("@sendgrid/mail");

const sendSgMail = (to,subject,text,html) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to,
    from: SENDGRID_EMAIL,
    subject,
    text ,
    html,
  };
  sgMail
    .send(msg)
    .then((r) =>r[0].statusCode)
    .catch((r)=> r[0].statusCode)
};

module.exports = sendSgMail;

