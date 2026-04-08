import axios from "axios";

import { CAR_API_JSON } from "../Constants/Car";
import { carModel } from "../Components/CardView/Props";

export interface ApiResponse {
  cars: carModel[];
}
export const fetchGetCarData = async (id: number) => {
  try {
    const response = await axios.get<ApiResponse>(CAR_API_JSON);

    const carData = response.data.cars.find(
      (car) => String(car.id) === String(id),
    );

    return carData || null;
  } catch (error) {
    console.log("erro ao Buscar dados da Api", error);
  }
};
