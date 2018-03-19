import {
  Get,
  Res,
  Req,
  Controller,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
} from '@nestjs/swagger';
import { APISuccess, APIError } from '../../../helpers';

@ApiUseTags('admin')
@Controller('/')
export class AdminController {
  constructor() {}

  @Get('/')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Render admin page' })
  getAdminPage(@Req() req, @Res() res) {
    return res.send(new APISuccess(false, 'Success'))
  }
}
