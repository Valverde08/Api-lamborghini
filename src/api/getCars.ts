import axios from "axios";
import { carModel } from "../Components/CardView/Props";
import { CAR_API_JSON } from "../Constants/Car";

interface ApiResponse {
  cars: carModel[];
}
export const fetchGetCarData = async (
  id: number,
  setCarDataCallback: React.Dispatch<React.SetStateAction<carModel | null>>,
) => {
  try {
    const response = await axios.get<ApiResponse>(CAR_API_JSON);

    // LOG 1: Verifique o que a API está retornando de fato
    console.log("Dados da API:", response.data.cars);
    // LOG 2: Verifique o tipo do ID buscado e o ID recebido
    console.log("Buscando ID:", id, "Tipo:", typeof id);

    const carData =
      response.data.cars.find((car) => {
        car.id === id;
      }) || null;

    setCarDataCallback(carData);
  } catch (error) {
    console.log("erro ao Buscar dados da Api", error);
  }
};
