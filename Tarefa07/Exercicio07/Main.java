import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 7: Generics ---");

        IRepository<ProdutoGenerico, Long> repoProdutos = new InMemoryRepository<>();
        IRepository<FuncionarioGenerico, String> repoFuncionarios = new InMemoryRepository<>();

        ProdutoGenerico p1 = new ProdutoGenerico(1L, "Teclado");
        FuncionarioGenerico f1 = new FuncionarioGenerico("F001", "Carlos");

        repoProdutos.salvar(p1);
        repoFuncionarios.salvar(f1);

        System.out.println("Produtos: " + repoProdutos.listarTodos());
        System.out.println("Funcionários: " + repoFuncionarios.listarTodos());

        System.out.println("Buscar produto 1: " + repoProdutos.buscarPorId(1L));
        System.out.println("Buscar funcionário F001: " + repoFuncionarios.buscarPorId("F001"));

        repoProdutos.remover(1L);
        System.out.println("Produtos após remoção: " + repoProdutos.listarTodos());

        try {
            repoProdutos.remover(99L); // ID inexistente
        } catch (EntidadeNaoEncontradaException e) {
            System.out.println("Erro ao remover: " + e.getMessage());
        }
    }
}
