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
/*trying to add translation to web page*/

  $('[lang="rom"]').hide();
  $('[lang="fr"]').hide();

$('#lang-switch').change(function () {
  var lang = $(this).val();
  switch (lang) {
    case 'en': 
      $('[lang]').hide();
      $('[lang="en"]').show();
      break;
    case 'rom':
      $('[lang]').hide();
      $('[lang="rom"]').show();
      break;
    case 'fr':
      $('[lang]').hide();
      $('[lang="fr"]').show();
      break;
    default:
      $('[lang]').hide();
      $('[lang="en"]').show();
  }
});