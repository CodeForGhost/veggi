// get the postion of vegetables and markets price

const NEW_POSITION = 31.32;

const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require("fs");
const buffer = fs.readFileSync("./daily_01-07-2022.pdf");
const options = {
  // firstPage: 2,
};

pdfExtract.extractBuffer(buffer, options, (err, data) => {
  if (err) return console.log(err);
  // console.log(data.pages[1]);
  // console.log(data.pages[1].content);
  for (let i = 0; i < data.pages.length; i++) {
    // console.log(data.pages[i].pageInfo);
    const letters = data.pages[i].content;
    let names = [];
    for (let j = 0; j < letters.length; j++) {
      console.log(letters[j]);
      const { str: name, x: postionX, y: postionY } = letters[j];
      let setPositionY = 0;
      if (postionX == NEW_POSITION && name) {
        // console.log(name, postionY);
        setPositionY = postionY;
        names.push(name);
      }
      if (postionY == 163.70000000000005) {
        console.log(name, postionX);
      }
      // Price
      // letters[j].y == 163.70000000000005 && console.log(letters[j]);
    }
  }
});
