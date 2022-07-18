//Q.1.Create 2 objects - parent and child. Attach methods to parent and use those methods
//  in child object using parents prototype.
let student={
    name:'Abhi',
    course : 'B.tech',

};
let rec={
    company :'amazon',
    sal : '4.5l'
}
rec._proto_=student;
console.log(rec._proto_.course);
console.log(rec.company);

//Q.2. Write code to explain prototype chaining.

function Person () {
    this.name = 'John',
    this.age = 23
}

const person1 = new Person();
const person2 = new Person();


Person.prototype.gender = 'male';


console.log(Person.prototype);


console.log(person1.gender);
console.log(person2.gender);


//Q.3. Add a method to calculate sum of all elements in Array in array's protype, 
// use that method to calculate sum for multiple arrays.
let arrSum=[16,29,3,7,34];
let res={
    getSum:function(){
        let sum=arrSum.reduce((acc,e)=>acc=acc+e,0);
        console.log(sum);
    }
}
res.getSum();

//Q.4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let objValue={
    name:'ABHISHEK',
    branch:'ECE',
    college:'Sri INDU College Of Engineering And Technology '
  }
let res2=Object.keys(objValue)
let res3=Object.values(objValue)
console.log(res2)
console.log(res3)