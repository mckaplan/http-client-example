export interface ContinentRes {
  success: boolean;
  result: Continent[];
}

export interface Continent {
  continent: string;
  totalCases: string;
  newCases: string;
  totalDeaths: string;
  totalRecovered: string;
  activeCases: string;
}
