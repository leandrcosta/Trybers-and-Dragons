import Race from './Race';
// https://www.youtube.com/watch?v=ld4QMSgfAXc
export default class Dwarf extends Race { // Dwarf herda alguns "comportamentos" d Race
  public _maxLifePoints = 74; // Pontos maximos de vida
  public static numberOfInstances = 0; // Numero de instancias( iniciei com zero)

  constructor(name: string, dexterity: number) {
    super(name, dexterity); // argumentos herdados da class pai Race

    Dwarf.numberOfInstances += 1; // incrementa a cada vez que uma instancia for criada
  }

  get maxLifePoints(): number { // Usando o metodo herdado de Race que tem o valor maxLife
    return this._maxLifePoints;
  }

  static createdRacesInstances() { // responsavel por mostrar o numero atual de instancias
    return this.numberOfInstances;
  }
} // Implementar o maxLifePoints() : number { return this.maxLifePoints}
