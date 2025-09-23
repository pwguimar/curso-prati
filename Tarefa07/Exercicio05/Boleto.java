import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public boolean validarPagamento() {
        return codigoBarras != null && codigoBarras.matches("\\d{44}");
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        if (!validarPagamento()) {
            throw new PagamentoInvalidoException("Formato do boleto inválido.");
        }
        System.out.println("Pagamento de R$" + valor + " processado via Boleto.");
    }
}
