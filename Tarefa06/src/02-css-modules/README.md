# Versão 2: CSS Modules

Esta versão da Mini Loja utiliza CSS Modules para estilização.

- Estilos definidos em `App.module.css`.
- Classes CSS locais importadas como um objeto JavaScript (`import styles from './App.module.css'`).
- Aplicação das classes via `className={styles.nomeDaClasse}`.
- Tema claro/escuro gerenciado adicionando/removendo a classe `styles.darkTheme` ao `<body>`.
