import { Exclude, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  Length,
  IsEnum
} from 'class-validator';

import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UserDto {
  @Exclude()
  @ApiModelPropertyOptional()
  password: string;
  @ApiModelProperty({ type: Boolean })
  reciveNotifications: boolean;
  @ApiModelProperty()
  @MaxLength(30)
  firstName: string;
  @MaxLength(30)
  @ApiModelProperty()
  lastName: string;
  @MaxLength(30)
  @ApiModelProperty()
  secondName: string;
  @MaxLength(30)
  @ApiModelProperty()
  phone: string;
  @MaxLength(30)
  @ApiModelProperty()
  skype: string;
  @MaxLength(40)
  @ApiModelProperty()
  companyUrl: string;
  @MaxLength(40)
  @ApiModelProperty()
  companyName: string;
  @MaxLength(40)
  @ApiModelProperty()
  position: string;
  @IsEmail()
  @MaxLength(50)
  @ApiModelProperty()
  email: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiModelProperty()
  email: string;
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(35)
  @ApiModelProperty()
  password: string;
}

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

export class ForgetPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiModelProperty()
  email: string;
}

export class ResetPasswordDto {
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(35)
  @ApiModelProperty()
  password: string;
  @IsNotEmpty()
  @Length(20)
  @ApiModelProperty()
  token: string;
}

export class CheckResetPasswordDto {
  @IsNotEmpty()
  @Length(20)
  @ApiModelProperty()
  token: string;
}

export class UnlinkDto {
  @IsNotEmpty()
  @IsEnum(['facebook', 'google'])
  @ApiModelProperty()
  type: string;
}
