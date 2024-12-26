import express from "express";
import { rgbToHex, hexToRgb } from "./converter.js";

var app = express();

const PORT = 3000;

app.get("/rgbToHex", function (req, res) {
  var red = parseInt(req.query.red, 10);
  var green = parseInt(req.query.green, 10);
  var blue = parseInt(req.query.blue, 10);
  var hex = rgbToHex(red, green, blue);
  res.send(hex);
});

app.get("/hexToRgb", function (req, res) {
  var hex = req.query.hex;
  var rgb = hexToRgb(hex);
  res.send(JSON.stringify(rgb));
});

app.listen(PORT);
