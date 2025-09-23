
// Exercicio06/ItemCarrinho.java
import java.math.BigDecimal;
import java.util.Objects;

public class ItemCarrinho {
    private final ProdutoCarrinho produto;
    private final int quantidade;

    public ItemCarrinho(ProdutoCarrinho produto, int quantidade) {
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que 0.");
        }
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public ProdutoCarrinho getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Dinheiro getSubtotal() {
        BigDecimal valor = produto.getPrecoUnitario().getValor().multiply(new BigDecimal(quantidade));
        return new Dinheiro(valor, produto.getPrecoUnitario().getMoeda());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        ItemCarrinho that = (ItemCarrinho) o;
        return quantidade == that.quantidade && Objects.equals(produto, that.produto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(produto, quantidade);
    }

    // Adicione este método toString()
    @Override
    public String toString() {
        return "ItemCarrinho{" +
                "produto=" + produto.getNome() + // ou produto.toString() se ProdutoCarrinho tiver um toString decente
                ", quantidade=" + quantidade +
                ", subtotal=" + getSubtotal() +
                '}';
    }
}
