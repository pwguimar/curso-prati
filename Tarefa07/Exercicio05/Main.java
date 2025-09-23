import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 5: Abstração ---");

        List<FormaPagamento> formas = new ArrayList<>();
        formas.add(new CartaoCredito("1234567890123456", "123"));
        formas.add(new Boleto("12345678901234567890123456789012345678901234"));
        formas.add(new Pix("chave@exemplo.com"));

        BigDecimal valor = new BigDecimal("100.00");
        for (FormaPagamento fp : formas) {
            try {
                fp.processarPagamento(valor);
            } catch (PagamentoInvalidoException e) {
                System.out.println("Falha no pagamento: " + e.getMessage());
            }
        }

        // Tentativa com dados inválidos
        try {
            FormaPagamento invalido = new CartaoCredito("123", "12"); // Inválido
            invalido.processarPagamento(valor);
        } catch (PagamentoInvalidoException e) {
            System.out.println("Falha no pagamento: " + e.getMessage());
        }
    }
}
