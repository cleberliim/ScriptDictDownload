const redis = require("../config/redis");

const cache = (keyGenerator) => async (req, res, next) => {
  const key = keyGenerator(req);
  const cachedData = await redis.get(key);

  if (cachedData) {
    res.set("x-cache", "HIT");
    return res.status(200).json(JSON.parse(cachedData));
  }

  res.set("x-cache", "MISS");
  const originalSend = res.send.bind(res);

  res.send = (body) => {
    redis.set(key, body, "EX", 3600); // Cache por 1 hora
    originalSend(body);
  };

  next();
};

module.exports = cache;
