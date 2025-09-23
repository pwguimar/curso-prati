import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract boolean validarPagamento();

    public abstract void processarPagamento(BigDecimal valor);
}