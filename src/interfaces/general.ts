export interface Currency {
  currency: string;
  code: string;
  mid: number;
}

export interface Rate extends Currency {
  effectiveDate: string;
}

export interface CurrencyTable {
  table: string;
  no: string;
  rates: Rate[];
}

export interface CurrencyDetailsResponse {
  table: string;
  currency: string;
  code: string;
  rates: Rate[];
}
