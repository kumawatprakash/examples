import { CsvReader } from "./classes/CsvReader";
import { StudentCsvDataParser } from "./classes/StudentCsvDataParser";
import { TodoCsvDataParser } from "./classes/TodoCsvDataParser";

const express = require('express');

const app = express();

const csvReader = new CsvReader("/todos.csv", new TodoCsvDataParser());

console.log(csvReader.read())


app.listen(); 