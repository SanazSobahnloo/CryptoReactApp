const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-QhMGkjbEApb7Eg1BBtig6Yt8"
const getCoinList = () => {
    return `${BASE_URL}/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}`
}
export { getCoinList }