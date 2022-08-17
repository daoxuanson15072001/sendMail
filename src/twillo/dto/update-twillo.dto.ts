import { PartialType } from '@nestjs/mapped-types';
import { CreateTwilloDto } from './create-twillo.dto';

export class UpdateTwilloDto extends PartialType(CreateTwilloDto) {}
