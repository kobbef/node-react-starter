const { default: axios } = require("axios");
const ds = require("datastructures-js");
const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

router.use(auth);

router.get("/availableTokens", async (req, res) => {
  const url = new URL("https://api.minerstat.com/v2/coins");
  const response = await axios.get(url);
  const coins = new Set();
  let coinCountMap = {};
  response.data.map((entry) => {
    if (entry.coin == undefined) {
      return;
    }
    const count = coinCountMap[entry.coin] || 0;
    coinCountMap[entry.coin] = count + 1;
  });

  const sorted = Object.entries(coinCountMap).sort((a, b) => {
    return b[1] - a[1];
  });

  const topCoins = [...Object.keys(coinCountMap).slice(0, 10)];
  res.status(200).send(JSON.stringify(topCoins));
});

module.exports = router;
