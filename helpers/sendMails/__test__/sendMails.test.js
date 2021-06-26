const request = require("supertest");
const sgMail = require("../sendMails");

describe("Execute the e-mail sending test", () => {
  test("Sending an email", () => {
    sgMail(
      "mgsanchezdev@gmail.com",
      "Enviado desde SendGrid",
      "Bienvenido a la Fundación",
      "<strong>Bienvenido a la Fundación</strong>"
    );
  });
});
