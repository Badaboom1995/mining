import {
  IsNotEmpty,
  IsEnum,
  IsString,
} from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class changeUserAddressDto {
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  user: string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  eth: string;
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  zcash: string;
}

export class changeUserRoleDto {
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  user: string;
  @IsNotEmpty()
  @IsString()
  @IsEnum(['user', 'manager', 'admin'])
  @ApiModelProperty()
  role: string;
}

