import { Exclude, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  Length,
  IsEnum,
  IsArray,
} from 'class-validator';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class AddContactDto {
  @IsNotEmpty()
  @Length(24)
  @ApiModelProperty()
  id: string;
}

export class RemoveFromContactsDto {
  @IsNotEmpty()
  @ApiModelProperty()
  list: string[];
}

export class UnlinkDto {
  @IsNotEmpty()
  @IsEnum(['facebook', 'google'])
  @ApiModelProperty()
  type: string;
}
