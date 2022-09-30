document.getElementById("submit-button").addEventListener("click", function(){
	document.getElementById("sign-up-form").className="submitted";
});

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    const validation = document.querySelector('p.password-validation');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
      validation.innerHTML = '';
    } else {
      confirm.setCustomValidity('*Passwords do not match');
      validation.innerHTML = 'Passwords do not match';
    }
  }