const cors = require("cors");
const express = require("express");
const app = express();
require('dotenv').config()

const port = process.env.PORT || process.env.MY_PORT;

app.listen(port, () => {
	console.log("Listen on :", port);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

const landing_page = require("./routes/landing_page");
app.use(landing_page);

const ongkir = require("./routes/ongkir");
app.use(ongkir);
