import { COUNTRIES } from './countries.getter.js'

/**
 * Generates an Excel table containing the data
 * @param {*} wb - refers to the workbook generated in the main (index.js)
 * @param {*} ws - refers to the worksheet generated in the main (index.js)
 */
export default function tableGenerator(wb, ws) {
  let rowColumnName, rowColumnCapital, rowColumnArea, rowColumnCurrencies
  rowColumnName = rowColumnCapital = rowColumnArea = rowColumnCurrencies = 3

  const AREA_FORMAT = wb.createStyle({
    numberFormat: '#,##0.00; -#,##0.00; -'
  })

  const DATA = COUNTRIES.sort(new Intl.Collator('de').compare)

  DATA.forEach(countryArray => {
    const NAME = countryArray[0]
    const CAPITAL = countryArray[1]
    const AREA = Number(countryArray[2])
    const CURRENCIES = countryArray[3]

    ws.cell(rowColumnName++, 1).string(`${NAME}`)
    ws.cell(rowColumnCapital++, 2).string(`${CAPITAL}`)
    ws.cell(rowColumnArea++, 3)
      .number(AREA)
      .style(AREA_FORMAT)
    ws.cell(rowColumnCurrencies++, 4).string(`${CURRENCIES}`)
  })

  console.log(DATA)

  wb.write('CountriesList.xlsx')
}
