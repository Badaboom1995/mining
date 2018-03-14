import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  Length,
  IsEnum
} from 'class-validator';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class DismissNotificationDto {
  @IsNotEmpty()
  @Length(24)
  @ApiModelProperty()
  id: string;
}

export class ConnectDeviceDto {
  @IsNotEmpty()
  @ApiModelProperty()
  token: string;
  @IsNotEmpty()
  @IsEnum(['ios', 'android'])
  @ApiModelProperty()
  platform: string;
}

export class SendNotificationDto {
  @IsNotEmpty()
  @ApiModelProperty()
  id: string;
}

