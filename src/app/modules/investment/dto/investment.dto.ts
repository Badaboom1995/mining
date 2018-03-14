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

export class CreateInvestmentDto {
  @IsNotEmpty()
  @IsEnum(['mining', 'pool'])
  @ApiModelProperty()
  type: string;
  @IsNotEmpty()
  @Transform(x => +x)
  @IsNumber()
  @ApiModelProperty()
  price: number
}

export class GetInvestmentDto {
  @IsNotEmpty()
  @ApiModelProperty()
  id: string;
}

export class ProcessAdvcashPaymentDto {
  @IsNotEmpty()
  @IsEnum(['mining', 'pool'])
  @ApiModelProperty()
  type: string;
  @IsNotEmpty()
  @Transform(x => +x)
  @IsNumber()
  @ApiModelProperty()
  price: number
}
