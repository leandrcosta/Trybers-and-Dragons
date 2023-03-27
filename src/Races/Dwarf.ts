import Race from './Race';
// https://www.youtube.com/watch?v=ld4QMSgfAXc
export default class Dwarf extends Race { // Dwarf herda alguns "comportamentos" d Race
  public maxLifePoints: number; // Pontos maximos de vida
  public static numberOfInstances = 0; // Numero de instancias( iniciei com zero)

  constructor(name: string, dexterity: number) {
    super(name, dexterity); // argumentos herdados da class pai Race

    this.maxLifePoints = 80; // Defini o numero maximo de vidas em 80 points
    Dwarf.numberOfInstances += 1; // incrementa a cada vez que uma instancia for criada
  }

  static createdRacesInstances() { // responsavel por mostrar o numero atual de instancias
    return this.numberOfInstances;
  }
}