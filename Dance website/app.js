const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express("");
const port = 80;

app.use(express.static('static',options))