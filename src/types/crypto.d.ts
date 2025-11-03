export interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: {
    small: string;
  };
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
  };
}

export interface TopCoins {
  name: string;
  symbol: string;
  image: string;
}
