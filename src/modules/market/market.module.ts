import { MarketResolver } from '@modules/market/market.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketController } from 'src/modules/market/market.controller';
import { MarketService } from 'src/modules/market/market.service';
import { Market } from 'src/types/entities/market.entity';
import { Tokens } from './../../utils/tokens';

@Module({
  imports: [TypeOrmModule.forFeature([Market])],
  controllers: [MarketController],
  providers: [
    MarketResolver,
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
