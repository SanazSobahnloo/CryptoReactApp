const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-QhMGkjbEApb7Eg1BBtig6Yt8"
const getCoinList = (page, currency) => {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=6&page=${page}&x_cg_demo_api_key=${API_KEY}`
}
const searchCoin = (query) => {
    return `${BASE_URL}/search?x_cg_demo_api_key=${API_KEY}&query=${query}`
}
export { getCoinList, searchCoin }