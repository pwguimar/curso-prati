# Tarefa 01 - Exercícios de JavaScript

Este repositório reúne as soluções dos 15 exercícios da **Tarefa 01** do curso +Prati a ser entregue até 18/05/2025.

## 📁 Estrutura do Projeto

A pasta principal do projeto está organizada da seguinte forma:
```
curso-prati/
└── tarefa01/
    ├── algoritmos/  // Scripts JS com as soluções (ex01.js, ex02.js, ...)
    ├── enunciados.md // Enunciados dos exercícios
    └── README.md // Este arquivo
```

## 📋 Requisitos

Para executar os exercícios, você precisará ter instalado:

- [Node.js](https://nodejs.org/ ) (para executar os algoritmos — recomenda-se a versão LTS)
- Módulo [`prompt-sync`](https://www.npmjs.com/package/prompt-sync ) (para entrada via terminal)

## 🚀 Instruções para Execução

### Para usuários de Git/GitHub:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pwguimar/curso-prati.git 
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd curso-prati/tarefa01
   ```
3. **Instale o Node.js (se ainda não tiver):** se você ainda não tem o Node.js instalado, baixe e instale a versão LTS mais recente (vide acima).

4. **Instale a biblioteca prompt-sync:**
#### Opção 1: Instalação global (recomendado se for usar em outros projetos)
```bash
npm install -g prompt-sync
```
#### Opção 2: Instalação local (apenas para este projeto)
```bash
npm install prompt-sync
```
5. **Execute qualquer exercício:**
##### Se os arquivos estiverem na pasta algoritmos:
```bash
node algoritmos/ex01.js
```
##### Substitua ex01.js pelo exercício desejado (ex02.js, ex03.js, etc.)
```bash
node algoritmos/ex02.js
node algoritmos/ex03.js
...
node algoritmos/ex15.js
```

## 📝 Sobre os Exercícios
- Cada arquivo .js é independente e contém a solução para um exercício específico.
- Os enunciados completos estão disponíveis no arquivo enunciados.md .

## ⚙️ Detalhes Técnicos
- Todos os exercícios foram desenvolvidos com JavaScript puro.
- Utilizamos a biblioteca prompt-sync para permitir entrada de dados via console.
- Os exercícios foram testados com Node.js versão 14.x e superiores .
