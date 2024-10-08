//Mathematical operator
/*let num1=5;
let num2=3;
let result= num1+num2;//addition operator
//let result= num1-num2;//subtraction
//let result= num1*num2;//multiplication
//let result= num1/num2;//division
console.log(result);
//modulo operator:
// to find out remainder
let num3=17;
let odd=(num3%2);
console.log(odd);
//Exponential operator:
let square = 2**2;
console.log(square);
//relational operator
//to compatre two values
console.log(10>5);
console.log(10<5);
console.log(5>5);
console.log(5>=5);
console.log(10>=5);
//Equality operator
//`==` : value and data type check
console.log(5==5);//boolean
console.log(6==6);
console.log(5=="5");
console.log(5==="5");
console.log(5!="5");*/

//conditional statements
//if(condition){
// true code to be executed here
//}

//false value :
// false,0,-0,"",``,'',null,undefined,NaN

if (-0.0512){
    console.log("it is true")

}

//task:
//given totalBill,discountStartPrice if you satisfy the condition print discount
//available otherwise print no discount

let totalBill = 1000;
let discountStartPrice = 300;
if(totalBill>discountStartPrice){
    console.log("Discount")
}else{
    console.log("No Discount")
}

//check if (male) and then check (22+) then he can able to marry
let age = 45;
let gender = "male";
if(gender==="male"){
    if(age>=22){
        console.log("he can able to marry");
    }
}
else{
    console.log("unable to marry");
}
// check the vowel
let char ="a";
switch(char){
    case "a":
        console.log("it is a vowel");
    break;
    case "e":
        console.log("it is a vowel");
    break;
    case "i":
        console.log("it is a vowel");
    break;
    case "o":
        console.log("it is a vowel");
    break;
    case "u":
        console.log("it is a vowel");
    break;

    default:
        console.log("it is not a vowel");
        btreak;
}

// Day task
let num=3;
switch (num) {
    case 1:
        console.log("it is monday");
        
        break;
        case 2:
            console.log("it is tuesday");
            break;
            case 3:
                console.log("it is wednesday")
                break;
                case 4:
                    console.log("it is thursday");
                    break;
                    case 5:
                        console.log("it is friday");
                        break;
                        case 6:
                        console.log("it is saturday");
                        break;
                        case 7:
                        console.log("it is sunday");
                        break;



    default:
}
