# 🔐 User Authentication API

![Node](https://img.shields.io/badge/node.js-18+-green)
![TypeScript](https://img.shields.io/badge/typescript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-success)

API de **autenticação e autorização de usuários** desenvolvida com **Node.js** e **TypeScript**, utilizando **JWT (JSON Web Token)** para controle de acesso.

Este projeto foi criado com o objetivo de demonstrar boas práticas no desenvolvimento de APIs backend, incluindo:

- autenticação com JWT
- proteção de rotas
- organização de código
- uso de variáveis de ambiente
- estrutura escalável para aplicações backend

---

# 📚 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login de usuário
- ✅ Geração de token JWT
- ✅ Proteção de rotas autenticadas
- ✅ Middleware de autenticação

---

# 🚀 Tecnologias utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **dotenv**

---

# 📦 Clonando o projeto

Clone o repositório:

```bash
git clone https://github.com/Vinicius-J/user_authentication.git
```

Entre na pasta do projeto:

```bash
cd user_authentication
```

---

# 📥 Instalando dependências

Instale as dependências do projeto:

```bash
npm install
```

ou

```bash
yarn install
```

---

# ⚙️ Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```env
PORT=3000

JWT_SECRET=your_jwt_secret

DATABASE_URL=your_database_connection
```

### Descrição das variáveis

| Variável | Descrição |
|--------|--------|
| PORT | Porta em que a aplicação será executada |
| JWT_SECRET | Chave secreta usada para gerar os tokens JWT |
| DATABASE_URL | String de conexão com o banco de dados |

---

# ▶️ Executando o projeto em desenvolvimento

Para iniciar o servidor em modo desenvolvimento:

```bash
npm run dev
```

Esse modo geralmente utiliza **nodemon** ou **ts-node-dev** para reiniciar o servidor automaticamente após alterações no código.

A API ficará disponível em:

```
http://localhost:3000
```

---

# 🏗️ Build do projeto

Para compilar o projeto TypeScript:

```bash
npm run build
```

Os arquivos compilados serão gerados na pasta:

```
dist/
```

---

# 🚀 Executando em produção

Após gerar o build, execute:

```bash
npm start
```

ou diretamente:

```bash
node dist/server.js
```

---

# 🔑 Autenticação

A API utiliza **JWT (JSON Web Token)** para autenticação.

Após realizar login, um token será gerado.

Esse token deve ser enviado no header das requisições protegidas:

```
Authorization: Bearer SEU_TOKEN
```

Exemplo:

```http
GET /users
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

# 📡 Endpoints da API

### Autenticação

#### Criar usuário

```
POST /users
```

Body:

```json
{
  "name": "Vinicius",
  "email": "vinicius@email.com",
  "password": "123456"
}
```

---

#### Login

```
POST /auth/login
```

Body:

```json
{
  "email": "vinicius@email.com",
  "password": "123456"
}
```

Resposta:

```json
{
  "token": "jwt_token"
}
```

---

#### Rota protegida

```
GET /users
```

Header necessário:

```
Authorization: Bearer TOKEN
```

---

# 📂 Estrutura do projeto

```
src
 ├── controllers
 │
 ├── services
 │
 ├── repositories
 │
 ├── middlewares
 │
 ├── routes
 │
 ├── config
 │
 └── server.ts
```

---

# 🧠 Conceitos aplicados

Este projeto aplica alguns conceitos importantes de backend:

- organização de código em camadas
- autenticação baseada em token
- middleware para proteção de rotas
- uso de variáveis de ambiente
- separação de responsabilidades

---

# 📄 Licença

Este projeto está sob a licença **MIT**.

---

# 👨‍💻 Autor

Desenvolvido por **Vinícius Joaquim dos Santos**

GitHub:

```
https://github.com/Vinicius-J
```

---

# ⭐ Contribuição

Contribuições são bem-vindas!

Se quiser contribuir:

1. Fork o projeto
2. Crie uma branch

```
git checkout -b minha-feature
```

3. Commit suas alterações

```
git commit -m "Minha nova feature"
```

4. Faça push

```
git push origin minha-feature
```

5. Abra um Pull Request
