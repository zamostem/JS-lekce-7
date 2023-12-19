/* cvičení procvičování funkcí - převod měny
Napište funkci convertToCZK, která převede částku zadanou v cízí měně na české koruny. Funkce bude podporovat následující měny a kurzy.

Měna	Kód	Kurz
Euro	EUR	24.47
Britská libra	GBP	28.09
Americký dolar	USD	24.81
Bitcoin	BTC	478637
Výslednou částku zakrouhlete na celé koruny. Příklad použití:

document.body.innerHTML += convertToCZK(25, 'EUR');
Pokud funkce jako parametr dostane neznámý kód měny, vrátí jako výsledek null. Otestujte funkci výpisem výsledku do stránky.
*/

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


/* cvičení doporučené - kalkulačka
Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko 2, poté +, pak 3 a pak =. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme +, ale až ve chvíli, kdy mačkáme =. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme =.

Napište funkci calculate se třemi parametry number1, operation a number2, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být '+', '-', '*' nebo '/'. Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití

document.body.innerHTML += `2 + 3 = ${calculate(2, '+', 3)}<br>`; // vypíše výsledek 5
document.body.innerHTML += `3 * 7 = ${calculate(3, '*', 7)}<br>`; // vypíše výsledek 21
document.body.innerHTML += `10 / 4 = ${calculate(10, '/', 4)}<br>`; // vypíše výsledek 2.5
*/

/* const calculate = (number1, operation, number2) => {
    const result = number1
    document.body.innerHTML += `<p>${}`
} */

/* cvičení volitelné - přestupný rok
Napište funkci isLeapYear, která jako svůj parametr obdrží celé číslo představující rok. Funkce vrátí true, pokud je zadaný rok přestupný. V opačném případě vrátí false.
*/

const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

const leapYear = isLeapYear(2020)
document.body.innerHTML += `<p>${leapYear}</p>`;