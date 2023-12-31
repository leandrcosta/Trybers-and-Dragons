import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints:number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10); // valor aleatório de no mínimo 1 e no máximo 10 pontos
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2); // metade do maxLifePoints da raça instanciada
    this._lifePoints = this._maxLifePoints; // mesmo valor de maxLifePoints da classe
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, // mesmo valor do arquétipo instanciado;
      amount: getRandomInt(1, 10) }; // valor aleatório de no mínimo 1 e no máximo 10 pontos.
  }

  attack(enemy: SimpleFighter): void { // ok
    enemy.receiveDamage(this._strength);
  }

  special?(enemy: Fighter): void {
    const appeal = this._strength * 2;
    enemy.receiveDamage(appeal);
  }

  levelUp(): void {
    this._energy.amount = 10;
    this._maxLifePoints += getRandomInt(1, 10); // sempre que o metodo for chamado incfrementa +1
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage >= 0) {
      this._lifePoints -= 1;
    }
    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }
}