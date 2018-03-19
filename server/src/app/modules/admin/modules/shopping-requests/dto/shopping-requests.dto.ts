import {
  IsNotEmpty,
  IsEnum,
  IsString,
} from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class changeShoppingRequestStatus {
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  id: string;
  @IsNotEmpty()
  @IsEnum(['On processing', 'Order details', 'Configuring miner', 'The order was sent', 'Order received'])
  @ApiModelProperty()
  status: string;
}
