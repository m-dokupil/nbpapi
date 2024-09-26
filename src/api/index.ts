import axios from "axios";
import {
  CurrencyDetailsResponse,
  CurrencyTable,
  Rate,
} from "../interfaces/general";

const API_BASE_URL = "https://api.nbp.pl/api/exchangerates/tables/A/";

export const fetchCurrencyData = async (): Promise<Rate[]> => {
  try {
    const response = await axios.get<CurrencyTable[]>(
      `${API_BASE_URL}?format=json`
    );
    return response.data[0].rates;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchCurrencyDetails = async (
  currencyCode: string,
  startDate: string,
  endDate: string
): Promise<CurrencyDetailsResponse> => {
  try {
    const response = await axios.get<CurrencyDetailsResponse>(
      `https://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}/${startDate}/${endDate}/?format=json`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return {
      table: "",
      currency: "",
      code: "",
      rates: [],
    };
  }
};
