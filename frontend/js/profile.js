
import { getCurrentUser } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const emailEl = document.getElementById('email');
  const statusEl = document.getElementById('status');
  const logoutBtn = document.getElementById('logout-btn');

  
  emailEl.textContent = 'Carregando...';
  statusEl.textContent = 'Carregando...';

  try {
    const user = await getCurrentUser();

    if (user) {
     
      emailEl.textContent = user.email || 'Não disponível';

    
      const confirmado =
        Boolean(user.email_confirmed_at) || Boolean(user.confirmed_at);

      statusEl.textContent = confirmado ? 'Verificado' : 'Pendente';
    } else {
      emailEl.textContent = 'Usuário não autenticado';
      statusEl.textContent = 'Desconectado';

     
    }
  } catch (err) {
    console.error('Erro ao obter usuário:', err);
    emailEl.textContent = 'Erro ao carregar';
    statusEl.textContent = 'Erro';
  }


  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      try {
        const { error } = await window.supabaseClient.auth.signOut();
        if (error) {
          console.error('Erro ao sair:', error.message);
          alert('Erro ao sair: ' + error.message);
        } else {
          
          window.location.href = 'index.html';
        }
      } catch (err) {
        console.error('Erro inesperado no logout:', err);
        alert('Erro inesperado ao sair.');
      }
    });
  }
});
