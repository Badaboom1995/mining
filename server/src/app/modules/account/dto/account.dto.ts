import { Exclude, Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  MaxLength,
  Length,
  IsEnum,
  IsISO8601,
  IsBoolean,
  IsString,
  IsMobilePhone,
  IsFQDN,
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

export class UpdateProfileDto {
  @MaxLength(30)
  @ApiModelProperty()
  nickname: string;
  @ApiModelProperty()
  // @MinLength(10)
  @MaxLength(16)
  phone: string;
  @ApiModelProperty()
  @MinLength(2)
  @MaxLength(30)
  firstName: string;
  // @MinLength(2)
  @MaxLength(30)
  @ApiModelProperty()
  lastName: string;
  @ApiModelProperty()
  // @IsISO8601()
  birthday: Date;
  @ApiModelProperty()
  // @MinLength(2)
  @MaxLength(30)
  country: string;
  @ApiModelProperty()
  // @MinLength(2)
  @MaxLength(30)
  city: string;

  @ApiModelProperty()
  @IsString()
  bitcoin: string;
  @ApiModelProperty()
  @IsString()
  advcash: string;
  @ApiModelProperty()
  @IsString()
  privat24: string;
  @ApiModelProperty()
  @IsString()
  eth: string;
  @ApiModelProperty()
  // @IsNotEmpty()
  visa: string;

  @ApiModelProperty({ type: Boolean })
  @IsEnum(['true', 'false'])
  reciveNotificationOnNewPartner: boolean;
  @ApiModelProperty({ type: Boolean })
  @IsEnum(['true', 'false'])
  reciveNotificationOnNewTeamPartner: boolean;
  @ApiModelProperty({ type: Boolean })
  @IsEnum(['true', 'false'])
  reciveNotificationOnNewPartnerInvestment: boolean;
  @ApiModelProperty({ type: Boolean })
  @IsEnum(['true', 'false'])
  reciveNotificationOnNewTeamPartnerInvestment: boolean;

  @ApiModelProperty({ type: Boolean })
  @IsEnum(['true', 'false'])
  reciveNotificationsEveryWeek: boolean;
  @ApiModelProperty({ type: Boolean })
  @IsEnum(['true', 'false'])
  reciveNotificationsEveryMonth: boolean;

  @ApiModelProperty()
  // @IsFQDN()
  companyUrl: string;
  @ApiModelProperty()
  @MaxLength(30)
  companyName: string;
  @ApiModelProperty()
  @MaxLength(30)
  position: string;
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
