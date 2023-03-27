export type EnergyType = 'mana' | 'stamina'; // type so pode ter esses dois values

export default interface Energy { // type recebe dois valores e amount é tipo number
  type_: EnergyType;
  amount: number;
}
// https://www.youtube.com/watch?v=gEmE6EnnMN4&list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H&index=66