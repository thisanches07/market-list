import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { MarketModule } from 'src/modules/market/market.module';

@Module({
  imports: [MarketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
