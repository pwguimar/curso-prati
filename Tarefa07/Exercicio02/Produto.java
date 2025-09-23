import java.math.BigDecimal;
import java.math.RoundingMode;

public class Produto {
    private String nome;
    private BigDecimal preco;
    private int quantidadeEmEstoque;

    public Produto(String nome, BigDecimal preco, int quantidadeEmEstoque) {
        setNome(nome);
        setPreco(preco);
        setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    // Getters
    public String getNome() {
        return nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public int getQuantidadeEmEstoque() {
        return quantidadeEmEstoque;
    }

    // Setters com validação
    public void setNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            throw new IllegalArgumentException("Nome não pode ser nulo ou vazio.");
        }
        this.nome = nome;
    }

    public void setPreco(BigDecimal preco) {
        if (preco == null || preco.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Preço não pode ser nulo ou negativo.");
        }
        this.preco = preco.setScale(2, RoundingMode.HALF_UP);
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        if (quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("Quantidade em estoque não pode ser negativa.");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    // Novo método do Exercício 2
    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0.0 || porcentagem > 50.0) {
            throw new IllegalArgumentException("Desconto deve estar entre 0 e 50 (inclusive).");
        }
        BigDecimal descontoDecimal = new BigDecimal(porcentagem / 100.0);
        BigDecimal novoPreco = this.preco.multiply(BigDecimal.ONE.subtract(descontoDecimal));
        this.preco = novoPreco.setScale(2, RoundingMode.HALF_UP);
    }

    @Override
    public String toString() {
        return "Produto{" +
                "nome='" + nome + '\'' +
                ", preco=" + preco +
                ", quantidadeEmEstoque=" + quantidadeEmEstoque +
                '}';
    }
}
