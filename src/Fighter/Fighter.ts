import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';
// https://www.tektutorialshub.com/typescript/optional-properties-in-typescript/
export default interface Fighter extends SimpleFighter {
  lifePoints: number; // atributo ja tem em simpleFighter
  strength: number; // atributo ja tem em simpleFighter
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number; // reaproveitando o metodo herdado de SimpleFighter
}
