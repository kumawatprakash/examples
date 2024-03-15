"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCsvDataParser = void 0;
class TodoCsvDataParser {
    constructor() {
        this.data = [];
    }
    parse(csvData) {
        this.data = csvData.map(item => ({
            id: parseInt(item[0]),
            title: item[1],
            status: item[2]
        }));
    }
}
exports.TodoCsvDataParser = TodoCsvDataParser;
