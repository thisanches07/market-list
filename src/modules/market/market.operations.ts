import { UpdateMarketDto } from 'src/types/dtos/update-market.dto';
import { Market } from 'src/types/entities/market.entity';
import { CreateMarketDto } from './../../types/dtos/create-market.dto';
export interface Operations {
  createMarket(data: CreateMarketDto): Promise<Market>;
  getMarkets(): Promise<Market[]>;
  getMarketById(id: string): Promise<Market>;
  updateMarket(id: string, data: UpdateMarketDto): Promise<Market>;
  deleteMarket(id: string): Promise<boolean>;
}
