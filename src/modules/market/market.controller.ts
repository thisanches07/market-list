import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { Delete, HttpCode } from '@nestjs/common/decorators';
import { Args } from '@nestjs/graphql';
import { Market } from 'src/types/entities/market.entity';
import { Tokens } from 'src/utils/tokens';
import { CreateMarketDto } from './../../types/dtos/create-market.dto';
import { Operations } from './market.operations';

@Controller('markets')
export class MarketController {
  constructor(
    @Inject(Tokens.MARKET_OPERATIONS) private readonly service: Operations,
  ) {}

  @Post()
  async createMarket(@Args('data') data: CreateMarketDto): Promise<Market> {
    const market = await this.service.createMarket(data);
    return market;
  }

  @Get()
  getMarkets() {
    return this.service.getMarkets();
  }

  @Get('/:id')
  getMarketById(@Param('id') id: string) {
    return this.service.getMarketById(id);
  }

  @Delete('/:id')
  @HttpCode(204)
  updateMarket(@Param('id') id: string) {
    return this.service.deleteMarket(id);
  }
}
