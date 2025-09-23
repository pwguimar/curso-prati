import java.util.List;
import java.util.Optional;

public interface IRepository<T extends IIdentificavel<ID>, ID> {
    void salvar(T entidade);

    Optional<T> buscarPorId(ID id);

    List<T> listarTodos();

    void remover(ID id);
}
