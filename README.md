Sistema fullstack para gerenciamento de informações de alunos, desenvolvido com React (Web) e React Native (Mobile), consumindo a API REST `proweb.leoproti.com.br`.

## 📋 Descrição do Projeto

Aplicação completa que permite visualizar e consultar informações acadêmicas de alunos através de duas plataformas:

- **Web**: Interface desktop responsiva desenvolvida em React + TypeScript + Vite
- **Mobile**: Aplicativo nativo desenvolvido em React Native + Expo

### Funcionalidades

✅ Listagem de todos os alunos cadastrados  
✅ Visualização detalhada de informações individuais (ID, Nome, Turma, Curso, Matrícula)  
✅ Navegação entre telas com React Router (Web) e React Navigation (Mobile)  
✅ Estados de loading e tratamento de erros  
✅ Design moderno e responsivo  
✅ Testes unitários com Vitest

---

## 🚀 Tecnologias Utilizadas

### Web
- **React 18** + **TypeScript**
- **Vite** - Build tool
- **React Router DOM** - Navegação
- **Axios** - Requisições HTTP
- **CSS Modules** - Estilização
- **Vitest** + **Testing Library** - Testes

### Mobile
- **React Native** + **Expo**
- **React Navigation** - Navegação
- **Axios** - Requisições HTTP
- **React Native Gesture Handler** - Gestos

---

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn
- Para mobile: Expo Go instalado no celular (iOS/Android)

### 🌐 Projeto Web

#### 1. Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto web
cd projeto-web

# Instale as dependências
npm install
```

#### 2. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

#### 3. Build para Produção

```bash
npm run build
npm run preview
```

### 📱 Projeto Mobile

#### 1. Instalação

```bash
# Entre na pasta do projeto mobile
cd projeto-mobile

# Instale as dependências
npm install
```

#### 2. Executar no Expo

```bash
# Inicie o servidor Expo
npx expo start
```

**Opções:**
- Pressione `a` para abrir no Android
- Pressione `i` para abrir no iOS
- Escaneie o QR Code com o app Expo Go

---

## 🗺️ Rotas Implementadas

### Web (`src/router.tsx`)

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Home` (Listagem) | Lista todos os alunos |
| `/home2/:id` | `Home2` (Detalhes) | Exibe detalhes de um aluno específico |

### Mobile (`src/routes.js`)

| Tela | Componente | Descrição |
|------|-----------|-----------|
| `Listagem` | `Listagem` | Lista todos os alunos |
| `Detalhes` | `Detalhes` | Exibe detalhes de um aluno específico |

---

## 🧪 Rodando os Testes (Web)

O projeto web utiliza **Vitest** + **Testing Library** para testes unitários.

### Executar todos os testes

```bash
npm test
```

### Executar testes em modo watch

```bash
npm test -- --watch
```

### Executar testes com coverage

```bash
npm test -- --coverage
```

### Executar um teste específico

```bash
npm test -- src/tests/api.test.ts
```

### Estrutura de Testes

```
src/
└── tests/
    └── api.test.ts  # Testes da API de alunos
```

**Testes implementados:**
- ✅ Buscar lista de alunos (GET all)
- ✅ Buscar aluno por ID (GET by ID)
- ✅ Tratamento de erros
- ✅ Validação de estrutura de dados

---

## 🏃‍♂️ Como Rodar Localmente - Passo a Passo

### Web

1. **Clone o repositório**
   ```bash
   git clone <url>
   cd projeto-web
   ```

2. **Instale dependências**
   ```bash
   npm install
   ```

3. **Configure o ambiente** (se necessário)
   ```bash
   # Crie um arquivo .env se precisar de variáveis de ambiente
   VITE_API_URL=https://proweb.leoproti.com.br
   ```

4. **Inicie o servidor**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

### Mobile

1. **Entre na pasta mobile**
   ```bash
   cd projeto-mobile
   ```

2. **Instale dependências**
   ```bash
   npm install
   ```

3. **Instale o Expo Go**
   - Android: [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

4. **Inicie o Expo**
   ```bash
   npx expo start
   ```

5. **Abra no dispositivo**
   - Escaneie o QR Code com o Expo Go
   - Ou pressione `a` (Android) / `i` (iOS) no terminal

---

## 📝 Créditos e Referências

### Tecnologias
- [React](https://react.dev/) - Biblioteca JavaScript
- [React Native](https://reactnative.dev/) - Framework mobile
- [Vite](https://vitejs.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Framework de testes
- [React Router](https://reactrouter.com/) - Roteamento web
- [React Navigation](https://reactnavigation.org/) - Navegação mobile
- [Axios](https://axios-http.com/) - Cliente HTTP
- [Expo](https://expo.dev/) - Plataforma React Native

---

**Desenvolvido com ❤️ usando React e React Native**
