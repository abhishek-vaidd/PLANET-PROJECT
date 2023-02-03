const parse = require('csv-parser')
const fs = require('fs')
const HabitablePlanets = [];
const isHabitablePlanets = (planet) => {
    return planet["koi_disposition"] === "CONFIRMED" 
    && planet["koi_insol"] > 0.36 && planet["koi_insol"] < 1.11  
    && planet["koi_prad"] < 1.6;
}

fs.createReadStream('kepler_data.csv')
  .pipe(parse({
    skipComments: "#",
    columns: true,
  }))
  .on('data', (data) => {
    if(isHabitablePlanets(data)) HabitablePlanets.push(data)
  })
  .on('end', () => {
    console.log(HabitablePlanets.length);
    console.log('done')
  });