export interface Student {
    id: number;
    name: string;
}

export class StudentCsvDataParser {
    data: Student[] = []
    constructor( ) {
    }

    parse(csvData: string[][]) {
        this.data = csvData.map(item => (
            {
                id: parseInt(item[0]),
                name: item[1]
            }
        ))
    }
}