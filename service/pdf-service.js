PDFDocument = require('pdfkit');

function buildPDF(dataCallback,endCallback){
       const doc = new PDFDocument();
       doc.on('data',dataCallback);
       doc.on('end', endCallback);
       doc.font('fonts/PalatinoBold.ttf').fontSize(25).text('This is heading!', 100, 100);
  doc.end();

}
module.exports = {buildPDF};