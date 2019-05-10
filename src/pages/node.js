const fs = require('fs');

const dirObject = fs.readdirSync('./');

const isHtml = obj => /[^"]+\.html/.test(obj);
const isFolder = obj => /^[^.]*$/.test(obj);

const processObject = obj => {
  if(isFolder(obj)) {
    const dirObject = fs.readdirSync('./');
  }
}

dirObject.map(obj => {

})



