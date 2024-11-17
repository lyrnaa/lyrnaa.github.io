const form = document.getElementById('form');
const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const sex = document.getElementById('sex');
const date = document.getElementById('date');
const phone = document.getElementById('phone');
const country = document.getElementById('country');
const city = document.getElementById('city');
const homenumber = document.getElementById('numh');
const flatnumber = document.getElementById('numf');
const radioButtons = document.querySelectorAll('input[name="driverL"]');
const street = document.getElementById('street');
const password = document.getElementById('pwd');
let today = new Date().toISOString().slice(0, 10)

form.addEventListener('submit', e => {
    e.preventDefault();

    const isFormValid = validateInputs();

    if (isFormValid) {
        window.location.reload();
    }
});

const Disapprove = (field, error) => {
    const property = field.parentElement;
    const errorMessage = property.querySelector('.error');
    errorMessage.innerText = error;
    property.classList.add('error');
    property.classList.remove('success');
}

const Approve = field => {
    const property = field.parentElement;
    const errorMessage = property.querySelector('.error');
    errorMessage.innerText = '';
    property.classList.add('success');
    property.classList.remove('error');
};

const validEmail = email => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const validatePhoneNumber = phone => {
    const phonePattern = /^\d{9}$/;
    return phonePattern.test(phone);
}

const validSex = sex => {
    const validSexes = ["mężczyzna", "kobieta", "inna"];
    return validSexes.includes(sex.trim().toLowerCase());
}

const strongPassword = password => {
    return password.length >= 8 && /\d/.test(password);
}

const isNumericOrEndsWithLetter = value => {
    const pattern = /^\d+[A-Za-z]?$/;
    return pattern.test(value);
}

const isNumeric = number => {
    const phonePattern = /^\d+$/;
    return phonePattern.test(number);
}

const isAlphabeticOnly = value => {
    const pattern = /^[A-Za-z\s]+$/;
    return pattern.test(value);
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const sexValue = sex.value.trim();
    const phoneValue = phone.value.trim();
    const countryValue = country.value.trim();
    const cityValue = city.value.trim();
    const homenumberValue = homenumber.value.trim();
    const flatnumberValue = flatnumber.value.trim();
    const streetValue = street.value.trim();
    const passwordValue = password.value.trim();

    let isValid = true;

    if (firstnameValue === '') {
        Disapprove(firstname, 'Imię jest wymagane');
        isValid = false;
    } else if (!isAlphabeticOnly(firstnameValue)) {
        Disapprove(firstname, 'Imię może zawierać tylko litery')
        isValid = false;
    } else {
        Approve(firstname);
    }

    if (lastnameValue === '') {
        Disapprove(lastname, 'Nazwisko jest wymagane');
        isValid = false;
    } else if (!isAlphabeticOnly(lastnameValue)) {
        Disapprove(lastname, 'Nazwisko może zawierać tylko litery')
        isValid = false;
    } else {
        Approve(lastname);
    }

    if (emailValue === '') {
        Disapprove(email, 'Email jest wymagany');
        isValid = false;
    } else if (!validEmail(emailValue)) {
        Disapprove(email, 'Podaj prawidłowy adres email');
        isValid = false;
    } else {
        Approve(email);
    }

    if (sexValue === '') {
        Disapprove(sex, 'Płeć jest wymagana');
        isValid = false;
    } else if (!validSex(sexValue)) {
        Disapprove(sex, 'Podaj prawidłową płeć (Mężczyzna/Kobieta/Inna)');
        isValid = false;
    } else {
        Approve(sex);
    }

    if (date.value.length < 1) {
        Disapprove(date, 'Wybór daty urodzenia jest wymagany');
        isValid = false;
    } else if(date.value > today) {
        Disapprove(date, 'Nieprawidłowy wybór daty');
        isValid = false;
    } else {
        Approve(date);
    }

    if (phoneValue === '') {
        Disapprove(phone, 'Numer telefonu jest wymagany');
        isValid = false;
    } else if (!validatePhoneNumber(phoneValue)) {
        Disapprove(phone, 'Numer telefonu powinien mieć 9 cyfr');
        isValid = false;
    } else {
        Approve(phone);
    }

    if (countryValue === '') {
        Disapprove(country, 'Państwo jest wymagane');
        isValid = false;
    } else if (!isAlphabeticOnly(countryValue)) {
        Disapprove(country, 'Państwo może zawierać tylko litery');
        isValid = false;
    } else {
        Approve(country);
    }

    if (cityValue === '') {
        Disapprove(city, 'Miasto jest wymagane');
        isValid = false;
    } else if (!isAlphabeticOnly(cityValue)) {
        Disapprove(city, 'Miasto może zawierać tylko litery');
        isValid = false;
    } else {
        Approve(city);
    }

    if (streetValue === '') {
        Disapprove(street, 'Ulica jest wymagana');
        isValid = false;
    } else if (!isAlphabeticOnly(streetValue)) {
        Disapprove(street, 'Ulica może zawierać tylko litery');
        isValid = false;
    } else {
        Approve(street);
    }

    if (homenumberValue === '') {
        Disapprove(homenumber, 'Nr domu jest wymagany');
        isValid = false;
    } else if (!isNumericOrEndsWithLetter(homenumberValue)) {
        Disapprove(homenumber, 'Nr domu powinien mieć format np. 13 lub 12A');
        isValid = false;
    } else {
        Approve(homenumber);
    }

    if (flatnumberValue === '') {
        Disapprove(flatnumber, 'Nr mieszkania jest wymagany');
        isValid = false;
    } else if (!isNumeric(flatnumberValue)) {
        Disapprove(flatnumber, 'Nr mieszkania powinien być liczbą');
        isValid = false;
    } else {
        Approve(flatnumber);
    }

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            document.getElementById("message").innerHTML = '';
            break;
        } else {
            document.getElementById("message").innerHTML = 'Wybierz jedną odpowiedź';
            isValid = false;
        }}
        

    if (passwordValue === '') {
        Disapprove(password, 'Hasło jest wymagane');
        isValid = false;
    } else if (!strongPassword(passwordValue)) {
        Disapprove(password, 'Hasło musi mieć co najmniej 8 znaków i zawierać cyfrę');
        isValid = false;
    } else {
        Approve(password);
    }

    return isValid;
}
