function getShippingCost(country) {
    let cost;
       const lowerCaseCountry = country.toLowerCase();
    switch (lowerCaseCountry) {
        case "china":
            cost = 100;
            break
        case "chile":
            cost = 250;
            break
        case "australia":
            cost = 170;
            break
        case "jamaica":
            cost = 120;
            break
        default:
            return `Sorry, there is no delivery to your country`;
        
    }
    let message = `Shipping to ${country} will cost ${cost} credits`
      return message;
}
console.log(getShippingCost("Australia")); 
console.log(getShippingCost("Germany")); 
console.log(getShippingCost("China")); 
console.log(getShippingCost("Chile")); 
console.log(getShippingCost("Jamaica")); 
console.log(getShippingCost("Sweden")); 