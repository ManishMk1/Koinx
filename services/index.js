import { CryptoPrice } from "../models/cryptoPrice.js";
import axios from "axios";

const cryptos = [
  { coin_id: "bitcoin", name: "Bitcoin" },
  { coin_id: "matic-network", name: "Matic" },
  { coin_id: "ethereum", name: "Ethereum" },
];

export const fetchCryptoPrices = async (coin_id) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coin_id}?market_data=true`;
  const response = await axios.get(url);
  const { id, market_data } = response.data;
  return {
    coinId: coin_id,
    current_price: market_data.current_price.usd,
    market_cap: market_data.market_cap.usd,
    change_24h: market_data.price_change_percentage_24h,
  };
};

export const saveCryptoData = async () => {
  for (const crypto of cryptos) {
    try {
      const data = await fetchCryptoPrices(crypto.coin_id);
      console.log(data);
      const updatedData = await CryptoPrice.findOneAndUpdate(
        { coinId: crypto.coin_id },
        {
          coinId: data.coinId,
          name: crypto.name,
          currentPriceUSD: data.current_price,
          marketCapUSD: data.market_cap,
          change24h: data.change_24h,
          name: crypto.name,
          $push: { priceHistory: { price: data.current_price } },
          lastUpdated: new Date(),
        },
        { upsert: true, new: true }
      );
      if (updatedData) {
        console.log(`Updated data for ${crypto.name}`);
      } else {
        const newEntry = new CryptoPrice({
          coinId: data.coinId,
          name: crypto.name,
          currentPriceUSD: data.current_price,
          marketCapUSD: data.market_cap,
          change24h: data.change_24h,
          priceHistory: [{ price: data.current_price }],
          lastUpdated: new Date(),
        });
        await newEntry.save();
        console.log(`Saved data for ${crypto.name}`);
      }
    } catch (error) {
      console.error(`Error fetching data for ${crypto.name}:`, error);
    }
  }
};
