import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MarketService } from 'src/modules/market/market.service';
import { UpdateMarketDto } from 'src/types/dtos/update-market.dto';
import { Market } from 'src/types/entities/market.entity';
import { CreateMarketDto } from './../../types/dtos/create-market.dto';

@Resolver('Market')
export class MarketResolver {
  constructor(private marketService: MarketService) {}

  @Query(() => [Market])
  async markets(): Promise<Market[]> {
    const markets = await this.marketService.getMarkets();
    return markets;
  }

  @Query(() => Market)
  async findMarketById(@Args('id') id: string): Promise<Market> {
    const market = await this.findMarketById(id);
    return market;
  }

  @Mutation(() => Market)
  async createMarket(@Args('data') data: CreateMarketDto): Promise<Market> {
    const market = await this.marketService.createMarket(data);
    return market;
  }

  @Mutation(() => Market)
  async updateMarket(
    @Args('id') id: string,
    @Args('data') data: UpdateMarketDto,
  ): Promise<Market> {
    const market = await this.marketService.updateMarket(id, data);
    return market;
  }

  @Mutation(() => Boolean)
  async deleteMarket(@Args('id') id: string): Promise<boolean> {
    return await this.marketService.deleteMarket(id);
  }
}
