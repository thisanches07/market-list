import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateMarketDto } from 'src/types/dtos/update-market.dto';
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
    const market = this.marketRepository.create(data);
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

  async updateMarket(id: string, data: UpdateMarketDto): Promise<Market> {
    const market = await this.getMarketById(id);
    await this.marketRepository.update(market, { ...data });

    //cria-se esse objeto porque em update faltam propriedades do tipo user
    const marketUpdated = this.marketRepository.create({ ...market, ...data });
    return marketUpdated;
  }

  async deleteMarket(id: string): Promise<boolean> {
    await this.getMarketById(id);
    const deleted = await this.marketRepository.delete(id);
    if (deleted) return true;
    return false;
  }
}
