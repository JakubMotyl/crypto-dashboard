import type { Coin } from "../types/crypto";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const getCoinData = async (coinId: string): Promise<Coin> => {
  try {
    const res = await fetch(
      `${apiUrl}/coins/${coinId}?x_cg_demo_api_key=${apiKey}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
    throw Error;
  }
};

export const getTopCoins = async () => {
  try {
    const res = await fetch(
      `${apiUrl}/coins/markets?vs_currency=usd&x_cg_demo_api_key=${apiKey}`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
    throw Error;
  }
};
