import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 6: Imutabilidade ---");

        ProdutoCarrinho prod1 = new ProdutoCarrinho("Livro", new Dinheiro(new BigDecimal("50.00"), Moeda.REAL));
        ProdutoCarrinho prod2 = new ProdutoCarrinho("Caneta", new Dinheiro(new BigDecimal("2.50"), Moeda.REAL));

        Carrinho carrinho = Carrinho.novoCarrinho();
        System.out.println("Carrinho vazio: " + carrinho);

        carrinho = carrinho.adicionarItem(new ItemCarrinho(prod1, 1));
        carrinho = carrinho.adicionarItem(new ItemCarrinho(prod2, 3));
        System.out.println("Carrinho com itens: " + carrinho);

        carrinho = carrinho.aplicarCupom(new BigDecimal("10"));
        System.out.println("Total após cupom: " + carrinho.getTotal());
    }
}
