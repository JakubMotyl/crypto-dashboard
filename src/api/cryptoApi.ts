import type { Coin } from "../types/crypto";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const getCoinData = async (coinId: string): Promise<Coin> => {
  const res = await fetch(
    `${apiUrl}/coins/${coinId}?x_cg_demo_api_key=${apiKey}`
  );
  const data = await res.json();
  return data;
};
