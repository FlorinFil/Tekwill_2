function openRegisterModal() {
    openModal('register');
}

function openLoginModal() {
    openModal('login');
}

function openModal(continut) {
    document.getElementById('modal_background').style.display = 'block';
    switch(continut) {
        case 'login': showLoginForm(); break;
        case 'register': showRegisterForm(); break;
        default: break;
    }
}

function showLoginForm() {
    document.getElementById('login').style.display = 'flex';
}

function showRegisterForm() {
    document.getElementById('register').style.display = 'flex';
}

function closeModalFromBackground(event) {
    // console.log('closing modal', event.target);
    if (event.target.id === 'modal_background') {
        closeModal();
    }
}

function closeModal() {
    document.getElementById('modal_background').style.display = 'none';
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
}


function submitLogin() {
    const formData = new FormData(document.getElementById('login'));
    // console.log(formData.entries());
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
    
}

function submitRegister() {
    const formData = new FormData(document.getElementById('register'));
    // console.log(formData.entries());
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

}

function handleSubmit(e) {
    console.log('handling submit');
    console.log(e.target.id);
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    console.log({formData})
    console.log({formProps})
  }