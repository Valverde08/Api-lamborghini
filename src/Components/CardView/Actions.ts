import { fetchGetCarData } from "../../api/getCars";
import { carModel } from "./Props";

export const handlePreviousItem = async () => {};

export const handleNextItem = async () => {};

//Faz uma requisição API
export const loadingCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<carModel | null>>,
) => {
  const response = await fetchGetCarData(id);
  try {
    if (response) {
      console.log("consegui pegar os dados");
      return setCarData(response);
    }
  } catch (error) {
    console.log("erro ao buscar da api", error);
    setCarData(null);
  }
};

export const loadingPreviousCar = async (
  carData: carModel | null,
  setCarData: React.Dispatch<React.SetStateAction<carModel | null>>,
) => {
  let response = null;
  try {
    if (carData && carData.id > 1) {
      response = await fetchGetCarData(carData.id - 1);
    }

    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Não foi possível buscar os dados", error);
    setCarData(null);
  }
};

export const loadingNextCar = async (
  carData: carModel | null,
  setCarData: React.Dispatch<React.SetStateAction<carModel | null>>,
) => {
  let response = null;
  try {
    if (carData && carData.id < 10) {
      response = await fetchGetCarData(carData.id + 1);
    }

    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Não foi possível buscar os dados", error);
    setCarData(null);
  }
};
