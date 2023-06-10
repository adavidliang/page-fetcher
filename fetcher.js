const fs = require('fs');
const request = require('request');

const url = process.argv.slice(2);

request(`${url}`, (error, response, body) => {
  if (error) {
    console.error(error);
  }


  console.log(body)


let content = body;

fs.writeFile('/Users/666666/Desktop/index.js', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
  return content;
})



// const request = require('request');
// require('http://www.example.edu/ ./index.html', (error, response, body) => {
//  if (error) {
//   console.log(error)
//  }
// })



// console.log("Downloaded and saved 3261 bytes to ./index.html")