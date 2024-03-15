export interface Todo {
    id: number;
    title: string;
    status: string;
}

export class TodoCsvDataParser {
    data: Todo[] = []

    
    parse(csvData: string[][]) {
        this.data = csvData.map(item => (
            {
                id: parseInt(item[0]),
                title: item[1],
                status: item[2]
            }
        ))
    }
}