const jwt = require("jsonwebtoken");

const createJWT = (payload, secretKey, expiresIn) => {
  try {
    if (typeof payload !== "object" || !payload) {
      throw new Error("Payload must be a non empty object");
    }
    if (typeof secretKey !== "string" || !secretKey) {
      throw new Error("Secret key must be a non empty string");
    }
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { createJWT };
