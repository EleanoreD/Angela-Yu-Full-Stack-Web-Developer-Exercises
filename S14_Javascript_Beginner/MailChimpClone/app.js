//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

const port = 3000;

app.use(express.static("public"));
//app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.fname;
  var lastName = req.bedy.lname;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url =
    "https://usSEVERNUMBER HERE.api.mailchimp.com/3.0/lists/123456789";
  const options = {
    method: "POST",
    auth: "anystring:APIKEY HERE - region must match the url.",
  };

  const request = https.request(url, options, function (response) {
    if ((response.statusCode = 200)) {
      // res.send("Successfully sunscribed")
      res.sendFile(__dirname + "/success.html");
    } else {
      //res.send("There was an error with subdcribing, please try again")
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
