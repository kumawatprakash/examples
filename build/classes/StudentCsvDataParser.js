"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCsvDataParser = void 0;
class StudentCsvDataParser {
    constructor() {
        this.data = [];
    }
    parse(csvData) {
        this.data = csvData.map(item => ({
            id: parseInt(item[0]),
            name: item[1]
        }));
    }
}
exports.StudentCsvDataParser = StudentCsvDataParser;
