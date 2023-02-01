import { Operations } from './market.operations';
export class MarketService implements Operations {
  getMarkets(): string {
    return 'lista de mercados';
  }
}
