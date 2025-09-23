import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 8: Strategy ---");

        // CEP válido
        Pedido pedido = new Pedido("12345678", new Sedex());
        System.out.println("Frete com Sedex: R$" + pedido.calcularFrete());

        // Troca estratégia
        pedido.setEstrategiaFrete(new Pac());
        System.out.println("Frete com Pac: R$" + pedido.calcularFrete());

        // Lambda para frete grátis acima de R$ 100 (simulado, valor fixo no pedido)
        CalculadoraFrete fretePromocional = (p) -> {
            BigDecimal valorPedido = new BigDecimal("150.00"); // Simula valor do pedido
            if (valorPedido.compareTo(new BigDecimal("100.00")) >= 0) {
                return BigDecimal.ZERO;
            } else {
                return new BigDecimal("10.00"); // Valor padrão
            }
        };
        pedido.setEstrategiaFrete(fretePromocional);
        System.out.println("Frete promocional (pedido > R$100): R$" + pedido.calcularFrete());

        // CEP inválido
        try {
            Pedido pedidoInvalido = new Pedido("12345", new RetiradaNaLoja()); // CEP inválido
        } catch (CepInvalidoException e) {
            System.out.println("Erro no CEP: " + e.getMessage());
        }
    }
}
