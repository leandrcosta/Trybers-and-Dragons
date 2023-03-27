import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name:string, special = 0, cost = 0) {
    this._name = name; // tipo string
    this._special = special; // valor inicial 0
    this._cost = cost; //  valor inicial 0
  }

  public get name(): string { // leitura e nao pode ser alterado
    return this._name;
  }

  public get special(): number { // leitura e nao pode ser alterado
    return this._special;
  }

  public get cost(): number { // leitura e nao pode ser alterado
    return this._cost;
  }

  public static createdArchetypeInstances(): number { // Metodo estatico
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType; // getter abstrato chamado energyType que retorna uma EnergyType
}
