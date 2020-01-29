var pdfreader = require('pdfreader');
const path = require('path')
// const filename = 'CV_ErhanYasar.pdf';
var filename = path.resolve(__dirname, './src/pdf/pranayresume.pdf')

var rows = {}; // indexed by y-position

function printRows() {
  Object.keys(rows) // => array of y-positions (type: float)
    .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
    .forEach((y) => console.log((rows[y] || []).join('')));
}

new pdfreader.PdfReader().parseFileItems(filename, function(err, item){
  if (!item || item.page) {
    // end of file, or page
    printRows();
    console.log('PAGE:', item.page);
    rows = {}; // clear rows for next page
  }
  else if (item.text) {
    // accumulate text items into rows object, per line
    console.log(item.text)
    // (rows[item.y] = rows[item.y] || []).push(item.text);
  }
});