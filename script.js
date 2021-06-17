const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
    e.preventDefault();

    if (name.value.length < 3) {
        errorElement.innerHTML = 'Your name should be at least 3 characters long.';
        return false;
    }

    if (!(email.value.includes('.') && (email.value.includes('@')))) {
        errorElement.innerHTML = 'Please enter a valid email address.';
        return false;
    }

    if (!emailIsValid(email.value)) {
        errorElement.innerHTML = 'Please enter a valid email address.';
        return false;
    }

    if (message.value.length < 15) {
        errorElement.innerHTML = 'Please write a longer message.';
        return false;
    }

    errorElement.innerHTML = '';
    successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.';

    e.preventDefault();
    setTimeout(function () {
        successMsg.innerHTML = '';
        document.getElementById('contact-form').reset();
    }, 6000);

    return true;

}

const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);



// constante du bouton dark mode

// target.checked C'est une référence à l'objet qui a envoyé l'événement

// setAttribute Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.

// La méthode  preventDefault() de l 'interface Event indique à l'agent utilisateur que si l'événement n'est pas traité explicitement, son action par défaut ne doit pas être prise en compte comme elle le serait normalement. 


// SetTimeOut Display an alert box after 3 seconds (3000 milliseconds):


