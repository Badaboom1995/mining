import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  ValidateIf,
  IsEnum,
  IsString,
  IsEmpty,
} from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class CreateInvestmentDto {
  @IsNotEmpty()
  @IsEnum(['mining', 'pool'])
  @ApiModelProperty()
  investmentType: string;
  @IsNotEmpty()
  @Transform(x => +x)
  @IsNumber()
  @ApiModelProperty()
  amount: number;
  @ValidateIf(o => o.investmentType === "mining")
  @IsNotEmpty()
  @IsEnum(['1', '2'])
  @ApiModelProperty()
  @ValidateIf(o => o.investmentType === "pool")
  @IsEmpty()
  miningBuild: string;
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
  @IsString()
  @ApiModelProperty()
  ac_merchant_currency: string;
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
  user_id: string;
  @IsNotEmpty()
  @IsEnum(['mining', 'pool'])
  @ApiModelProperty()
  investment_type: string;
}
