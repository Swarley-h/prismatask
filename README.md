# Prismatask — Gerenciador de Tarefas Pessoais

Prismatask é um projeto web de gerenciamento de tarefas com foco em acessibilidade, usabilidade e autenticação segura. Interface responsiva para login, cadastro e perfil, com recursos inclusivos como modo de alto contraste, fonte legível, guia de leitura, lupa e controle por voz.

---

## Estrutura do projeto

```
prismatask-login/
├── index.html
├── register.html
├── profile.html
├── css/
│   ├── estilo.css
│   └── acessibilidade.css
├── js/
│   ├── login.js
│   ├── register.js
│   ├── profile.js
│   ├── api.js         (wrapper Supabase) 
│   ├── api-firebase.js (wrapper Firebase opcional)
│   └── acessibilidade.js
├── assets/
├── README.md
└── .gitignore
```

---

## Recursos

- Autenticação por e-mail/senha
- Login com Google (OAuth)
- Cadastro com validação de formulário
- Logout seguro e observação do estado de sessão
- Painel de acessibilidade com:
  - Modo de alto contraste
  - Fonte legível (OpenDyslexic)
  - Máscara de leitura e guia de leitura
  - Lupa e cursor grande
  - Controle por voz (SpeechRecognition)
  - Integração com VLibras
- Preferências salvas em localStorage
- Feedback visual ao ativar recursos

---

## Configurar o projeto localmente

1. Clone o repositório
```bash
git clone https://github.com/lelegaby/prismatask-login.git
cd prismatask-login
```

2. Instale servidor local opcional (recomendado para OAuth)
```bash
npx http-server -c-1 .
# ou
npx serve .
```

3. Abra no navegador a URL informada pelo servidor (ex.: http://localhost:8080).

4. Evite abrir via file:// para testar OAuth.

---

## Configurar autenticação Supabase

1. Crie um projeto em https://supabase.com.
2. Em Project Settings → API copie:
   - SUPABASE_URL
   - SUPABASE_ANON_KEY
3. No arquivo `index.html` (ou em um arquivo de configuração JS) defina:
```html
<script>
  window.SUPABASE_URL = 'https://SEU-PROJETO.supabase.co';
  window.SUPABASE_ANON_KEY = 'SUA_ANON_KEY_PUBLICA';
</script>
```
4. Em Authentication → Providers habilite Email/Password e Google.
5. Adicione Redirect URLs para o ambiente local e produção (ex.: http://localhost:8080/profile.html).

---

## Usar Firebase em vez de Supabase

1. Crie projeto no Firebase Console.
2. Copie `firebaseConfig` e coloque em `firebase.config.js`.
3. Habilite Email/Password e Google em Authentication → Sign-in method.
4. Substitua `api.js` por `api-firebase.js` ou atualize importações para usar o wrapper Firebase.
5. Ajuste handlers de OAuth se usar signInWithPopup ou signInWithRedirect.

---

## Executando e testando

- Teste fluxos: cadastro, login, logout, login Google.
- Verifique salvamento de preferências em localStorage.
- No console do navegador acompanhe erros de autenticação e mensagens do SDK.
- Para produção, registre domínios autorizados no painel do provedor (Supabase/Firebase).

---

## Boas práticas

- Nunca commite chaves secretas em repositório público.
- Use `.env` ou variáveis de ambiente em builds.
- Adicione `.gitignore` com entradas recomendadas:
```
node_modules/
.env
.DS_Store
```
- Trabalhe com branches e pull requests para features maiores.

---

## Contribuição

- Abra uma issue descrevendo a melhoria ou bug.
- Crie um branch com nome descritivo.
- Envie pull request com descrições claras e testes quando aplicável.

---

## Licença

Projeto de autoria própria, destinado a fins acadêmicos e educacionais. Para usos comerciais ou redistribuição ampla, entre em contato com a autora.
