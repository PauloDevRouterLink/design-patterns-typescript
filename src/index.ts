import { TYPE_VEHICLE } from "./types-vehicle";
import MotoCycle from "./vehicles/moto-cycle";
import Car from "./vehicles/car";

const type = TYPE_VEHICLE.CAR;
let vehicle;

if (type === TYPE_VEHICLE.CAR) {
  vehicle = new Car('Amarelo', 2022, 2.0, 4, 4);
} else if (type === TYPE_VEHICLE.MOTO_CYCLE) {
  vehicle = new MotoCycle('Amarelo', 2022, 2.0);
}