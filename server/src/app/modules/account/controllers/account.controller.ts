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
  UnlinkDto,
  ChangePasswordDto,
} from '../dto/account.dto';
import { AccountService } from '../services';
import { APISuccess, APIError } from '../../../helpers';
import { MailgunService } from '../../common/mailgun.service';
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
  async callback(@Req() req, @Res() res) {
    console.log('req', req.session, req.isAuthenticated());
    const isOAuth = req.query.oauth;
    const data = await this.accountService.createToken(
      req.user._id,
      req.user.email,
    );
    if (isOAuth) {
      return res
        .status(HttpStatus.OK)
        .redirect(`cardholder://oauth?token=${data.token}`);
    } else {
      res.send(new APISuccess(data, null));
    }
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
    @Res() res,
    @Body() forgetPasswordDto: ForgetPasswordDto,
  ) {
    try {
      const token = await this.accountService.forgotPassword(forgetPasswordDto);
      await this.mailService.sendPasswordResetEmail(forgetPasswordDto, token);
      return res.send(
        new APISuccess(null, 'Success we are send you reset password message!'),
      );
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Get('/reset-password')
  @ApiOperation({ title: 'Check if provided reset password token is valid' })
  @ApiImplicitQuery({
    name: 'token',
    description: 'reset password token',
    required: true,
  })
  async resetPassword(@Req() req, @Res() res, @Query('token') token: string) {
    try {
      await this.accountService.findUserByResetToken(token);
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/reset-password')
  @ApiOperation({ title: 'Set new password using reset password token' })
  @ApiResponse({
    status: 201,
    description: 'Success we are change you password!',
  })
  async setNewPassword(
    @Req() req,
    @Res() res,
    @Body() resetPasswordDto: ResetPasswordDto,
  ) {
    try {
      await this.accountService.resetPassword(resetPasswordDto);
      return res.send(
        new APISuccess(null, 'Success we are change you password!'),
      );
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('settings')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Update user data' })
  @ApiResponse({
    status: 201,
    description: 'The user data has been successfully updated.',
  })
  async updateProfile(@Req() req, @Res() res, @Body() UserDto: UserDto) {
    try {
      await this.accountService.updateProfile(req.user._id, UserDto);
      return res.send(
        new APISuccess(null, 'The user data has been successfully updated'),
      );
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('settings/avatar')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Upload new user avatar' })
  async updateProfileAvatar(@Req() req, @Res() res) {
    try {
      await this.accountService.updateProfileAvatar(
        req.user._id,
        req.file.location,
      );
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Logout user for site' })
  @ApiResponse({
    status: 201,
    description: 'User has been logged out by the server.',
  })
  async logout(@Req() req, @Res() res) {
    await req.logout();
    return res.send(
      new APISuccess(null, 'User has been logged out by the server.'),
    );
  }

  @Post('profile')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get user profile data' })
  async getProfile(@Req() req, @Res() res, @Body('id') profileId: string) {
    try {
      const id =
        profileId == 'undefined' || !profileId ? req.user._id : profileId;
      const user = await this.accountService.findById(id);
      const profileModel = new ProfileModel(user);
      return res.send(new APISuccess(profileModel));
    } catch (err) {
      res.send(new APIError(err.message));
    }
  }

  @Post('unlink')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Unlink oAuth account [type: facebook or google]' })
  async unLinkAccount(@Req() req, @Res() res, @Body() UnlinkDto: UnlinkDto) {
    try {
      await this.accountService.unLinkAccount(
        UnlinkDto,
        req.user._id,
      );
      return res.send(new APISuccess());
    } catch (err) {
      res.send(new APIError(err.message));
    }
  }

  @Post('change-password')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Change user password' })
  async changePassword(
    @Req() req,
    @Res() res,
    @Body() ChangePasswordDto: ChangePasswordDto,
  ) {
    try {
      await this.accountService.changePassword(ChangePasswordDto, req.user._id);
      return res.send(new APISuccess());
    } catch (err) {
      res.send(new APIError(err));
    }
  }
}
