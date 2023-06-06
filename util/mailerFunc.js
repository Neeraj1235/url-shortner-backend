const nodemailer = require("nodemailer");

const mailerFunc = async (requiredOption) => {
  const { toAddress, mailSubject, mailContent } = requiredOption;
  try {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.EMAIL,
      to: toAddress,
      subject: mailSubject,
      text: mailContent,
    };
    const mailResult = await transporter.sendMail(mailOption);
    return mailResult;
  } catch (e) {
    console.log(e.message, " err-in nodemailer");
  }
};
module.exports = mailerFunc;
