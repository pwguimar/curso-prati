import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 3: Herança ---");

        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(new Gerente("Alice", new BigDecimal("5000")));
        funcionarios.add(new Desenvolvedor("Bob", new BigDecimal("4000")));

        for (Funcionario f : funcionarios) {
            System.out.println(f.getNome() + " - Bônus: R$" + f.calcularBonus());
        }
    }
}
