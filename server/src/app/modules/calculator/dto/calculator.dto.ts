import {
  IsNotEmpty,
  MinLength,
  MaxLength,
} from 'class-validator';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';


export class ChangePasswordDto {
  @IsNotEmpty()
  @ApiModelProperty()
  oldPassword: string;
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(35)
  @ApiModelProperty()
  newPassword: string;
}
