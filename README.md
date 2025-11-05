

```markdown
# Prismatask – Monorepo (Backend + Frontend)

Aplicação **full-stack** para cadastro e gestão de usuários/tarefas.

* **backend/** – API REST em Node.js + Prisma (e framework Adonis/Express)  
* **frontend/** – Tela de login/register/profile em HTML / CSS / JS

> Se você chegou aqui por _clone_ ou _fork_, leia as instruções abaixo para rodar tudo localmente.

---

## 📂 Estrutura de pastas

```
.
├── backend/     # Código fonte da API
├── frontend/    # Interface web (login/cadastro/perfil)
├── .gitignore
├── package.json # Workspaces + scripts de conveniência
└── README.md    # este arquivo
```

---

## ⚙️ Requisitos

1. Node.js ≥ 18 (https://nodejs.org)  
2. npm (ou pnpm / yarn)  
3. Docker (opcional para subir banco ou a API em container)

---

## 🚀 Como rodar em modo desenvolvimento

```bash
# 1) clone o repositório
git clone https://github.com/SEU_USUARIO/prismatask.git
cd prismatask

# 2) instale as dependências dos dois projetos
npm install          # usa workspaces declarados na raiz
# ou: pnpm install
# ou: yarn install

# 3) crie/copiar variáveis de ambiente
cp backend/.env.example backend/.env   # ajuste as chaves da API/banco
# frontend pode usar .env ou configurar a URL da API em js/config.js

# 4) inicie cada parte (dois terminais) ou tudo junto
npm run dev:api      # inicia o servidor da API em http://localhost:3333
npm run dev:web      # inicia o front (ex.: http://localhost:5173)

# ou tudo de uma vez:
npm run dev          # usa concurrently para rodar API + Front
```

Scripts cadastrados na raiz (`package.json`):

| Comando            | O que faz                                   |
|--------------------|---------------------------------------------|
| `npm run dev:api`  | Sobe somente o **backend**                  |
| `npm run dev:web`  | Sobe somente o **frontend**                 |
| `npm run dev`      | Sobe ambos simultaneamente                  |
| `npm run build`    | (opcional) Gera build de produção do front  |
| `npm test`         | Executa testes (configure conforme preciso) |

---

## 🐳 Rodando com Docker (opcional)

```bash
# Exemplo: sobe API e banco (PostgreSQL) em containers
docker compose up -d
```

Veja `docker-compose.yml` (caso já exista) ou crie o seu seguindo as portas indicadas acima.

---

## 📡 Deploy

* **Backend**: qualquer serviço que aceite contêiner Docker ou Node (Railway, Render, Fly.io, etc.).  
* **Frontend**: pode ser hospedado no mesmo servidor Nginx/Apache, em um bucket S3 + CloudFront ou em plataformas como Vercel/Netlify se não precisar de SSR.

Dica: use variáveis de ambiente (ou `secrets`) nos workflows do GitHub Actions para evitar expor chaves.

---

## 🔒 Segurança

1. Guarde senhas/segredos apenas no arquivo **backend/.env** (nunca faça commit dele).  
2. Implemente [prisma/packages/cli/package.json at main - GitHub](https://github.com/prisma/prisma/blob/main/packages/cli/package.json)HTTPS no servidor de produção.  
3. Use CORS no backend se o front for servido por domínio diferente.

---

## 👥 Como contribuir

1. Faça um _fork_ → `git clone` → `git checkout -b minha-feature`  
2. Escreva código e testes.  
3. `git commit -m "feat: minha nova feature"`  
4. `git push origin minha-feature` e abra um Pull Request.  

---

## 📄 Licença

Defina a licença que preferir (MIT, Apache-2.0, GPL…).  
Exemplo:

```
MIT © 2025 Seu Nome
```

---

### Última atualização

05 de novembro de 2025
```

Observações finais:

• Se a API usar AdonisJS, verifique a porta padrão (`.env: PORT=3333`).  
• Se usar outro framework (Express, Fastify etc.), atualize as instruções.  
• No frontend, ajuste nos arquivos JS (ou .env) a URL base da API (`http://localhost:3333/api` ou equivalente).  

Qualquer dúvida ou sugestão, é só falar![zenstack/package.json at main · zenstackhq/zenstack · GitHub](https://github.com/zenstackhq/zenstack/blob/main/package.json)[package.json - npm Docs](https://docs.npmjs.com/cli/v10/configuring-npm/package-json/?v=true)[GitHub - psieg/Lightpack: Lightpack and Prismatik open repository](https://github.com/psieg/Lightpack)[Download specific files from github in command line, not clone the ...](https://stackoverflow.com/questions/9159894/download-specific-files-from-github-in-command-line-not-clone-the-entire-repo)
