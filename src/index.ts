import { TYPE_VEHICLE } from "./types-vehicle";
import MotoCycle from "./vehicles/moto-cycle";
import Car from "./vehicles/car";
import CreditCard from "./credit-card";
import DebitCard from "./debit-card";
import NubankRewards from "./nubank-rewards";

const type = TYPE_VEHICLE.CAR;
let vehicle;

if (type === TYPE_VEHICLE.CAR) {
  vehicle = new Car('Amarelo', 2022, 2.0, 4, 4);
} else if (type === TYPE_VEHICLE.MOTO_CYCLE) {
  vehicle = new MotoCycle('Amarelo', 2022, 2.0);
}

console.log("<== ============================= ==>");

const card = new CreditCard();
card.validate()
card.collectPayment()

console.log("<== ============================= ==>");
const debit_card = new DebitCard();
debit_card.validate()
debit_card.collectPayment()

console.log("<== ============================= ==>");
const nubank = new NubankRewards();
nubank.validate()
nubank.collectPayment()