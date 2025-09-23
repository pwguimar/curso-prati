import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 1: Encapsulamento ---");

        // 1. Criando instâncias válidas
        try {
            Produto p1 = new Produto("Caneta", new BigDecimal("1.50"), 100);
            System.out.println("Produto inicial: " + p1);

            Produto p2 = new Produto("Lápis", new BigDecimal("0.80"), 200);
            System.out.println("Produto 2: " + p2);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        // 2. Alterando valores válidos
        try {
            Produto p3 = new Produto("Caderno", new BigDecimal("10.00"), 50);
            System.out.println("Antes da alteração: " + p3);

            p3.setPreco(new BigDecimal("9.50"));
            p3.setQuantidadeEmEstoque(55);
            System.out.println("Depois da alteração: " + p3);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }

        // 3. Tentativas de atribuições inválidas
        System.out.println("\n--- Testando Atribuições Inválidas ---");

        // Nome nulo
        try {
            Produto p = new Produto(null, new BigDecimal("5.00"), 10);
        } catch (IllegalArgumentException e) {
            System.out.println("Nome nulo: " + e.getMessage());
        }

        // Nome vazio
        try {
            Produto p = new Produto("   ", new BigDecimal("5.00"), 10);
        } catch (IllegalArgumentException e) {
            System.out.println("Nome vazio: " + e.getMessage());
        }

        // Preço negativo
        try {
            Produto p = new Produto("Produto Inválido", new BigDecimal("-1.00"), 10);
        } catch (IllegalArgumentException e) {
            System.out.println("Preço negativo: " + e.getMessage());
        }

        // Estoque negativo
        try {
            Produto p = new Produto("Produto Inválido", new BigDecimal("1.00"), -10);
        } catch (IllegalArgumentException e) {
            System.out.println("Estoque negativo: " + e.getMessage());
        }
    }
}
