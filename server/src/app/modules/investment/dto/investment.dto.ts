import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsEmail,
  MinLength,
  MaxLength,
  Length,
  IsEnum,
  IsArray, IsString,
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
  @Transform(x => +x)
  @IsNumber()
  @ApiModelProperty()
  ac_amount: number;
  @IsNotEmpty()
  @Transform(x => +x)
  @IsNumber()
  @ApiModelProperty()
  ac_merchant_amount: number;
  @IsNotEmpty()
  @Transform(x => +x)
  @IsNumber()
  @ApiModelProperty()
  ac_merchant_currency: number;
  @IsNotEmpty()
  @ApiModelProperty()
  ac_start_date: string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  ac_order_id: string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  ac_transaction_status: string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  ac_buyer_email: string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  user_id: string;
  @IsNotEmpty()
  @IsEnum(['mining', 'pool'])
  @ApiModelProperty()
  investment_type: string;
}
