export default interface SimpleFighter {
  lifePoints: number;
  strength: number

  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): number;

}
// https://www.tektutorialshub.com/typescript/optional-properties-in-typescript/