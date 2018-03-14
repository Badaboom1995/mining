import { Controller, Post, Body, Req, Res, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import {
  GetInvestmentDto,
  ProcessAdvcashPaymentDto,
} from '../dto/investment.dto';
import { InvestmentService } from '../services';
import { APISuccess, APIError } from '../../../helpers';

@ApiUseTags('investment')
@Controller('investment')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Post('/')
  @ApiOperation({ title: 'Get investment buy id' })
  async getLogin(@Req() req, @Res() res, @Body() dto: GetInvestmentDto) {
    try {
      const investment = await this.investmentService.getInvestment(req.user._id, dto);
      const data = await this.investmentService.createAdvcashInvoice(investment);
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

  @Post('/create')
  @ApiOperation({ title: 'Create investment' })
  async createInvestment(
    @Req() req,
    @Res() res,
    @Body() dto: ProcessAdvcashPaymentDto,
  ) {
    try {
      await this.investmentService.createInvestment(req.user._id, dto);
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/pay/notify')
  @ApiOperation({ title: 'Get investment page' })
  async payNotify(@Req() req, @Res() res, @Body() dto: ProcessAdvcashPaymentDto) {
    try {
      await this.investmentService.processAdvcashPayment(dto);
      return res.send(new APISuccess());
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Post('/list')
  @ApiBearerAuth()
  @ApiOperation({ title: 'Get investments list' })
  async getInvestmentsList(@Req() req, @Res() res) {
    try {
      const data = await this.investmentService.getInvestmentsList(
        req.user._id,
      );
      return res.send(new APISuccess(data));
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Get('/pay/success/return')
  @ApiOperation({ title: 'Render success transaction page' })
  async renderPaySuccess(@Req() req, @Res() res) {
    try {
      return res.render('investment/success');
    } catch (err) {
      return res.send(new APIError(err));
    }
  }

  @Get('/pay/cancel/return')
  @ApiOperation({ title: 'Render cancel transaction page' })
  async renderCancelSuccess(@Req() req, @Res() res) {
    try {
      return res.render('investment/cancel');
    } catch (err) {
      return res.send(new APIError(err));
    }
  }
}
