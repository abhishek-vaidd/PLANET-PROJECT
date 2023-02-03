const parse = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('kepler_data.csv')
  .pipe(parse({
    skipComments: "#",
    columns: true,
  }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    console.log('done')
  });