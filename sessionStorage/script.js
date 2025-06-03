document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector('.email');
    const firstnameInput = document.querySelector('.firstname');
    const lastnameInput = document.querySelector('.lastname');
    const saveButton = document.querySelector('.btn');
    const printedForm = document.querySelector('.printedform');
    const titleName = document.querySelector('.title-name');

    // Funzione per aggiornare il titolo
    function updateTitleName(name) {
        titleName.textContent = name || '';
    }

    // Carica dati da sessionStorage se presenti
    const savedData = JSON.parse(sessionStorage.getItem('formData'));
    if (savedData) {
        emailInput.value = savedData.email || '';
        firstnameInput.value = savedData.firstname || '';
        lastnameInput.value = savedData.lastname || '';
        updateTitleName(savedData.firstname);
    }

    // Gestione salvataggio
    saveButton.addEventListener('click', function () {
        const formData = {
            email: emailInput.value,
            firstname: firstnameInput.value,
            lastname: lastnameInput.value
        };

        sessionStorage.setItem('formData', JSON.stringify(formData));
        updateTitleName(formData.firstname);
        printedForm.textContent = `Email: ${formData.email}, Nome: ${formData.firstname}, Cognome: ${formData.lastname}`;
    });
});