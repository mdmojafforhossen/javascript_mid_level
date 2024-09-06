

class Student{
    constructor(id,name){
        this.id = id;
        this.name =name;
    }
    set studentName(name) {
        this.name =name;
    }
    get studentInfo(){
        return this.id+" "+this.name;
        
    }
}

var name1 = new Student (101,'mojaffor');

console.clear();
// console.log(name1);

name1.studentName="Ripa";
console.log(name1);

console.log(name1.studentInfo);

