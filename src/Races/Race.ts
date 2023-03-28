export default abstract class Race { // Nome Race, class abstrata
  private readonly _name: string; // https://www.youtube.com/watch?v=Mg6FFPbG2SA
  private readonly _dexterity: number; // privado, apenas leitura
  // private static _counterRacesInstances = 0;

  constructor(name: string, dexterity: number) { // parametros de constructor
    this._name = name;
    this._dexterity = dexterity;
    // Race._counterRacesInstances += 1;
  }

  public get name(): string { // leitura e não pode ser alterado
    return this._name;
  }

  public get dexterity(): number { // leitura e nao pode ser alterado
    return this._dexterity;
  }

  public static createdRacesInstances(): number { // metodo statico e retorna um erro
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}