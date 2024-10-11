export const welcomeController=(req,res)=>{
    res.json({
        "message":"Welcome to Coin Price Tracker",
        "/stats":"https://koinxcryptopricetracker-eyedfefbhagyf5gn.centralindia-01.azurewebsites.net/stats?coin=bitcoin",
        "/deviation":"https://koinxcryptopricetracker-eyedfefbhagyf5gn.centralindia-01.azurewebsites.net/deviation?coin=bitcoin"

    })
}