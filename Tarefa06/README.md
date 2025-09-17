# Mini Loja React - Atividade 6

Este projeto implementa uma "Mini Loja" em React, demonstrando a mesma interface estilizada com quatro técnicas diferentes, conforme solicitado na Atividade 6.

## 🧾 Descrição da Atividade

Implementar a mesma tela/interface de uma mini loja utilizando as seguintes técnicas de estilização:

1.  **CSS Global**
2.  **CSS Modules**
3.  **Tailwind CSS**
4.  **Styled-components**

**Requisitos principais:**

- Navbar fixa com logo, toggle de tema claro/escuro (com persistência via `localStorage`) e badge do carrinho.
- Grid de produtos responsivo com 1, 2, 3 ou 4 colunas dependendo do tamanho da tela.
- Cards de produto com imagem 1:1, título (2 linhas com ellipsis), preço, rating (estrelas), tag ("Novo"/"Promo") e botões com variantes (solid, outline, ghost).
- Estados obrigatórios: Hover, Focus visível, Disabled, Loading com Skeleton.
- Dark mode aplicado a todas as versões.
- Acessibilidade (navegação por teclado, contraste de cores).
- Animações/transições suaves.

## 📁 Estrutura do Projeto

A estrutura geral do projeto é a seguinte:

mini-loja-react/
├── node_modules/
├── public/
│ └── vite.svg
├── src/
│ ├── 01-css-global/
│ │ ├── App.jsx
│ │ ├── Navbar.jsx
│ │ ├── ProductGrid.jsx
│ │ ├── ProductCard.jsx
│ │ ├── Button.jsx
│ │ ├── Skeleton.jsx
│ │ └── index.css
│ ├── 02-css-modules/
│ │ ├── App.jsx
│ │ ├── Navbar.jsx
│ │ ├── ProductGrid.jsx
│ │ ├── ProductCard.jsx
│ │ ├── Button.jsx
│ │ ├── Skeleton.jsx
│ │ └── App.module.css
│ ├── 03-tailwind/
│ │ ├── App.jsx
│ │ ├── Navbar.jsx
│ │ ├── ProductGrid.jsx
│ │ ├── ProductCard.jsx
│ │ ├── Button.jsx
│ │ ├── Skeleton.jsx
│ │ └── index.css
│ ├── 04-styled-components/
│ │ ├── components/
│ │ │ ├── Navbar/
│ │ │ │ ├── Navbar.jsx
│ │ │ │ └── Navbar.styles.js
│ │ │ ├── ProductCard/
│ │ │ │ ├── ProductCard.jsx
│ │ │ │ └── ProductCard.styles.js
│ │ │ ├── Button/
│ │ │ │ ├── Button.jsx
│ │ │ │ └── Button.styles.js
│ │ │ ├── Skeleton/
│ │ │ │ ├── Skeleton.jsx
│ │ │ │ └── Skeleton.styles.js
│ │ │ └── ProductGrid/
│ │ │ ├── ProductGrid.jsx
│ │ │ └── ProductGrid.styles.js
│ │ ├── themes/
│ │ │ └── index.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── shared/
│ │ ├── data.js
│ │ └── utils.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
├── vite.config.css-global.js
├── vite.config.css-modules.js
├── vite.config.tailwind.js
├── vite.config.styled-components.js
├── tailwind.config.js
├── postcss.config.js
└── README.md

## 🚀 Como Rodar o Projeto

### 1. Pré-requisitos

- **Node.js** (versão 18 ou superior recomendada, mas 20.19.0 ou 22.12.0+ é ideal para versões recentes do Vite)
- **npm** (geralmente vem com o Node.js)

### 2. Instalação

Clone o repositório e instale as dependências:

```bash
git clone <URL_DO_SEU_REPOSITORIO> mini-loja-react
cd mini-loja-react
npm install
```

## 🚀 3. Executando uma Versão Específica

O projeto está configurado para rodar cada versão de estilização com um comando `npm run` distinto, utilizando arquivos de configuração específicos do Vite.

- **Rodar a versão CSS Global:**
  ```bash
  npm run dev:css-global
  ```
- **Rodar a versão CSS Modules:**
  ```bash
  npm run dev:css-modules
  ```
- **Rodar a versão Tailwind CSS:**
  ```bash
  npm run dev:tailwind
  ```
- **Rodar a versão Styled-components:**
  ```bash
  npm run dev:styled
  ```

Após executar um dos comandos acima, abra seu navegador e acesse `http://localhost:5173` para visualizar a aplicação correspondente.

## 📜 4. Scripts Disponíveis (no `package.json`)

```json
{
  "scripts": {
    "dev": "vite",
    "dev:css-global": "vite --config vite.config.css-global.js",
    "dev:css-modules": "vite --config vite.config.css-modules.js",
    "dev:tailwind": "vite --config vite.config.tailwind.js",
    "dev:styled": "vite --config vite.config.styled-components.js",
    "build": "vite build",
    "build:css-global": "vite build --config vite.config.css-global.js",
    "build:css-modules": "vite build --config vite.config.css-modules.js",
    "build:tailwind": "vite build --config vite.config.tailwind.js",
    "build:styled": "vite build --config vite.config.styled-components.js",
    "preview": "vite preview"
  }
}
```
