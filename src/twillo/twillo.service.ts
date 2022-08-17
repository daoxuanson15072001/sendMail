import { Injectable } from '@nestjs/common';
import { InjectTwilio, TwilioClient } from 'nestjs-twilio';


@Injectable()
export class TwilloService {
  public constructor(@InjectTwilio() private readonly client: TwilioClient) {}
  async sendSMS(message : string) {
    try {
      return await this.client.messages.create({
        body: message,
        from: '+19706618631',
        to: '+84965123980',
      });
    } catch (e) {
      return e;
    }
  }
}
