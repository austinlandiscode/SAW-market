export default class MarketService {
  static sortCoin() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cnamecoin%2Cripple%2Calgorand%2Ctezos%2Cdecentraland%2Cdogecoin%2Clitecoin%2Ccardano%2Cethereum&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
