// převod měny

const convertToCZK = (amount, currency) => {
    let rate;
  
    if (currency === "EUR") {
      rate = 24.47;
    } else if (currency === "GBP") {
      rate = 28.09;
    } else if (currency === "USD") {
      rate = 24.81;
    } else if (currency === "BTC") {
      rate = 478637;
    } else {
      return null;
    }
  
    return Math.round(rate * amount);
  };

const result = convertToCZK(25, "EUR")
document.body.innerHTML += `${result} CZK`

/* const convertToCZK = (amountInCZK, currency) => {
    if (currency === "EUR") {
        document.body.innerHTML += `${Math.round(amountInCZK * 24.47)} CZK`
    } else if (currency === "GBP") {
         document.body.innerHTML += `${Math.round(amountInCZK * 28.09)} CZK`
    } else if (currency === "USD") {
        document.body.innerHTML += `${Math.round(amountInCZK * 24.81)} CZK`
    } else if (currency === "BTC") {
        document.body.innerHTML += `${Math.round(amountInCZK * 478637)} CZK`
    } else {
        return null
    }   
}

convertToCZK(25, "EUR")
*/


// kalkulačka

/* const calculate = (number1, operation, number2) => {
    const result = number1
    document.body.innerHTML += `<p>${}`
} */
