import { Controller, Post, Body, Req, Res, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { AddInvestitionDto, RemoveInvestitionDto } from '../dto/investment.dto';
import { InvestmentService } from '../services';
import { APISuccess, APIError } from '../../../helpers';

@ApiUseTags('investment')
@Controller('investment')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post('/:id')
  @ApiOperation({ title: 'Get investment page' })
  async getLogin(
    @Req() req,
    @Res() res,
    @Body() AddInvestitionDto: AddInvestitionDto,
  ) {
    try {
      const data = await this.investmentService.getAdvcashSign(AddInvestitionDto,);
      return res.render('investment/index', {
        title: 'Login',
        order_id: data.order_id,
        comments: data.comments,
        sign: data.sign,
      });
    } catch (err) {
      return res.send(new APIError(err));
    }
  }
  @Get('/pay/success/return')
  @ApiOperation({ title: 'Render success transaction page' })
  async renderPaySuccess(
    @Req() req,
    @Res() res,
  ) {
    try {
      return res.render('investment/success');
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Get('/pay/cancel/return')
  @ApiOperation({ title: 'Render cancel transaction page' })
  async renderCancelSuccess(
    @Req() req,
    @Res() res,
  ) {
    try {
      return res.render('investment/cancel');
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/pay/notify')
  @ApiOperation({ title: 'Get investment page' })
  async payNotify(
    @Req() req,
    @Res() res,
    @Body() AddInvestitionDto: AddInvestitionDto,
  ) {
    try {
      await this.investmentService.getAdvcashSign(AddInvestitionDto);
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }


  @Post('/add/bitcoin')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Add new Bitcoin investition' })
  async addBitcoinInvestition(
    @Req() req,
    @Res() res,
    @Body() AddInvestitionDto: AddInvestitionDto,
  ) {
    try {
      await this.investmentService.addBitcoinInvestition(
        req.user._id,
        AddInvestitionDto,
      );
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/remove')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Remove Investition from investment list' })
  async removeFromInvestment(
    @Req() req,
    @Res() res,
    @Body() RemoveFromInvestmentDto: RemoveInvestitionDto,
  ) {
    try {
      await this.investmentService.removeFromInvestment(
        RemoveFromInvestmentDto,
        req.user._id,
      );
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/search')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Search users in investment list' })
  async searchInvestment(@Req() req, @Res() res, @Body('param') param: string) {
    try {
      const data = await this.investmentService.searchInvestment(param);
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/list')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get investment list' })
  async getInvestmentList(@Req() req, @Res() res) {
    try {
      const data = await this.investmentService.getInvestmentList(req.user._id);
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }
}
