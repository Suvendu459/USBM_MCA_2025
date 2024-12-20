// async operation chapter:

// Schronous Code
/*console.log("start");
console.log("middle");
console.log("end");

//Asynchronous code withsetTimeout
console.log("start");
setTimeout(()=>console.log("middle"),2000);
console.log("end");*/

//fetch
const url='https://jsonplaceholder.typicode.com/users';
fetch(url)
/*then((res) => res.json())
.then((res) => console.log(res))
.catch((error) => console.log(error));


//using Async/Await with fetch:
async function fetchData() {
try{
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
}catch(error){
    console.log(error);
}
}    
fetchData();
*/
//

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();
  
