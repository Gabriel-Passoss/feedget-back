import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
  user: "f86a31ee79b567",
  pass: "2488fef7988c6f"
  }
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Gabriel Passos <kooujinproductions@gmail.com>',
    subject: subject,
    html: body,
  })
  }
}