import { MailService } from './mail.service';
import { Injectable, Logger } from '@nestjs/common';
import {
  OnQueueCompleted,
  OnQueueDrained,
  OnQueueFailed,
  OnQueueRemoved,
  OnQueueWaiting,
  Process,
  Processor,
} from '@nestjs/bull';
import { Job } from 'bull';

@Injectable()
@Processor('sendMail')
export class MailProcessor {
  private readonly logger = new Logger();

  constructor(private readonly mailService: MailService) {} //

  @Process()
  async handleSendMail(job: Job<any>) {
    return await this.mailService.sendMail(job.data);
  }

  @OnQueueWaiting()
  async onQueueWaiting(jobId: number | string) {
    this.logger.log(`Send mail task - waiting: ${jobId}\n`);
  }

  @OnQueueDrained()
  async onQueueDrained() {
    this.logger.log(`Send mail - drained\n`);
  }

  @OnQueueCompleted()
  async onCompleted(job: Job, result: any) {
    this.logger.log(`Send mail - Complete: ${job.id}\n`);
  }

  @OnQueueFailed()
  async onQueueFailed(job: Job, err: Error) {
    this.logger.log(
      `Send mail - failed: ${job.id}.\n Reason: ${job.failedReason}\n`,
    );
  }

  @OnQueueRemoved()
  async onQueueRemoved(job: Job) {
    this.logger.log(`Send mail - remove: ${job.id} successful\n`);
  }
}
