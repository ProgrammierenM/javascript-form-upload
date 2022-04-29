const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5500",
};

app.use(cors(corsOptions));

//const upload = multer({ dest: "./images/" });
const storage = multer.diskStorage({
  destination: "./images/",
  filename: function (request, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("avatar"), (request, response) => {
  console.log(request.body, request.file);
  response.json("Vielen Dank!");
});

app.listen(port, () => console.info("Server läuft!"));
