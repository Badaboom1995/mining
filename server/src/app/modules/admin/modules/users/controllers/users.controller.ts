import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { changeUserAddressDto } from '../dto/users.dto';
import { UsersListService } from '../services';
import { APISuccess, APIError } from '../../../../../helpers';
import { AccountService } from '../../../../account/services/account.service';
import { Roles } from '../../../../common/decorators';
import { RolesGuard } from '../../../../common/guards';

@ApiUseTags('admin/users')
@Controller('/')
@UseGuards(RolesGuard)
export class UsersListController {
  constructor(
    private readonly accountService: AccountService,
    private readonly userListService: UsersListService,
  ) {}

  @Post('/list')
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get Users list' })
  async findAllUsers(@Req() req, @Res() res) {
    try {
      const data = await this.accountService.findAllUsers();
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/edit')
  @Roles('admin')
  @ApiOperation({ title: 'Change user miner address' })
  async changeUserAddress(
    @Req() req,
    @Res() res,
    @Body() dto: changeUserAddressDto,
  ) {
    try {
      await this.userListService.changeUserAddress(dto);
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }
}
