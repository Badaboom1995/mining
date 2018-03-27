import {
  Get,
  Post,
  Res,
  Req,
  Query,
  Body,
  Controller,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiImplicitQuery,
} from '@nestjs/swagger';
import {
  UserDto,
  ForgetPasswordDto,
  ResetPasswordDto,
  LoginUserDto,
  ChangePasswordDto, UpdateProfileDto,
} from '../dto/account.dto';
import { AccountService } from '../services';
import { APISuccess, APIError } from '../../../helpers';
import { MailgunService } from '../../../services/mailgun.service';
import { ProfileModel } from '../../../models/profile-model';

@ApiUseTags('account')
@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly mailService: MailgunService,
  ) {}

  @Post('login')
  @ApiOperation({ title: 'Login user' })
  Login(@Req() req, @Res() res, @Body() LoginUserDto: LoginUserDto) {}

  @Post('register')
  @ApiOperation({ title: 'Register new user using local-strategy' })
  Register(@Req() req, @Res() res, @Body() LoginUserDto: LoginUserDto) {}

  @Get('/callback')
  @ApiOperation({
    title:
      'Return JWT token if user is using desktop or redirect to DeepLinking if current device is mobile',
  })
  async callback(@Req() req) {
    return new APISuccess();
  }

  @Get('/connect/callback')
  @ApiOperation({
    title: 'Send success response when user connect him social account',
  })
  async callbackConnect(@Req() req, @Res() res) {
    return res
      .status(HttpStatus.OK)
      .redirect(`cardholder://connect-social?success=true`);
  }

  @Post('/forgot-password')
  @ApiOperation({ title: 'Send forgot password email' })
  @ApiResponse({
    status: 200,
    description: 'Success we are send you reset password message.',
  })
  async forgotPassword(
    @Req() req,
    @Body() forgetPasswordDto: ForgetPasswordDto,
  ) {
    try {
      const token = await this.accountService.forgotPassword(forgetPasswordDto);
      await this.mailService.sendPasswordResetEmail(forgetPasswordDto, token);
      return new APISuccess(null, 'Success we are send you reset password message!');
    } catch (err) {
      return new APIError(err);
    }
  }

  @Get('/reset-password')
  @ApiOperation({ title: 'Check if provided reset password token is valid' })
  @ApiImplicitQuery({
    name: 'token',
    description: 'reset password token',
    required: true,
  })
  async resetPassword(@Req() req, @Query('token') token: string) {
    try {
      await this.accountService.findUserByResetToken(token);
      return new APISuccess();
    } catch (err) {
      return new APIError(err);
    }
  }

  @Post('/reset-password')
  @ApiOperation({ title: 'Set new password using reset password token' })
  @ApiResponse({
    status: 201,
    description: 'Success we are change you password!',
  })
  async setNewPassword(@Req() req, @Body() resetPasswordDto: ResetPasswordDto) {
    try {
      await this.accountService.resetPassword(resetPasswordDto);
      return new APISuccess(null, 'Success we are change you password!');
    } catch (err) {
      return new APIError(err);
    }
  }

  @Post('settings')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Update user data' })
  @ApiResponse({
    status: 201,
    description: 'The user data has been successfully updated.',
  })
  async updateProfile(@Req() req, @Body() dto: UpdateProfileDto) {
    try {
      await this.accountService.updateProfile(req.user.id, dto);
      return new APISuccess(null, 'The user data has been successfully updated');
    } catch (err) {
      return new APIError(err);
    }
  }

  @Post('settings/avatar')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Upload new user avatar' })
  async updateProfileAvatar(@Req() req) {
    try {
      await this.accountService.updateProfileAvatar(
        req.user.id,
        req.file.location,
      );
      return new APISuccess();
    } catch (err) {
      return new APIError(err);
    }
  }

  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Logout user for site' })
  @ApiResponse({
    status: 201,
    description: 'User has been logged out by the server.',
  })
  async logout(@Req() req) {
    try {
      await req.logout();
      return new APISuccess(null, 'User has been logged out by the server.');
    } catch {
      return new APIError('Cant logout');
    }
  };

  @Post('profile')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get user profile data' })
  async getProfile(@Req() req, @Body('id') profileId: string) {
    try {
      const id =
        profileId == 'undefined' || !profileId ? req.user.id : profileId;
      const user = await this.accountService.findById(id);
      return user;
    } catch (err) {
      return new APIError(err);
    }
  }

  @Post('change-password')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Change user password' })
  async changePassword(
    @Req() req,
    @Body() ChangePasswordDto: ChangePasswordDto,
  ) {
    try {
      await this.accountService.changePassword(ChangePasswordDto, req.user.id);
      return new APISuccess();
    } catch (err) {
      return new APIError(err);
    }
  }
}
