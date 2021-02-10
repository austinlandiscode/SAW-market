import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarketService from './market.js';

let promise = MarketService.sortCoin();
promise.then(function(response) {
  const body = JSON.parse(response);
  let sorted = Object.entries(body).sort(function(a,b){
    if (a[1].usd < b[1].usd) return 1;
    if (a[1].usd > b[1].usd) return -1;
    return 0;
  });

  displayData(sorted);
  $("#priceTable>thead>tr>th").click(function () {
    console.log($(this).attr("id"));
    // Object.entries(body).sort(function (a, b) {  
  //     if ($(this).attr("id") === "ID"){
  //   if (a[0] < b[0]) return 1;
  //   if (a[0] > b[0]) return -1;
  //   return 0;
  // }
  //   else{
  //   if (a[1].usd < b[1].usd) return 1;
  //   if (a[1].usd > b[1].usd) return -1;
  //   return 0;
  //   }
  // })
  });
});

function displayData(array)
{
  for (const [key, value] of array){
    const nm = key.toUpperCase();
    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value.usd);
    const change = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value.usd_24h_change);
    const vol = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value.usd_24h_vol);
    const cap = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value.usd_market_cap);
    $("#sorted").append(`<tr><td>${nm}</td> <td>${price}</td>  <td>${change}</td> <td>${vol}</td> <td>${cap}</td></tr> <br>`);
  }
}
/*
$('#refresh').on('click', function() {
  
});


$("#priceTable>thead>tr>th").click(function(){
  
  Object.entries(body).sort(function(a,b){
    if($(this).attr("id")==="ID"))
      if (a[0] < b[0]) return 1;
      if (a[0] > b[0]) return -1;
      return 0;
    else
      if (a[1].usd < b[1].usd) return 1;
      if (a[1].usd > b[1].usd) return -1;
      return 0;
}) */
