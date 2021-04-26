const APP = (() => {
    (function formSubmit() {
        const form = document.querySelector('form');
        const submit = document.querySelector('#submit');
        
        submit.addEventListener('click', e => {
            if (form.checkValidity()) {
                e.preventDefault();
                alert('High Five!');
            }
        });
    })();

    (function emailValidation() {
        const email = document.querySelector('#email');
        email.addEventListener('invalid', () => {
            if (email.validity.typeMismatch) {
                email.setCustomValidity('Please enter an e-mail address');
            }
            else {
                email.setCustomValidity('');
            }
        });
    })();

    (function countryValidation() {
        const country = document.querySelector('#country');
        country.addEventListener('input', () => {
            if (country.validity.valueMissing) {
                country.setCustomValidity('Please enter the name of your country');
            }
            else {
                country.setCustomValidity('');
            }
        });
    })();

    (function zipValidation() {
        const zip = document.querySelector('#zip');
        zip.addEventListener('input', () => {
            if (zip.validity.patternMismatch) {
                zip.setCustomValidity('Please enter your 5 digit zip code');
            }
            else {
                zip.setCustomValidity('');
            }
        });
    })();

    (function setPWValidation() {
        const setPW = document.querySelector('#set-pw');
        setPW.addEventListener('input', () => {
            if (setPW.validity.patternMismatch) {
                setPW.setCustomValidity('Please make sure the password follows the requirements on the form');
            }
            else {
                setPW.setCustomValidity('');
            }
        });
    })();

    (function confirmPWValidation() {
        const setPW = document.querySelector('#set-pw');
        const confirmPW = document.querySelector('#confirm-pw');
        confirmPW.addEventListener('input', () => {
            if (confirmPW.value != setPW.value) {
                confirmPW.setCustomValidity('Please make sure this is the same as the set password above');
            }
            else {
                confirmPW.setCustomValidity('');
            }
        });
    })();
})();
