"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCsvDataReader = void 0;
class StudentCsvDataReader {
    constructor(csvData) {
        this.data = [];
        this.data = csvData.map(item => ({
            id: parseInt(item[0]),
            name: item[1]
        }));
    }
}
exports.StudentCsvDataReader = StudentCsvDataReader;
