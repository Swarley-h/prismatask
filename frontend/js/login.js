
import { login as apiLogin } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  const emailInput = document.getElementById('email-login');
  const passInput = document.getElementById('password-login');
  const rememberCheckbox = document.getElementById('remember-me');
  const errorEl = document.getElementById('login-error'); 
  const oauthErrorEl = document.getElementById('oauth-error');
  const btnGoogle = document.getElementById('btn-google');

  
  const emailSalvo = localStorage.getItem('emailSalvo');
  if (emailSalvo) {
    emailInput.value = emailSalvo;
    rememberCheckbox.checked = true;
  }

  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl.textContent = '';

    const email = emailInput.value.trim();
    const senha = passInput.value;

    if (!email || !senha) {
      errorEl.textContent = 'Preencha e-mail e senha.';
      return;
    }

    try {
      const result = await apiLogin(email, senha);
      if (result.success) {
        if (rememberCheckbox.checked) {
          localStorage.setItem('emailSalvo', email);
        } else {
          localStorage.removeItem('emailSalvo');
        }
        window.location.href = 'profile.html';
      } else {
        errorEl.textContent = result.error || 'Login inválido!';
      }
    } catch (err) {
      console.error('Erro no login:', err);
      errorEl.textContent = 'Erro ao conectar com o servidor.';
    }
  });

  
  btnGoogle?.addEventListener('click', async () => {
    try {
      const { error } = await window.supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/profile.html' }
      });
      if (error) oauthErrorEl.textContent = error.message;
    } catch (err) {
      console.error(err);
      oauthErrorEl.textContent = 'Erro ao iniciar login com Google.';
    }
  });
});
