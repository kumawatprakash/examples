"use strict";
class Student {
    constructor() { }
    setData(data) {
        this.id = parseInt(data[0]);
        this.name = data[1];
    }
}
class Todo {
    setData(data) {
        this.id = parseInt(data[0]);
        this.title = data[1];
        if (data[2] === "c" || data[2] === "p") {
            this.status = data[2];
        }
        else
            this.status = "c";
    }
}
class ReadFromCsv {
    constructor(path, entity) {
        this.path = path;
        this.entity = entity;
    }
    parseArrOfArr() {
        let data = fs.readFileSync(this.path, 'utf-8');
        let dataArr = data.split("\n");
        let dataArrOfArr = dataArr.map(ingredient => ingredient.trim().split(","));
        return dataArrOfArr;
    }
    ;
    parseArrOfObj() {
        const dataArrOfArr = this.parseArrOfArr();
        const arr = dataArrOfArr.map(row => {
            const instance = this.entity;
            instance.setData(row);
            return instance;
        });
        return arr;
    }
}
console.log();
let students = new ReadFromCsv("/students.csv", new Student);
console.log(students.parseArrOfObj());
let todos = new ReadFromCsv('/todos.csv', new Todo);
console.log(todos.parseArrOfObj());
