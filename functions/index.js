const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const { contact } = require("./handlers/profile/index");
app.post("/", contact);

exports.api = functions.region("europe-west2").https.onRequest(app);
