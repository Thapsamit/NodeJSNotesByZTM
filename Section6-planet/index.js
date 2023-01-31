const { parse } = require("csv-parse");
const fs = require("fs");

const result = []; // will store the data here

function isHabitablePlanet(data) {
  return (
    data["koi_disposition"] === "CONFIRMED" &&
    data["koi_insol"] > 0.36 &&
    data["koi_insol"] < 1.11 &&
    data["koi_prad"] < 1.6
  ); // will return true for this piece of data if it is confirmed
}

// createReadStream will give events like 'data','end' etc and we are chaining here
// the pipe function will take the read stream data and pass it to other stream which is parse() that gives data in processed form
// readstream.pipe(writestream)
fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true, // it will return each row as key value pairs like js objects // basically the column name as key and each row has value for each key
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      result.push(data); // only push if it is habitable
    }
  })
  .on("end", () => {
    console.log(result);
    console.log(
      result.map((data) => {
        return data["kepler_name"];
      })
    );
    console.log(`Hey I Have found ${result.length} habitable planets`);
  })
  .on("err", (err) => {
    console.log(err);
  });
parse(); //  it needs stream api of fs of nodejs
