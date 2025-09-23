public class Trem implements IMeioTransporte {
    private int velocidade;
    private static final int LIMITE_VELOCIDADE = 300;

    public Trem() {
        this.velocidade = 0;
    }

    @Override
    public void acelerar() {
        if (velocidade < LIMITE_VELOCIDADE) {
            velocidade += 50;
            if (velocidade > LIMITE_VELOCIDADE)
                velocidade = LIMITE_VELOCIDADE;
        } else {
            System.out.println("Trem atingiu o limite de velocidade.");
        }
    }

    @Override
    public void frear() {
        velocidade -= 25;
        if (velocidade < 0)
            velocidade = 0;
    }

    @Override
    public int getVelocidade() {
        return velocidade;
    }
}
