const express = require("express");
const https = require("https");

const app = express();
app.use(express.urlencoded({ extended:true}));
app.get("/", function (req, res) {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=54.97&longitude=-1.61&hourly=temperature_2m";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = "temperature_2m";
      const time = JSON.hourly[0].time;
      res.write("<p>The weather is currently " + weatherData + "<p>");
      res.write(
        "<h1>The temperature in Newcastle is " +
          weatherData +
          " degrees Centigrade. <h1>"
      );
      //   const object = {
      //     name: "Angela",
      //     favouriteFood: "Noodles",
      //   };
      //   console.log(JSON.stringify(object));
      // });
    });
    res.send("Server is up and running.");
  });
  app.listen(3000, function () {
    console.log("Server is running on port 3000.");
  });
});
