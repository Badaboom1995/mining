import { Exclude, Transform } from 'class-transformer';
import {
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class createMinerTypeDto {
  @MaxLength(30)
  @ApiModelProperty()
  name: string;
  @ApiModelProperty()
  @MaxLength(16)
  price: string;
  @ApiModelProperty()
  @MinLength(2)
  @MaxLength(30)
  description: string;
  @MaxLength(30)
  @ApiModelProperty()
  ram: string;
  @ApiModelProperty()
  gpu: string;
  @ApiModelProperty()
  @MaxLength(30)
  cpu: string;
}
