const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-bByCZarBgTk26ziuX4KWe4uF";

const getCoinList = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;

const searchCoin = (text) =>
  `${BASE_URL}/search?query=${text}&x_cg_demo_api_key=${API_KEY}`;

export { getCoinList, searchCoin };
