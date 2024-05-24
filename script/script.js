function reqListener() {
    let countryArray = JSON.parse(this.responseText);
    console.log(countryArray);
    console.log("COUNTRIES IN ASIA")
    console.log(countryArray.filter(x => {
      if(x.region==="Asia"){  //select countries if the region is asia
        console.log(`${x.name.common}: `,x.region);
        return x;
      }
    } ));
    console.log("COUNTRIES WITH POPULATION LESS THAT 2 LAKHS");
    console.log(countryArray.filter(x => {
      if(x.population<200000){ // select countries only if population is less than 2 lakhs
      console.log(`${x.name.common} :`,x.population);
      return x;
      }
    }));
    console.log("NAME, CAPITAL, FLAG, USING forEach")
    countryArray.forEach(x => {
      console.log(`name : ${x.name.common}, \ncapital : ${x.capital}, \nflag : ${x.flag}`) //prints name,capital,flag for all countries
      return x;
    });
    console.log("TOTAL POPULATION")
    console.log(countryArray.reduce((total,country) => {
      return total+country.population // prints total population using reduce method
    },0));
    console.log("COUNTRIES THAT USE USD")
    countryArray.forEach(x => {
      let c = x.currencies; // get keys of the currencies property 
      if (c && Object.keys(c).includes('USD')) { // only if property is not undefined or null and only it includes "USD" print the name
        console.log(x.name.common);
    }
    });
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();

  