import { Controller, Get, Inject } from '@nestjs/common';
import { Tokens } from 'src/utils/tokens';
import { Operations } from './market.operations';

@Controller('markets')
export class MarketController {
  constructor(
    @Inject(Tokens.MARKET_OPERATIONS) private readonly service: Operations,
  ) {}

  @Get()
  getMarkets() {
    return this.service.getMarkets();
  }
}
