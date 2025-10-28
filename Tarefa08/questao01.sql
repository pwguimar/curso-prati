-- Questão 1: Listagem do cardápio ordenada por nome do café
SELECT 
    nome_cafe,
    descricao,
    preco_unitario
FROM cardapio
ORDER BY nome_cafe;