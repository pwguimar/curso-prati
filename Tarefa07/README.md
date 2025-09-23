# Lista de Tarefas 7 - Java OO

Este repositório contém a implementação dos 8 exercícios propostos na "Lista de Tarefas 7 - Java OO", demonstrando conceitos fundamentais de Programação Orientada a Objetos em Java.

## Tecnologias Necessárias

- **Java Development Kit (JDK):** Versão 11 ou superior.
- **Sistema Operacional:** Qualquer sistema operacional que suporte o JDK e um terminal (Windows, Linux, macOS).
- **Editor de Texto ou IDE (Opcional para execução via terminal):** Como o VSCode foi mencionado, as extensões Java são úteis, mas a compilação e execução são feitas via linha de comando conforme descrito abaixo.

## Estrutura do Projeto

O projeto está organizado com uma pasta para cada exercício, contendo os arquivos `.java` necessários.

```bash
Tarefa07/
├── Exercicio01/
│ ├── Produto.java
│ └── Main.java
├── Exercicio02/
│ ├── Produto.java
│ └── Main.java
├── Exercicio03/
│ ├── Funcionario.java
│ ├── Gerente.java
│ ├── Desenvolvedor.java
│ └── Main.java
├── Exercicio04/
│ ├── IMeioTransporte.java
│ ├── Carro.java
│ ├── Bicicleta.java
│ ├── Trem.java
│ └── Main.java
├── Exercicio05/
│ ├── FormaPagamento.java
│ ├── PagamentoInvalidoException.java
│ ├── CartaoCredito.java
│ ├── Boleto.java
│ ├── Pix.java
│ └── Main.java
├── Exercicio06/
│ ├── Moeda.java
│ ├── Dinheiro.java
│ ├── ProdutoCarrinho.java
│ ├── ItemCarrinho.java
│ ├── Carrinho.java
│ └── Main.java
├── Exercicio07/
│ ├── IIdentificavel.java
│ ├── EntidadeNaoEncontradaException.java
│ ├── IRepository.java
│ ├── InMemoryRepository.java
│ ├── ProdutoGenerico.java
│ ├── FuncionarioGenerico.java
│ └── Main.java
└── Exercicio08/
├── CalculadoraFrete.java
├── CepInvalidoException.java
├── Pedido.java
├── Sedex.java
├── Pac.java
├── RetiradaNaLoja.java
└── Main.java
```

## Como Executar os Exercícios

1.  **Clonar ou Baixar o Repositório:**

    - Se você clonou o repositório: `git clone <URL_DO_REPOSITORIO>`
    - Se baixou um arquivo ZIP, extraia-o em uma pasta local (por exemplo, `Tarefa07`).

2.  **Abrir o Terminal:**

    - Navegue até a pasta raiz do projeto (`Tarefa07`) usando o terminal do seu sistema operacional.

3.  **Compilar e Executar um Exercício Específico:**
    - **Navegue até o diretório do exercício desejado:**
      ```bash
      cd Exercicio01
      ```
      (ou `Exercicio02`, `Exercicio03`, etc.)
    - **Compile os arquivos `.java` dentro do diretório do exercício:**
      ```bash
      javac *.java
      ```
      Se não houver mensagens de erro, os arquivos `.class` serão gerados.
    - **Execute o programa:**
      ```bash
      java Main
      ```
    - **Volte para a pasta raiz (`Tarefa07`) para executar outro exercício:**
      ```bash
      cd ..
      ```
    - Repita os passos 3.1 a 3.4 para cada exercício que desejar rodar.

**Exemplo para rodar o Exercício 03:**

```bash
cd Exercicio03
javac *.java
java Main
cd ..
```
