import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Market } from 'src/types/entities/market.entity';
import { Repository } from 'typeorm';
import { CreateMarketDto } from './../../types/dtos/create-market.dto';
import { Operations } from './market.operations';

@Injectable()
export class MarketService implements Operations {
  constructor(
    @InjectRepository(Market)
    private marketRepository: Repository<Market>,
  ) {}

  async createMarket(data: CreateMarketDto): Promise<Market> {
    const market = await this.marketRepository.create(data);
    const marketSaved = await this.marketRepository.save(market);

    if (!marketSaved) {
      throw new InternalServerErrorException('Market was not created');
    }
    return marketSaved;
  }

  async getMarkets(): Promise<Market[]> {
    const markets = await this.marketRepository.find();
    return markets;
  }

  async getMarketById(id: string): Promise<Market> {
    const market = await this.marketRepository.findOne({
      where: { id: parseInt(id) },
    });
    if (!market) {
      throw new NotFoundException('Market not found');
    }
    return market;
  }
}
