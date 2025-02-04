# Koinx
Here's a `README.md` file for your project, including steps for setting up the environment and creating the `.env` file.

---

# Crypto Price Tracker

This application is a **Crypto Price Tracker** built with **Node.js**, **Express**, and **MongoDB**. It fetches cryptocurrency prices from an external API and saves them to the database every 2 hours using a cron job.

## Features

- Fetches cryptocurrency prices and stores them in MongoDB
- Scheduled updates every 2 hours via cron job
- REST API for interacting with the stored crypto prices

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (either locally or through a cloud service like MongoDB Atlas)

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/ManishMk1/Koinx.git

```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the environment variables

Create a `.env` file in the root of your project and add the following:

```
PORT=3000
DB_URL=mongodb://localhost:27017/crypto_db
CRYPTO_API_KEY=your_crypto_api_key_here
```

- **PORT**: The port number for your server (default is `3000`).
- **DB_URL**: The MongoDB connection string (update it according to your MongoDB setup).
- **CRYPTO_API_KEY**: Your API key for fetching crypto prices from an external API service.

### 4. Set up the database connection

In the `Connection.js` file, make sure to update the connection string if you're not using the default `localhost`.

### 5. Run the application

```bash
npm start
```

The server will be up and running, and the crypto prices will be fetched and stored in the database every 2 hours.

## API Endpoints

- **`GET /stats`**: Get statistics about cryptocurrency prices, marketCap, 24hChange.
- **`GET /deviation`**: Get standard deviation in cryptocurrency prices.

## How It Works

- **Cron Job**: The application uses `node-cron` to schedule a job that fetches cryptocurrency prices every 2 hours.
- **Initial Fetch**: When the server starts, it checks if the database has any stored prices. If not, it will fetch and store the data immediately.
- **MongoDB**: Data is stored in MongoDB, using Mongoose models.


Now, you can create the `.env` file in the root folder, add the environment variables as explained, and your project will be good to go!