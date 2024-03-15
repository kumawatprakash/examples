"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fs = require("fs");
class CsvReader {
    constructor(path, parser) {
        this.path = path;
        this.parser = parser;
    }
    read() {
        this.content = fs.readFileSync(this.path, "utf-8");
        let rows = this.content.split("\n");
        let columns = rows.map(row => row.split(","));
        this.parser.parse(columns);
        return this.parser;
    }
}
exports.CsvReader = CsvReader;
