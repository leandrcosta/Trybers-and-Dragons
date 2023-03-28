import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  public static numberOfInstances = 0;

  constructor(name:string) {
    super(name);

    this._energyType = 'mana';
    Necromancer.numberOfInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberOfInstances;
  } 

  get energyType(): EnergyType {
    return this._energyType;
  }
}