import { StudentCsvDataParser } from "./StudentCsvDataParser";

const fs = require("fs");

export interface CsvDataParser {
    parse: (csvData: string[][]) => void;
}


export class CsvReader {
    content!: string;
    
    constructor(public path:string, public parser: CsvDataParser) {}

    read() {
        this.content = fs.readFileSync(this.path, "utf-8");
        let rows: string[] = this.content.split("\n");
        let columns: string[][] = rows.map(row => row.split(","));
        this.parser.parse(columns);
        return this.parser;
    }
}