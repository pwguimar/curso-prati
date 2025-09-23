import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public boolean validarPagamento() {
        return chavePix != null
                && (chavePix.contains("@") || chavePix.matches("\\d{11}") || chavePix.matches("\\d{14}"));
    }

    @Override
    public void processarPagamento(BigDecimal valor) {
        if (!validarPagamento()) {
            throw new PagamentoInvalidoException("Chave Pix inválida.");
        }
        System.out.println("Pagamento de R$" + valor + " processado via PIX.");
    }
}
