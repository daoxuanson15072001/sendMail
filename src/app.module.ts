import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { TwilloModule } from './twillo/twillo.module';

@Module({
  imports: [
    MailModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    TwilioModule.forRoot({
      accountSid: 'ACfb67b8841ec97a96a5a81381cb5eb52f',
      authToken: '0c94fdb63256f788230e519cd9de0142',
    }),
    TwilloModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
