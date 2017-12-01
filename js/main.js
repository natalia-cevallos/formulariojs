  var form = document.querySelector('form');
  form.action = 'procesar.php';
  form.enctype = 'multipart/form-data';
  form.method = 'post';
  form.name = 'contact';

  var campos = form.elements;

  for (var i = 0; i < campos.length; i++) {
    if (campos[i].type != 'submit') {
        campos[i].addEventListener('blur', function () {
          this.className = '';
          var error = this.nextElementSibling;
          if (this.value.trim() === '') {
            this.className = 'error_input';
            error.innerHTML = 'El campo es obligatorio';
          } else {
            error.innerHTML = '';
            this.className = '';
          }
        });
    }
  }

  form.onsubmit = function (e) {
    for (var i = 0; i < campos.length; i++) {
      if (campos[i].type != 'submit') {
        if (campos[i].value.trim() === '') {
          e.preventDefault();
          window.alert('Che, llename los campos');
        }
      }
    }
  };

  var botonVerPass = password.nextElementSibling.nextElementSibling;
  botonVerPass.addEventListener('click', function () {
  	if (password.type === 'password') {
  		password.type = 'text';
  	} else {
  		password.type = 'password';
  	}
  });


  var email = form.email;
  var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  email.onblur = function () {
    if(!regexMail.test(this.value)){
      alert('esto no corresponde a un mail');
    }
    // console.log(regexMail.test(this.value));
  }
