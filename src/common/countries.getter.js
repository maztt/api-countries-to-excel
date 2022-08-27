import axios from 'axios'
export let COUNTRIES = [];

/**
 * Goes through the JSON and selects the data wanted and returns them in an array https://restcountries.com/v3.1/all
 */
export default async function countriesGetter() {
  const COUNTRIES_API = 'https://restcountries.com/v3.1/all'
  const RESPONSE = (await axios.get(COUNTRIES_API)).data

  COUNTRIES = RESPONSE.map(country => {
    const NAME = country.name.common;
    const CAPITAL = country.capital;
    const AREA = country.area;
    const CURRENCIES = country.currencies;

    return [
      `${NAME}`,
      (CAPITAL != null || CAPITAL != undefined ? `${CAPITAL}`: '-'),
      (AREA != null || AREA != undefined ? `${AREA}`: '-' ),
      (CURRENCIES != null || CURRENCIES != undefined ? `${Object.keys(CURRENCIES)}`: '-')
    ]
  })

}

