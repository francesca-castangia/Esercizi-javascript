//  Implementare il codice necessario per:

// Recuperare il valore di ciascun campo di input e creare un oggetto person contenente le proprietà: firstName, lastName e age.
// Infine recuperare l'elemento forme aggiungere l'attributo data-person contenente l'oggetto person in formato json. 

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const age = document.querySelector('#age');

const person = {
    firstName : firstName.value.toLowerCase(),
    lastName : lastName.value.toLowerCase(),
    age : age.value
}; 



const form = document.querySelector('form');
form.setAttribute('data-person', JSON.stringify(person));



