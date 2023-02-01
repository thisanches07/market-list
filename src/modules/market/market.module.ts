import { Module } from '@nestjs/common';
import { MarketController } from 'src/modules/market/market.controller';
import { MarketService } from 'src/modules/market/market.service';
import { Tokens } from './../../utils/tokens';

@Module({
  imports: [],
  controllers: [MarketController],
  providers: [
    MarketService,
    {
      provide: Tokens.MARKET_OPERATIONS,
      useClass: MarketService,
    },
  ],
  exports: [
    {
      provide: Tokens.MARKET_OPERATIONS,
      useClass: MarketService,
    },
  ],
})
export class MarketModule {}
