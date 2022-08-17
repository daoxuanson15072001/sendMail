import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { MailProcessor } from './mail.processor';
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'sendMail',
    }),
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true,
        auth: {
          user: 'apikey',
          pass: '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',
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from: '"No Reply" <daoxuanson>',
      },
    }),
  ],
  providers: [MailService, MailProcessor],
  controllers: [MailController],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}
