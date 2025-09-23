import java.math.BigDecimal;

public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;
    private String cvv;

    public CartaoCredito(String numeroCartao, String cvv) {
        this.numeroCartao = numeroCartao;
        this.cvv = cvv;
    }

    @Override
    public boolean validarPagamento() {
        return numeroCartao != null && numeroCartao.matches("\\d{16}") &&
                cvv != null && cvv.matches("\\d{3}");
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        if (!validarPagamento()) {
            throw new PagamentoInvalidoException("Dados do cartão inválidos.");
        }
        System.out.println("Pagamento de R$" + valor + " processado via Cartão de Crédito.");
    }
}
