public class Bicicleta implements IMeioTransporte {
    private int velocidade;
    private static final int LIMITE_VELOCIDADE = 30;

    public Bicicleta() {
        this.velocidade = 0;
    }

    @Override
    public void acelerar() {
        if (velocidade < LIMITE_VELOCIDADE) {
            velocidade += 5;
            if (velocidade > LIMITE_VELOCIDADE)
                velocidade = LIMITE_VELOCIDADE;
        } else {
            System.out.println("Bicicleta atingiu o limite de velocidade.");
        }
    }

    @Override
    public void frear() {
        velocidade -= 3;
        if (velocidade < 0)
            velocidade = 0;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
