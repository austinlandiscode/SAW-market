import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarketService from './market.js';

let promise = MarketService.sortCoin();
promise.then(function(response) {
  
  const body = JSON.parse(response);
  console.log(Object.entries(body));
  for (const [key, value] of Object.entries(body)){
    const nm = key.toUpperCase();
    const price = JSON.stringify(value.usd);
    const change= JSON.stringify(value.usd_24h_change);
    const vol= JSON.stringify(value.usd_24h_vol);
    const cap= JSON.stringify(value.usd_market_cap);
    $("#sorted").append(`<p>${nm} Price: $${price} | 24Hour Change:$${change} | Volume:$${vol} | Market Cap:$${cap} <br></p>`);
  }
});
