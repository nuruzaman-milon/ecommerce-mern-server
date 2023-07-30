require("dotenv").config();

const serverPort = process.env.SERVER_PORT;

const mongodbUrl = process.env.MONGODB_ATLAS_URL;

const jwtActivationKey = process.env.JWT_ACTIVATION_KEY;

module.exports = { serverPort, mongodbUrl, jwtActivationKey };
