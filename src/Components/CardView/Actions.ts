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
  index: number,
  setIdexNumber: React.Dispatch<React.SetStateAction<number>>,
) => {
  if (index === 1) {
    setIdexNumber(5);
  } else {
    let indexSuporte: number = index - 1;
    setIdexNumber(indexSuporte);
  }
};
