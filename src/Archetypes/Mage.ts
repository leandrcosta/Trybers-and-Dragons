import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType; // Faznedo uso da interface energyType
  public static numberOfInstances = 0; // iniciando o valor em 0

  constructor(name:string) {
    super(name);

    this._energyType = 'mana'; // usando um dos dois types da interface energyType
    Mage.numberOfInstances += 1; // Cada vez que uma instancia for criada acrescentaa +1
  }

  static createdArchetypeInstances() { // Retorna o numero atual de Archetype criados
    return this.numberOfInstances;
  } 

  get energyType(): EnergyType {
    return this._energyType;
  }
}
