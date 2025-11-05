export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: {
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    price_change_percentage_24h_in_currency: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
  };
}

export interface TopCoins {
  name: string;
  symbol: string;
  image: string;
}
