// get the postion of vegetables and markets price

const UP_POSITION = 31.32;
const DOWN_POSITION = 27;

const PDFExtract = require("pdf.js-extract").PDFExtract;
const pdfExtract = new PDFExtract();
const fs = require("fs");
const buffer = fs.readFileSync("./daily_01-07-2022.pdf");
const options = {
  // firstPage: 2,
};

pdfExtract.extractBuffer(buffer, options, (err, data) => {
  if (err) return console.log(err);
  for (let i = 0; i < data.pages.length; i++) {
    const letters = data.pages[i].content;
    for (let j = 0; j < letters.length; j++) {
      const { str: name, x: postionX, y: postionY } = letters[j];
      //   console.log(name, postionX, postionY);
      //   if (name.includes("Beans")) {
      //     console.log(name, postionX, postionY);
      //   }
      if ((postionX == UP_POSITION || postionX == DOWN_POSITION) && name) {
        console.log(name);
        // console.log(letters[j]);
      }

      if (postionX == "111.98" || postionX == "141.86") {
        console.log(name);
      }

      //   if (name.includes("320")) {
      //     console.log(name, postionX, postionY);
      //   }
    }
  }
});
