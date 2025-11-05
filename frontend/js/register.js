
import { register as apiRegister } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-register');
  const mensagemEl = document.getElementById('mensagem');
  const oauthErrorEl = document.getElementById('oauth-error');
  const btnGoogle = document.getElementById('btn-google');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    mensagemEl.textContent = '';

    const email = document.getElementById('email-register').value.trim();
    const senha = document.getElementById('password-register').value;
    const confirmar = document.getElementById('confirm-password').value;

    if (!email || !senha || !confirmar) {
      mensagemEl.textContent = 'Preencha todos os campos.';
      return;
    }

    if (senha.length < 8) {
      mensagemEl.textContent = 'A senha deve ter pelo menos 8 caracteres.';
      return;
    }

    if (senha !== confirmar) {
      mensagemEl.textContent = 'As senhas não coincidem.';
      return;
    }

    try {
      const result = await apiRegister(email, senha);
      if (result.success) {
        mensagemEl.textContent = 'Usuário criado com sucesso!';
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1500);
      } else {
        mensagemEl.textContent = result.error || 'Erro ao cadastrar.';
      }
    } catch (err) {
      console.error('Erro de conexão:', err);
      mensagemEl.textContent = 'Erro de conexão com o servidor.';
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
      oauthErrorEl.textContent = 'Erro ao iniciar cadastro com Google.';
    }
  });
});
