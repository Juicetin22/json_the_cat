const request = require('request');
const breed = process.argv.slice(2)[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    throw error;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log("The breed you searched does not exist.");
    return;
  }

  console.log(data[0]["description"]);

});

