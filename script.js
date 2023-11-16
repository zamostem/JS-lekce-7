let msg = null
let vek = 19

if (vek > 18) {
    msg = "Jsi dospelak"
}

const odstavec = document.querySelector ("#odstave")

const mojeFce = () => {
    console.log("Test")

}

const hodnota = mojeFce()

if (odstavec === null) {
    console.log("Element nebyl nalezen")
} else {
    console.log(odstavec)
}


// Obor platnosti proměnných

/* const heslo = prompt("Zadej heslo")
const hesloDatabaze = "admin"

if (heslo === hesloDatabaze) {
    const zprava = "Vitej"
    document.body.innerHTML += zprava
} else {
    zprava = "Pristup odepren"
    document.body.innerHTML += zprava
}

const overeniHesla = (heslo) => {
    if (heslo === hesloDatabaze) {
        return "Vitej"
    } else {
        return "Pristup odepren"
    }
}

document.body.innerHTML = overeniHesla("1234")
*/

const hesloDatabaze = "admin"

const overeniHesla = (heslo) => {
    const uzivatelskeJmeno = prompt("Zadej jmeno")

    if(heslo === hesloDatabaze) {
        const zprava = "Vitej uzivateli " + uzivatelskeJmeno
        return zprava
    } else {
        return "Pristup odepren"
    }
}

const uzivatelskeJmeno = "Michal"

document.body.innerHTML = overeniHesla("admin")
console.log(uzivatelskeJmeno)


const komponenta = (nazev, cena, cilovka, sleva) => {
    const vypocetSlevy = cena - (cena * sleva)
    return `<h2>${nazev}</h2>
    <p>Puvodni cena: ${cena}, Cena po sleve: ${vypocetSlevy}</p>
    <p>${cilovka}</p>`
}

komponenta("a", "b", "c", 0.3)

console.log(nazev)