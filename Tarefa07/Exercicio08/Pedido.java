import java.math.BigDecimal;

public class Pedido {
    private String cepDestino;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(String cepDestino, CalculadoraFrete estrategiaFrete) {
        if (!cepDestino.matches("\\d{8}")) { // Validação simplificada
            throw new CepInvalidoException("CEP inválido: " + cepDestino);
        }
        this.cepDestino = cepDestino;
        this.estrategiaFrete = estrategiaFrete;
    }

    public void setEstrategiaFrete(CalculadoraFrete novaEstrategia) {
        this.estrategiaFrete = novaEstrategia;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }

    public String getCepDestino() {
        return cepDestino;
    }
}
