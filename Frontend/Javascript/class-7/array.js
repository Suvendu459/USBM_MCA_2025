//ARRAY
// EX :- 1
/*let newArray=[];
console.log(newArray);//
console.log(typeof newArray);

//EX :-2
let name = "suvendu";
let age = 23;
let profession = "student";
let isMarried = false;
 //
 let userArray=["suvendu",23,"student",false];
 console.log(userArray);
 //
 //Declaration
 let numbers=[1,2,3,4,5];
 console.log(numbers);
 let newNumber = new Array(1,2.55,5.44,100);
 console.log(newNumber);

 //Array method
 //length
 console.log(numbers.length);//5

 //accessing
 let cities=["Dhenkanal","Bhubaneswar","Cuttack","Balesore"];
 console.log(cities[0]);
 console.log(cities[2]);
//last element
//Balesore
  let lastCity = cities.length-1;//3
 console.log(cities[lastCity]);

 //modify:
 let modifyCity="Kendrapara";
 cities[2]=modifyCity;
 console.log(cities);
 //add element
 //push()
 console.log(cities);
 let addCity="puri";
 cities.push(addCity);
 console.log(cities);
 //pop()
 console.log(cities);
 cities.pop();
 console.log(cities);
 //shift()
 console.log(cities);
 cities.shift();
 console.log(cities);
 //unshift()
 console.log(cities);
cities.unshift();
console.log(cities);
// Array methods
//concat :
let fruits=["apple","orange","mango"];
let addarray=fruits.concat(["litchi","banana"]);
console.log(addarray);


//The includes() method of array instances determine whether an array includes a certain value among its enterprices

let students = ["satya","rakesh","suvendu","daya","amit"];
let newstudents=students.includes("satya");
console.log(newstudents)

//the slice() method of array instances returns a shallow copy of a portion object selected from start to end(end not include)where start and end.........
const animals=['ant','bison','camel','duck','elephant'];
const slice=animals.slice(2);
console.log(slice);
const slice2=animals.slice(2,4);
console.log(slice2);

//The sploice() method.....
const months=['jan','mar','aprl','jun'];
months.splice(1,0,'feb');
console.log(months);
months.splice(2,1,'dec');
console.log(months);
months.splice(4,2,'july','aug');
console.log(months);

//The forEach() method of array instances executes a provided functions once for each array element
//const array1=['a','b','c'];
//double the no. of array2
const array2=[1,2,3,4,5];{
//for (let i=0;i<array2.length;i++){
  //const double = array2[i]*2;
  //array2[i]=doubled;
//}
//forEach()
array2.forEach((el,i)=> {
  console.log(el*2)
});
}*/

// HOF(Higher Order Function) :-
 
/*let arr=["U","S","B","M"];
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
//using forEach() :-
arr.forEach((el,i)=>{
  console.log(el,i);
}); 
//using map() :-
arr.map((el,i)=>{
  console.log(el);
}); 
//toLowerCase :-
arr.map((el,i)=>{
  console.log(el.toLowerCase());
}); 
//declare a varibale....
const newArray=arr.map((el,i)=>{
  return el.toLowerCase();
});
console.log(newArray);

//Filter() :-
let numArray=[1,2,3,4,5,6,7,8,9];
//filter out the odd numbers :-
const oddNumbers=numArray.filter((el)=>{
  return el%2!==0
});
console.log(oddNumbers);

let student={
  name:"suvendu",
  age:23,
  batch:"MCA",
  rollno:147
};
console.log(typeof student)*/
//using cnstructor
const student1=new Object();
student1.name="suvendu";
student1.age=23;
student1.batch="MCA";
student1.rollno=147;
console.log(student1)
//accessing element
//Bracket notation([])
//Dot notation(.)
console.log(student1["name"]);
console.log(student1.name);
//modify element
student1.name="satya";
console.log(student1["name"]);