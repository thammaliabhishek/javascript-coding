//-----------ARRAY OS OBJECTS-------------------


let studentRecords = [{
    name: 'John',
    id: 123,
    marks: 98
  },
  {
    name: 'Baba',
    id: 101,
    marks: 23
  },
  {
    name: 'yaga',
    id: 200,
    marks: 45
  },
  {
    name: 'Wick',
    id: 115,
    marks: 75
  }
]

// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps. ['JOHN', 'BABA', 'YAGA', 'WICK']"
let res = new Array()
for(let i in studentRecords){
  result.push(studentRecords[i].name.toUpperCase())
}
console.log(res);

// "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks. [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let res1 = new Array()
for(let i in studentRecords){
  if(studentRecords[i].marks>50){
    res1.push(studentRecords[i])
  }
}
console.log(res1);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let res2 = new Array()
for(let i in studentRecords){
  if(studentRecords[i].marks>50 && studentRecords[i].id>120){
    res2.push(studentRecords[i])
  }
}
console.log(res2);

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let res3 = 0;
for(let i in studentRecords){
  if(studentRecords[i].marks>50 && studentRecords[i].id>120){
    res3+=studentRecords[i].marks
  }
}
console.log(res3);

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let val = new Array()
for(let i in studentRecords){
  if(studentRecords[i].marks>50){
    val.push(studentRecords[i].name)
  }
}
console.log(val);

//  Question 6: This time we are required to print the sum of marks of the students with id > 120.

let val1 = 0;
for(let i in studentRecords){
  if(studentRecords[i].id>120){
    val1+=studentRecords[i].marks
  }
}
console.log(val1);

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let val2 = 0;
for(let i in studentRecords){
  if(studentRecords[i].marks<50 && studentRecords[i].marks+15>50){
    val2+=studentRecords[i].marks
  }
}
console.log(val2);

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let ArrayObjects=[
    {name:'Abhi',class:1,rollno:1},
    {name:'Sai',class:2,rollno:1},
    {name:'mallikarjun',class:3,rollno:2},
    {name:'Uday',class:4,rollno:3},
    {name:'Nikhil',class:5,rollno:4},
    {name:'Arun',class:6,rollno:5},
]