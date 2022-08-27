import * as xl from 'excel4node'
import countriesGetter from './src/common/countries.getter.js'
import stylesApplier from './src/common/styles.applier.js'
import tableGenerator from './src/common/table.generator.js'

async function main() {
  let wb = new xl.Workbook()
  let ws = wb.addWorksheet('Countries List')

  await countriesGetter();
  stylesApplier(wb, ws)
  tableGenerator(wb, ws)
}

main()
