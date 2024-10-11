import mongoose from "mongoose";

const cryptoPriceSchema = new mongoose.Schema({
  coinId: String,
  name: String,
  currentPriceUSD: Number,
  marketCapUSD: Number,
  change24h: Number,
  priceHistory: [
    {
      _id: false,
      price: Number,
    },
  ],
  lastUpdated: { type: Date, default: Date.now },
});

export const CryptoPrice = mongoose.model("CryptoPrice", cryptoPriceSchema);
