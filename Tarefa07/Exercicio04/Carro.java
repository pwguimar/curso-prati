public class Carro implements IMeioTransporte {
    private int velocidade;
    private static final int LIMITE_VELOCIDADE = 200;

    public Carro() {
        this.velocidade = 0;
    }

    @Override
    public void acelerar() {
        if (velocidade < LIMITE_VELOCIDADE) {
            velocidade += 20;
            if (velocidade > LIMITE_VELOCIDADE)
                velocidade = LIMITE_VELOCIDADE;
        } else {
            System.out.println("Carro atingiu o limite de velocidade.");
        }
    }

    @Override
    public void frear() {
        velocidade -= 10;
        if (velocidade < 0)
            velocidade = 0;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
