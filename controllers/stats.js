import { CryptoPrice } from "../models/cryptoPrice.js";

const statsController = async (req, res) => {
  try {
    const { coin } = req.query;
    if (!coin) {
      return res.status(400).send("coinId query parameter is required");
    }
    const crypto = await CryptoPrice.findOne({ coinId: coin });
    res.status(200).json({
      price: crypto.currentPriceUSD,
      marketCap: crypto.marketCapUSD,
      "24hChange": crypto.change24h,
    });
  } catch (error) {
    res.status(500).send("Server error from Stats API");
  }
};

export default statsController;
