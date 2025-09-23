import java.math.BigDecimal;

public class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    @Override
    public BigDecimal calcularBonus() {
        return this.salario.multiply(new BigDecimal("0.10")); // 10%
    }
}
