import "dotenv/config";
import express from "express";
import Connection from "./database/Connection.js";
import cron from "node-cron";
import { saveCryptoData } from "./services/index.js";
import { CryptoPrice } from "./models/cryptoPrice.js";
import Routes from "./routes/apiRoutes.js";

const app = express();
app.use(express.json());
Connection();

// schedule a job to fetch crypto prices every 2 hours
cron.schedule("0 */2 * * *", async () => {
  console.log("Fetching crypto prices");
  saveCryptoData();
});

// first time api call to save data in database
async function saveData() {
  const crypto = await CryptoPrice.find({});
  if (crypto.length === 0) {
    saveCryptoData();
  }
}

saveData();

// Routes
app.use("/", Routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
