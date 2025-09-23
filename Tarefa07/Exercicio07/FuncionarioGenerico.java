public class FuncionarioGenerico implements IIdentificavel<String> {
    private final String id;
    private final String nome;

    public FuncionarioGenerico(String id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    @Override
    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String toString() {
        return "FuncionarioGenerico{" +
                "id='" + id + '\'' +
                ", nome='" + nome + '\'' +
                '}';
    }
}