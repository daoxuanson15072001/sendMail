import { MailerService } from '@nestjs-modules/mailer';
import { InjectQueue } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import Bull, { Queue } from 'bull';
import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService : MailerService , @InjectQueue('sendMail') private sendMailQueue : Queue){}

  async sendMail (body : CreateMailDto) {
    const message = {
      from:"daoxuanson15072001@gmail.com",
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html,
  }
    await this.mailerService.sendMail(message)
    return true;
  }

  async add(data: CreateMailDto, opts?: Bull.JobOptions) {
    await this.sendMailQueue.add(data, { removeOnComplete: true, attempts: 10, ...opts });
  }
}
