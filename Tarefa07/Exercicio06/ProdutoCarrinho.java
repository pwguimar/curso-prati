public class ProdutoCarrinho {
    private final String nome;
    private final Dinheiro precoUnitario;

    public ProdutoCarrinho(String nome, Dinheiro precoUnitario) {
        this.nome = nome;
        this.precoUnitario = precoUnitario;
    }

    public String getNome() {
        return nome;
    }

    public Dinheiro getPrecoUnitario() {
        return precoUnitario;
    }
}
