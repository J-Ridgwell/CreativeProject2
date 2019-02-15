document.getElementById("stockSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("stockInput").value;
  if (value === "")
    return;
  const url= "https://marketdata.websol.barchart.com/getQuote.json?apikey=ee8f7d9c9a31bb81aeb3c1d9f8347fae&symbols=" + value + "&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<h1>' + json.results[0].name + ":" +"</h1>";
      results += '<h2>' + json.results[0].exchange + ": " + value + "</h2>"
      results += '<h2>' + "Opening Price: $" + json.results[0].open + "</h2>"
      results += '<h2>' + "Current Price: $" + json.results[0].lastPrice + "</h2>"
      results += '<h2>' + "Day's High: $" + json.results[0].high + "</h2>"
      results += '<h2>' + "Day's Low: $" + json.results[0].low + "</h2>"
      change=json.results[0].percentChange
      if (change<0){
        console.log('hi')
        results += '<h2 class="negative">' + "Day's change: " + change + "%" + "</h2>"
      } else{
        results += '<h2 class="positive">' + "Day's change: " + change + "%" + "</h2>"
      }
      results += '<h2>' + "52 Week High on " + json.results[0].fiftyTwoWkHighDate
        +  ": $" + json.results[0].fiftyTwoWkHigh + "</h2>"
      results += '<h2>' + "52 Week Low on " + json.results[0].fiftyTwoWkLowDate
        +  ": $" + json.results[0].fiftyTwoWkLow + "</h2>"
      let name = json.results[0].name;
      name=name.substr(0,name.indexOf(' '));
      if(!name.endsWith(".com"))
        name+=".com";
      let url2= "https://logo.clearbit.com/" + name
      console.log(url2);
      document.getElementById("stockResults").innerHTML = results;
      document.getElementById("logoResults").innerHTML = "<img src='"+url2+"'</img>";
    });

});


document.getElementById("Facebook").addEventListener("click", function(event) {
  event.preventDefault();
  const value2 = "FB"
  if (value2 === "")
    return;
  const url3= "https://marketdata.websol.barchart.com/getQuote.json?apikey=ee8f7d9c9a31bb81aeb3c1d9f8347fae&symbols=fb&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate";
  fetch(url3)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<h1>' + json.results[0].name + ":" +"</h1>";
      results += '<h2>' + json.results[0].exchange + ": " + value2 + "</h2>"
      results += '<h2>' + "Opening Price: $" + json.results[0].open + "</h2>"
      results += '<h2>' + "Current Price: $" + json.results[0].lastPrice + "</h2>"
      results += '<h2>' + "Day's High: $" + json.results[0].high + "</h2>"
      results += '<h2>' + "Day's Low: $" + json.results[0].low + "</h2>"
      change=json.results[0].percentChange
      if (change<0){
        results += '<h2 class="negative">' + "Day's change: " + change + "%" + "</h2>"
      } else{
        results += '<h2 class="positive">' + "Day's change: " + change + "%" + "</h2>"
      }
      results += '<h2>' + "52 Week High on " + json.results[0].fiftyTwoWkHighDate
        +  ": $" + json.results[0].fiftyTwoWkHigh + "</h2>"
      results += '<h2>' + "52 Week Low on " + json.results[0].fiftyTwoWkLowDate
        +  ": $" + json.results[0].fiftyTwoWkLow + "</h2>"
      let name = json.results[0].name;
      name=name.substr(0,name.indexOf(' '));
      let url4= "https://logo.clearbit.com/" + name+ ".com"
      console.log(url4);
      document.getElementById("stockResults").innerHTML = results;
      document.getElementById("logoResults").innerHTML = "<img src='"+url4+"'</img>";
    });

});



document.getElementById("Tesla").addEventListener("click", function(event) {
  event.preventDefault();
  const value3 = "TSLA"
  if (value3 === "")
    return;
  const url4= "https://marketdata.websol.barchart.com/getQuote.json?apikey=ee8f7d9c9a31bb81aeb3c1d9f8347fae&symbols=tsla&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate";
  fetch(url4)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<h1>' + json.results[0].name + ":" +"</h1>";
      results += '<h2>' + json.results[0].exchange + ": " + value3 + "</h2>"
      results += '<h2>' + "Opening Price: $" + json.results[0].open + "</h2>"
      results += '<h2>' + "Current Price: $" + json.results[0].lastPrice + "</h2>"
      results += '<h2>' + "Day's High: $" + json.results[0].high + "</h2>"
      results += '<h2>' + "Day's Low: $" + json.results[0].low + "</h2>"
      change=json.results[0].percentChange
      if (change<0){
        results += '<h2 class="negative">' + "Day's change: " + change + "%" + "</h2>"
      } else{
        results += '<h2 class="positive">' + "Day's change: " + change + "%" + "</h2>"
      }
      results += '<h2>' + "52 Week High on " + json.results[0].fiftyTwoWkHighDate
        +  ": $" + json.results[0].fiftyTwoWkHigh + "</h2>"
      results += '<h2>' + "52 Week Low on " + json.results[0].fiftyTwoWkLowDate
        +  ": $" + json.results[0].fiftyTwoWkLow + "</h2>"
      let name = json.results[0].name;
      name=name.substr(0,name.indexOf(' '));
      let url5= "https://logo.clearbit.com/" + name+ ".com"
      document.getElementById("stockResults").innerHTML = results;
      document.getElementById("logoResults").innerHTML = "<img src='"+url5+"'</img>";
    });

});


document.getElementById("Google").addEventListener("click", function(event) {
  event.preventDefault();
  const value4 = "GOOG"
  if (value4 === "")
    return;
  const url6= "https://marketdata.websol.barchart.com/getQuote.json?apikey=ee8f7d9c9a31bb81aeb3c1d9f8347fae&symbols=GOOG&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate";
  fetch(url6)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";
      results += '<h1>' + json.results[0].name + ":" +"</h1>";
      results += '<h2>' + json.results[0].exchange + ": " + value4 + "</h2>"
      results += '<h2>' + "Opening Price: $" + json.results[0].open + "</h2>"
      results += '<h2>' + "Current Price: $" + json.results[0].lastPrice + "</h2>"
      results += '<h2>' + "Day's High: $" + json.results[0].high + "</h2>"
      results += '<h2>' + "Day's Low: $" + json.results[0].low + "</h2>"
      change=json.results[0].percentChange
      if (change<0){
        results += '<h2 class="negative">' + "Day's change: " + change + "%" + "</h2>"
      } else{
        results += '<h2 class="positive">' + "Day's change: " + change + "%" + "</h2>"
      }
      results += '<h2>' + "52 Week High on " + json.results[0].fiftyTwoWkHighDate
        +  ": $" + json.results[0].fiftyTwoWkHigh + "</h2>"
      results += '<h2>' + "52 Week Low on " + json.results[0].fiftyTwoWkLowDate
        +  ": $" + json.results[0].fiftyTwoWkLow + "</h2>"
      let name = json.results[0].name;
      name=name.substr(0,name.indexOf(' '));
      let url7= "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
      document.getElementById("stockResults").innerHTML = results;
      document.getElementById("logoResults").innerHTML = "<img src='"+url7+"'</img>";
    });

});
