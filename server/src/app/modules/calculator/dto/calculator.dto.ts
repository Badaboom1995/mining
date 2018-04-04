import {
  IsNotEmpty,
  IsEnum,
  IsMongoId,
} from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class CalcProfitabilityDto {
  @IsMongoId()
  @ApiModelProperty()
  id: string;
}
