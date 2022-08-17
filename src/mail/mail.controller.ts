import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('')
  async getAll() {
    return 'heeloword';
  }

  @Post('/ok')
  async sendMail(@Body() body: CreateMailDto) {
    return this.mailService.add(body);
  }
}
