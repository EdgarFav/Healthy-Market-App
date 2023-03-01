const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { findByEmail } = require("./../services/userServices");
const generateAuthToken = require("../utils/generateAuthToken");

class AuthService {
  async getUser(email, password) {
    const user = await findByEmail(email);
    if (!user) {
      throw boom.unauthorized();
    }
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      throw boom.unauthorized();
    }
    return user;
  }

  async singToken(user) {
    const token = await generateAuthToken(user);
    return token;
  }

  async sendMail(email, body) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw done(boom.unauthorized(), false);
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASS_MAIL,
      },
    });

    await transporter.sendMail({
      from: "healthymaarketapp@gmail.com", // sender address
      to: `${user.email}`, // list of receivers
      subject: body.subjet, // Subject line
      text: "Correo de prueba", // plain text body
      html: body.body, // html body
    });
    return { message: "mail send" };
  }
}

module.exports = AuthService;
