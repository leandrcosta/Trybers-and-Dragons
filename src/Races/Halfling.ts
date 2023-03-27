import Race from './Race';

export default class Halfling extends Race { // Dwarf herda alguns "comportamentos" d Race
  public maxLifePoints: number; // Pontos maximos de vida
  public static numberOfInstances = 0; // Numero de instancias( iniciei com zero)

  constructor(name: string, dexterity: number) {
    super(name, dexterity); // argumentos herdados da class pai Race

    this.maxLifePoints = 60; // Defini o numero maximo de vidas em 80 points
    Halfling.numberOfInstances += 1; // incrementa a cada vez que uma instancia for criada
  }

  static createdRacesInstances() { // responsavel por mostrar o numero atual de instancias
    return this.numberOfInstances;
  }
}