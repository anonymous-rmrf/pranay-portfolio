// const fs = require('fs');
const path = require('path')
var pdfjsLib = require('pdfjs-dist');
let fs = require('fs'),
PDFParser = require("pdf2json");

console.log((path.resolve(__dirname, './src/pdf/pranayresume.pdf')))
var pdfPath = path.resolve(__dirname, './src/pdf/pranayresume.pdf')

// function pdf2json(){
    // let inputStream = fs.createReadStream(pdfPath, {bufferSize: 64 * 1024});
    // let outputStream = fs.createWriteStream(pdfPath);
    
    // inputStream.pipe(new PDFParser()).pipe(new StringifyStream()).pipe(outputStream);
  
// }

function pdfjs() {
    var loadingTask = pdfjsLib.getDocument(pdfPath);
    loadingTask.promise.then(function (doc) {
        var numPages = doc.numPages;
        console.log('# Document Loaded');
        console.log('Number of Pages: ' + numPages);
        console.log();

        var lastPromise; // will be used to chain promises
        lastPromise = doc.getMetadata().then(function (data) {
            console.log('# Metadata Is Loaded');
            console.log('## Info');
            console.log(JSON.stringify(data.info, null, 2));
            console.log();
        });

        var loadPage = function (pageNum) {
            return doc.getPage(pageNum).then(function (page) {
                console.log('# Page ' + pageNum);
                var viewport = page.getViewport({ scale: 1.0, });
                console.log('Size: ' + viewport.width + 'x' + viewport.height);
                console.log();
                return page.getTextContent().then(function (content) {
                    // Content contains lots of information about the text layout and
                    // styles, but we need only strings at the moment
                    var strings = content.items.map(function (item) {
                        return item.str;
                    });
                    console.log('## Text Content');
                    console.log(strings.join(''));
                }).then(function () {
                    console.log();
                });
            });
        };

        for (var i = 1; i <= numPages; i++) {
            lastPromise = lastPromise.then(loadPage.bind(null, i));
        }
        return lastPromise;
    }).then(function () {
        console.log('# End of Document');
    }, function (err) {
        console.error('Error: ' + err);
    });
}

// pdfjs()