"use strict";

const express = require("express");

const app = express();

app.set("views", "view");
app.set("view engine", "ejs");

// app.use(compression());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60); next();
// });

// app.use(function (req, res, next) {
//   res.locals = {
//     cssFilepath: revUrl("css/styles.css"),
//     jsFilepath: revUrl("js/script.js"),
//     serviceWorker: revUrl("service-worker.js")
//   };
//   next();
// });
app.use(express.static('public'))

app.get("/", index)

app.listen(8808);
// app.listen(process.env.PORT || 3000)
console.log("Server is Listening on port 8808");

function index(req, res) {
    res.render("index")
}

// function revUrl(url) {
//   let fileName = JSON.parse(fs.readFileSync("public/rev-manifest.json", 'utf8'))
//   return fileName[url]
// }