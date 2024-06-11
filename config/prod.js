//prod.js-production keys here!!

const { stripePublishableKey, stripeSecretKey, sendGridKey, redirectDomain } = require("./dev");


module.exports={
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET ,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey:process.env.STRIPE_PUBLISHABLE_KEY,
    sendGridKey:process.env.SEND_GRID_KEY,
    redirectDomain:process.env.REDIRECT_DOMAIN
};