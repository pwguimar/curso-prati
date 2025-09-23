import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 2: Desconto ---");

        Produto p1 = new Produto("Camisa", new BigDecimal("80.00"), 30);
        System.out.println("Preço antes do desconto: " + p1.getPreco());

        p1.aplicarDesconto(10.0);
        System.out.println("Preço após desconto de 10%: " + p1.getPreco());

        // Tentativa de desconto inválido
        try {
            p1.aplicarDesconto(60.0); // > 50%
        } catch (IllegalArgumentException e) {
            System.out.println("Erro no desconto: " + e.getMessage());
        }

        try {
            p1.aplicarDesconto(-5.0); // < 0%
        } catch (IllegalArgumentException e) {
            System.out.println("Erro no desconto: " + e.getMessage());
        }
    }
}
