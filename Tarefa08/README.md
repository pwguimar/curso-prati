# Atividade 08 – Cafeteria BomGosto

Esta atividade consiste no desenvolvimento de scripts SQL para atender às necessidades de análise de vendas da cafeteria **BomGosto**, conforme descrito na Atividade 08 do módulo.

## 📁 Estrutura do diretório

```bash
atividade08/
├── README.md
├── questao01.sql
├── questao02.sql
├── questao03.sql
├── questao04.sql
└── questao05.sql
```

## ▶️ Como testar

1. **Crie as tabelas** no seu SGBD (ex: SQLite, PostgreSQL, MySQL) com a seguinte estrutura:

```sql
CREATE TABLE cardapio (
    cod_cardapio INT PRIMARY KEY,
    nome_cafe VARCHAR(100) UNIQUE NOT NULL,
    descricao TEXT,
    preco_unitario DECIMAL(10,2) NOT NULL
);

CREATE TABLE comanda (
    cod_comanda INT PRIMARY KEY,
    data DATE NOT NULL,
    mesa INT NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE item_comanda (
    cod_comanda INT,
    cod_cardapio INT,
    quantidade INT NOT NULL CHECK (quantidade > 0),
    PRIMARY KEY (cod_comanda, cod_cardapio),
    FOREIGN KEY (cod_comanda) REFERENCES comanda(cod_comanda),
    FOREIGN KEY (cod_cardapio) REFERENCES cardapio(cod_cardapio)
);
```

2. **(Opcional)** Insira dados de exemplo para validar as consultas.

3. **Execute** cada script individualmente no seu cliente SQL. Exemplos:

```bash
# SQLite
sqlite3 bomgosto.db < questao01.sql

# PostgreSQL
psql -U usuario -d banco -f questao01.sql
```

Em editores gráficos (DBeaver, pgAdmin, MySQL Workbench etc.), basta abrir o arquivo .sql e executar.

Verifique se os resultados estão de acordo com os requisitos de cada questão.
