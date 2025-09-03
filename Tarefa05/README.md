# Movie App - TMDB API

Este projeto é uma aplicação web em React para buscar e visualizar informações de filmes utilizando a API do [The Movie Database (TMDB)](https://www.themoviedb.org/).

## Funcionalidades

*   Busca de filmes por título.
*   Paginação dos resultados.
*   Visualização de detalhes dos filmes (diretor, elenco, sinopse, avaliação).
*   Adicionar/Remover filmes aos favoritos.
*   Persistência da lista de favoritos no `localStorage` do navegador.

## Tecnologias Utilizadas

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [React Router](https://reactrouter.com/)
*   [Axios](https://axios-http.com/)

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

*   [Node.js](https://nodejs.org/) (versão 14 ou superior)
*   Um editor de código, como o [VSCode](https://code.visualstudio.com/)

Você também precisará de uma chave de API do TMDB. Para obtê-la:

1.  Crie uma conta em [https://www.themoviedb.org/](https://www.themoviedb.org/) (é gratuito).
2.  Vá para `Settings` > `API`.
3.  Clique em "Create" ou "Generate" para uma nova chave de API (v4 auth).
4.  Guarde essa chave para configurar o projeto.

## Como Rodar o Projeto

Siga os passos abaixo para clonar e executar o projeto localmente:

### 1. Clonar o Repositório

Abra seu terminal e execute o comando:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd movie-app
```

*(Substitua `<URL_DO_SEU_REPOSITORIO>` pela URL real do seu repositório Git. Se estiver executando localmente sem Git, certifique-se de que os arquivos do projeto estão na pasta `movie-app`)*

### 2. Instalar as Dependências

Dentro da pasta do projeto (`movie-app`), execute:

```bash
npm install
```

### 3. Configurar a Chave da API do TMDB

1.  Na **raiz** do projeto (na mesma pasta que `package.json`), crie um novo arquivo chamado `.env`.
2.  Abra o arquivo `.env` no seu editor de código.
3.  Adicione a seguinte linha, substituindo `sua_chave_real_aqui` pela sua chave de API do TMDB:
    ```
    VITE_TMDB_API_KEY=sua_chave_real_aqui
    ```
4.  **Importante:** O arquivo `.env` já está listado no `.gitignore` do projeto, o que impede que sua chave seja enviada acidentalmente para o GitHub.
5.  Salve o arquivo `.env`.

### 4. Iniciar o Servidor de Desenvolvimento

Ainda dentro da pasta do projeto, execute:

```bash
npm run dev
```

O script `dev` irá iniciar o servidor de desenvolvimento do Vite. Ele geralmente abre automaticamente o seu navegador padrão em `http://localhost:5173`. Se a porta 5173 estiver ocupada, o Vite irá perguntar se deseja usar outra porta.

### 5. Usar a Aplicação

*   Na página inicial, digite o nome de um filme no campo de busca.
*   Navegue pelos resultados usando os botões de paginação.
*   Clique em "Ver Detalhes" em um filme para ver mais informações.
*   Na página de detalhes, use o botão "Adicionar aos Favoritos" ou "Remover dos Favoritos".
*   Clique no link "Favoritos" no topo da página para ver sua lista de filmes favoritos.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

*   `npm run dev`: Inicia o servidor de desenvolvimento do Vite.
*   `npm run build`: Compila o aplicativo para produção na pasta `dist`.
*   `npm run preview`: Previsualiza a compilação de produção localmente, após rodar `npm run build`.
