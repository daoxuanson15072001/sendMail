import { Module } from '@nestjs/common';
import { TwilloService } from './twillo.service';
import { TwilloController } from './twillo.controller';

@Module({
  imports : [],
  controllers: [TwilloController],
  providers: [TwilloService]
})
export class TwilloModule {}
