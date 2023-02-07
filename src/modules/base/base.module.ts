import { BaseController } from '@modules/base/base.controller';
import { BaseService } from '@modules/base/base.service';
import { Module } from '@nestjs/common';
import { Tokens } from '../../utils/tokens';

@Module({
  imports: [],
  controllers: [BaseController],
  providers: [
    BaseService,
    {
      provide: Tokens.MARKET_OPERATIONS,
      useClass: BaseService,
    },
  ],
  exports: [
    {
      provide: Tokens.MARKET_OPERATIONS,
      useClass: BaseService,
    },
  ],
})
export class BaseModule {}
