const SPREADSHEET_ID = '1RD0iTWKn7IehtLZgjJVGXkfMZdamivKfHvr2yPI1z14'
const SHEET_NAME = 'Discovery Calls'

function doPost(e) {
  const sheet = getSheet()
  const data = JSON.parse(e.postData.contents)

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.email || '',
    data.company || '',
    data.service || '',
    data.referenceLabel || '',
    data.referenceUrl || '',
    data.submittedAt || '',
  ])

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}

function getSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  let sheet = spreadsheet.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME)
    sheet.appendRow([
      'Received At',
      'Name',
      'Phone',
      'Email',
      'Company',
      'Service',
      'Reference Field',
      'Reference URL',
      'Submitted At',
    ])
  }

  return sheet
}
