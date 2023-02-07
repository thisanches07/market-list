import { Controller, Get, Inject } from '@nestjs/common';
import { Tokens } from 'src/utils/tokens';
import { Operations } from './base.operations';

@Controller('helloworld')
export class BaseController {
  constructor(
    @Inject(Tokens.MARKET_OPERATIONS) private readonly service: Operations,
  ) {}

  @Get()
  getHello() {
    return this.service.getHello();
  }
}
