import { Controller, Post, Body, Req, Res, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import {
  changeShoppingRequestStatus,
} from '../dto/shopping-requests.dto';
import { ShoppingRequestsService } from '../services';
import { APISuccess, APIError } from '../../../../../helpers';
import { Roles } from "../../../../common/decorators";
import { RolesGuard } from "../../../../common/guards";

@ApiUseTags('admin/shopping-requests')
@Controller('/')
@UseGuards(RolesGuard)
export class ShoppingRequestsController {
  constructor(private readonly shoppingRequestsService: ShoppingRequestsService) {}

  @Post('/list')
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get ShoppingRequestsController list' })
  async findAllShoppingRequests(@Req() req, @Res() res) {
    try {
      const data = await this.shoppingRequestsService.findAllShoppingRequests();
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/edit')
  @Roles('admin')
  @ApiOperation({ title: 'Edit shoppingRequest status' })
  async changeStatusShoppingRequest(@Req() req, @Res() res, @Body() dto: changeShoppingRequestStatus) {
    try {
      await this.shoppingRequestsService.changeStatusShoppingRequest(dto);
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }
}
