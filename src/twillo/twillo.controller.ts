import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TwilloService } from './twillo.service';
import { CreateTwilloDto } from './dto/create-twillo.dto';
import { UpdateTwilloDto } from './dto/update-twillo.dto';

@Controller('twillo')
export class TwilloController {
  constructor(private readonly twilloService: TwilloService) {}

  @Post()
  async sendSms(@Body('message') message : string) {
    return this.twilloService.sendSMS(message);
  }
}
