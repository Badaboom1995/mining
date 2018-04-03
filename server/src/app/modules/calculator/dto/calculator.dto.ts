import {
  IsNotEmpty,
  MinLength,
  MaxLength, IsEnum,
} from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class CalcProfitabilityDto {
  @IsNotEmpty()
  @IsEnum(['162-etc-ethash', '151-eth-ethash', '166-zec-equihash', '214-btg-equihash'])
  @ApiModelProperty()
  currency: string;
  @MaxLength(5)
  @ApiModelProperty()
  hash: string;
  @IsNotEmpty()
  @MaxLength(4)
  @ApiModelProperty()
  power: string;
}
