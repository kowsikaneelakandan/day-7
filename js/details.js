function reqListener() {
    const countryArr=JSON.parse(this.responseText);

  countryArr.forEach(countryArr => {
    console.table(countryArr.name)
    console.table(countryArr.capital)
    console.table(countryArr.flags.png)

    
  });
  
  
    }
  
  
  const req = new XMLHttpRequest(); 
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  