//undefined
/*let data;
console.log(typeof data);
console.log(data);*/

//number
/*let num1=50;
let decimalno=1.0001;
let pi = 3.141;
let age= 23;
let rollno=1541;
console.log(typeof num1);*/
//addition
/*let num2=100;
let num3=125;
let addition=num2+num3;
console.log(addition);
//subtraction
let subtraction=num3-num2;
console.log(subtraction);
//multiplicattion
let multiplication=num2*num3;
console.log(multiplication);
//division
let division=num3/num2;
console.log(division);
//NaN(not a num)
let num4=0;
let num5=0
console.log(num4/num5);
let num6=0;
let num7=10;
console.log(num6/num7);

//Boolean
let isMarried=false;
let isSingle=true;
console.log(typeof isMarried);
console.log(typeof isSingle);
console.log(isMarried);
console.log(isSingle);

//string
let name = "SUVENDU";
let city = "DHENKANAL";
let rollno = 101;
let age = 23;
let gender = "Male";
let pincode = 759015;
let college = "USBM";
let batch = 2025;
console.log(`Name of the student is : ${name} ,City is : ${city},Rollno is : ${rollno},Age is : ${age},Gender is : ${gender},Pincode is : ${pincode},College name is : ${college},Batch is : ${batch}`)
console.log(city.length);
console.log(100+"101")*/

// Question(1)
   let foodPrice = 200;
   let drinkPrice = 100;
   let totalBill = foodPrice+drinkPrice;
   let tip = (totalBill*10)/100;
   let finalAmount = totalBill+tip;
   console.log(`Total bill is : ${totalBill},The tip is : ${tip},The final amount is : ${finalAmount}`);

// Question(2)
   let originalPrice = 200;
   let discount = 50;
   let finalPrice = originalPrice-discount;
   console.log(`The final price is : ${finalPrice},Discounted price is : ${discount}`);

//Question(3)
   let productPrice = 500;
   let salesTaxRate = 5;
   let taxAmount = (productPrice*salesTaxRate)/100;
   let totalPrice = productPrice+taxAmount;
   console.log(`The tax amount is : ${taxAmount},The total price is : ${totalPrice}`);
