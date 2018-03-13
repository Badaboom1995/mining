import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsEmail,
  MinLength,
  MaxLength,
  Length,
  IsEnum,
  IsArray,
} from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class AddInvestitionDto {
  @IsNotEmpty()
  @Transform(x => +x)
  @IsNumber()
  @ApiModelProperty()
  price: number
}

export class RemoveInvestitionDto {
  @IsNotEmpty()
  @ApiModelProperty()
  list: string[];
}
