import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class Carrinho {
    private final List<ItemCarrinho> itens;

    private Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(new ArrayList<>(itens));
    }

    public static Carrinho novoCarrinho() {
        return new Carrinho(new ArrayList<>());
    }

    public Carrinho adicionarItem(ItemCarrinho item) {
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        novosItens.add(item);
        return new Carrinho(novosItens);
    }

    public Carrinho removerItem(ProdutoCarrinho produto) {
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        novosItens.removeIf(item -> item.getProduto().equals(produto));
        return new Carrinho(novosItens);
    }

    public Carrinho aplicarCupom(BigDecimal percentual) {
        if (percentual.compareTo(new BigDecimal("30")) > 0) {
            throw new IllegalArgumentException("Cupom não pode ser maior que 30%.");
        }
        // Neste exemplo, aplicar cupom não altera o objeto Carrinho diretamente,
        // mas sim o cálculo do total. Para alterar o estado, seria necessário
        // um atributo adicional no Carrinho para o desconto ou uma classe
        // intermediária.
        // A operação aqui é simbólica, demonstrando a imutabilidade do *objeto*
        // Carrinho.
        System.out.println("Cupom de " + percentual + "% aplicado (simulado).");
        return this;
    }

    public Dinheiro getTotal() {
        BigDecimal total = this.itens.stream()
                .map(ItemCarrinho::getSubtotal)
                .map(Dinheiro::getValor)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        return new Dinheiro(total, Moeda.REAL);
    }

    public List<ItemCarrinho> getItens() {
        return this.itens;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder("Carrinho{\n");
        for (ItemCarrinho item : itens) {
            sb.append("  ").append(item).append("\n");
        }
        sb.append("  Total: ").append(getTotal()).append("\n}");
        return sb.toString();
    }
}
