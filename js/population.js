function reqListener() {
  const countryArr=JSON.parse(this.responseText);

const filter_countryArr =countryArr.filter(function(countryArr){
  return countryArr.population <= 200000
})
console.table(filter_countryArr)


  }


const req = new XMLHttpRequest(); 
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
