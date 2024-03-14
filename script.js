
// arrow function 
// let demo = function(){
//     document.write('good morging')
// };
// demo();


// let data = (a,b) =>{
//     document.write(a+b)
// };
// data(10,20);

// let data1 = (z,y) =>{
//     return z+y;

// };
// document.write(data1(20,30))


//Map filder
let arr = [10, 20, 30];
let a = arr.map(value => {
    console.log(value);
    return value; // Return value to be included in the mapped array
});

console.log(a);

let arr2 =[30,20,10]
let arr3 =arr2.map(arr3 =>arr3*2);
console.log(arr3)
  

// use of Promise

// let com = true;
//  let prop = new Promise(function(resolve,reject){
//     if(com){

//     resolve(" i am successfull");
//  }
//  else{
//     reject(" i am failed")
//  }


//  });
//  console.log(prop)
function prop1(complete) {
    return new Promise(function(resolve, reject) {
        if (complete) {
            resolve("I am successful");
        } else {
            reject("I am failed");
        }
    });
}

let onFulfill = (result) => {
    console.log(result);
}

let onReject = (error) => {
    console.log(error);
}

prop1(true).then(onFulfill)
prop1(false).catch(onReject)
