public class ProdutoGenerico implements IIdentificavel<Long> {
    private final Long id;
    private final String nome;

    public ProdutoGenerico(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    @Override
    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "ProdutoGenerico{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }
}
