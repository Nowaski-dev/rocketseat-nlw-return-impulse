import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "50199d129fe6cf",
      pass: "3674efd75679be"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <ola@gmail.com>',
            to: 'Carlos <carlos@dev.com>',
            subject,
            html: body,
        });
    };
}