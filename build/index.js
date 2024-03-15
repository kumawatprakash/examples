"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvReader_1 = require("./classes/CsvReader");
const TodoCsvDataParser_1 = require("./classes/TodoCsvDataParser");
const express = require('express');
const app = express();
const csvReader = new CsvReader_1.CsvReader("/todos.csv", new TodoCsvDataParser_1.TodoCsvDataParser());
console.log(csvReader.read());
app.listen();
