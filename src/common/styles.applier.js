/**
 * Applies the format and visual styles to the Excel table
 * @param {*} wb - refers to the workbook generated in the main (index.js)
 * @param {*} ws - refers to the worksheet generated in the main (index.js)
 */
export default function stylesApplier(wb, ws) {
  console.log('Applying HEADER TABLE and COLUMN names and styles...')

  ws.column(3).setWidth(13)

  const TITLE_COLUMN_NAMES = ['Name', 'Capital', 'Area', 'Currencies']

  const HEADER = () => {
    const HEADER_STYLE = wb.createStyle({
      font: {
        color: '#4F4F4F',
        size: 16,
        bold: true
      },
      alignment: {
        horizontal: 'center',
        vertical: 'center'
      }
    })

    ws.cell(1, 1, 1, 4, true).string('Countries List').style(HEADER_STYLE)
  }

  HEADER()

  const TITLE = () => {
    const TITLE_STYLE = wb.createStyle({
      font: {
        color: '#808080',
        size: 12,
        bold: true
      }
    })

    let titleColumnIndex = 1
    TITLE_COLUMN_NAMES.forEach(heading => {
      ws.cell(2, titleColumnIndex++)
        .string(heading)
        .style(TITLE_STYLE)
    })
  }

  TITLE()

  console.log('Styles applied.')
}
