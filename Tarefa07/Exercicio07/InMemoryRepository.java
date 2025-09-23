import java.util.*;

public class InMemoryRepository<T extends IIdentificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> dados = new HashMap<>();

    @Override
    public void salvar(T entidade) {
        dados.put(entidade.getId(), entidade);
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        return Optional.ofNullable(dados.get(id));
    }

    @Override
    public List<T> listarTodos() {
        return Collections.unmodifiableList(new ArrayList<>(dados.values()));
    }

    @Override
    public void remover(ID id) {
        if (!dados.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("Entidade com ID " + id + " não encontrada.");
        }
        dados.remove(id);
    }
}
