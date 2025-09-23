import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("--- Demonstração Exercício 4: Polimorfismo ---");

        List<IMeioTransporte> transportes = new ArrayList<>();
        transportes.add(new Carro());
        transportes.add(new Bicicleta());
        transportes.add(new Trem());

        for (IMeioTransporte t : transportes) {
            System.out.println("Tipo: " + t.getClass().getSimpleName());
            for (int i = 0; i < 3; i++)
                t.acelerar();
            System.out.println("  Velocidade após acelerar 3x: " + t.getVelocidade());
            t.frear();
            System.out.println("  Velocidade após frear 1x: " + t.getVelocidade());
        }
    }
}
