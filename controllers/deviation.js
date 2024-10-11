import { CryptoPrice } from "../models/cryptoPrice.js";

const deviationController = async (req, res) => {
  const { coin } = req.query; // Extract coinId from query parameters

  if (!coin) {
    return res.status(400).send("coin query parameter is required");
  }

  try {
    // Fetch the coin's price history
    const crypto = await CryptoPrice.findOne({ coinId: coin }).exec();
    if (!crypto || crypto.priceHistory.length === 0) {
      return res.status(404).send(`No records found for coin: ${coin}`);
    }

    // Get the last 100 prices
    const recentPrices = crypto.priceHistory
      .slice(-100)
      .map((entry) => entry.price);
    // Calculate standard deviation
    const mean =
      recentPrices.reduce((acc, val) => acc + val, 0) / recentPrices.length;
    const variance =
      recentPrices.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) /
      recentPrices.length;
    const stdDeviation = Math.sqrt(variance);

    res.json({ deviation: stdDeviation.toFixed(2) });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error from Deviation API");
  }
};

export default deviationController;
