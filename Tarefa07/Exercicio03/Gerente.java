import java.math.BigDecimal;

public class Gerente extends Funcionario {
    public Gerente(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return this.salario.multiply(new BigDecimal("0.20")); // 20%
    }
}
