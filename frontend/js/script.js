document.querySelector('form').addEventListener('submit', function (e) {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const errorDiv = document.getElementById('error-message');

  errorDiv.textContent = '';

  if (!email.value.includes('@')) {
    e.preventDefault();
    errorDiv.textContent = 'Por favor, insira um email válido.';
    email.focus();
    return;
  }

  if (senha.value.length < 6) {
    e.preventDefault();
    errorDiv.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    senha.focus();
    return;
  }
});
