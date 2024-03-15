"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentCsvDataReaders = void 0;
class StudentCsvDataReaders {
    constructor(csvData) {
        this.data = [];
        this.data = csvData.map(item => ({
            id: parseInt(item[0]),
            name: item[1]
        }));
    }
}
exports.StudentCsvDataReaders = StudentCsvDataReaders;
