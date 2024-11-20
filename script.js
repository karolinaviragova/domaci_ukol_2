/*
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu.
// Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu
// Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/

const justFood = (numOfCustomers) => {
  const price = numOfCustomers * 1000;
  return `Catering od Your Mama pro ${numOfCustomers} lidí za ${price} Kč.`
}

const yourMama = (numOfCustomers) => {
  const price = numOfCustomers * 2000;
  return `Catering od Your Mama pro ${numOfCustomers} lidí za ${price} Kč.`
}

const flavourHaven = (numOfCustomers) => {
  const price = numOfCustomers * 3000;
  return `Catering od Your Mama pro ${numOfCustomers} lidí za ${price} Kč.`
}

console.log(justFood(10))
console.log(yourMama(10))
console.log(flavourHaven(10))
// document.body.innerHTML += `<p>${justFood(10)}</p>`;
// document.body.innerHTML += `<p>${yourMama(10)}</p>`;
// document.body.innerHTML += `<p>${flavourHaven(10)}</p>`;

const createEvent = (nameOfEvent, catering) => {
 return `Udalost ${nameOfEvent} s ${catering}`
}

console.log(createEvent("Holly spirit", flavourHaven(10)));
