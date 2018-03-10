import { Controller, Post, Get, Body, Req, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { APISuccess, APIError } from '../../../helpers';
import { NotificationsService } from '../services';
import { ConnectDeviceDto, DismissNotificationDto, SendNotificationDto } from '../dto/notification.dto';

@ApiUseTags('notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('/list')
  @ApiBearerAuth()
  @ApiOperation({
    title: 'Return Notifications list',
  })
  async getNotificationsList(@Req() req, @Res() res) {
    try {
      const data = await this.notificationsService.getNotificationsList(
        req.user._id,
      );
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/dismiss')
  @ApiBearerAuth()
  @ApiOperation({
    title: 'Dismiss notification',
  })
  async dismissNotification(
    @Req() req,
    @Res() res,
    @Body() DismissNotificationDto: DismissNotificationDto,
  ) {
    try {
      await this.notificationsService.dismissNotification(
        DismissNotificationDto
      );
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/connect')
  @ApiBearerAuth()
  @ApiOperation({
    title: 'Save AWS notification device token [platform: ios or android]',
  })
  async connectDevice(
    @Req() req,
    @Res() res,
    @Body() ConnectDeviceDto: ConnectDeviceDto,
  ) {
    try {
      await this.notificationsService.connectDevice(
        req.user._id,
        ConnectDeviceDto
      );
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/send')
  @ApiBearerAuth()
  @ApiOperation({
    title: '[For testing] Send notification',
  })
  async sendNotification(
    @Req() req,
    @Res() res,
    @Body() SendNotificationDto: SendNotificationDto,
  ) {
    try {
      await this.notificationsService.insertNotification(
        req.user._id,
        SendNotificationDto
      );
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }
}
