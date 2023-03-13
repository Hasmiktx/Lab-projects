// const p = new Promise((res,rej)=>{
//     res(2)
// })
// p.then((data1)=>{
//     console.log(data1,"d1");
//     return data1*3
// }).then((data)=>{
//     console.log(data,"data");
//     return data;
// }).then((d2)=>{
// throw new Error("Error!!!")
// }).then((d3)=>{
//     console.log("d3",d3)
// }).catch((err)=>{
//     console.log(err,"err")
// })


// console.log("Send Request");
// setTimeout(()=>{
//     console.log("server side logic");
//     let user={
//         id:1,
//         name:"John"
//     }
//     setTimeout(()=>{
//         console.log("data recived");
//         user.confirmed = true;
//         console.log(user)
//     },2000)
// },2000)



// const p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({ 
//             status:"Server side logic",
//             data:{
//                 id:1,
//                 name:"John"
//               }
//             })
//     },2000)
   
// })
// p.then((response)=>{
//     setTimeout(()=>{
//        response.status="Data recived";
//        response.data.confirmed= true;
//        return response;
//     },1000)
//     console.log(response,"response");
//     // return response;
// }).then((respData)=>{
//     console.log("respD",respData) ///undefined
// })


// function f2(resp){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             resp.status = "Data recived";
//             resp.data.confirmed = true;
//             res(resp);
//         })
//     })
// }

// p.then((resp)=>{
//     return f2(resp)
    
// }).then((resData)=>{
//     console.log(resData,"resData")
// })

let a=10;
function outer(b){
    let c=5;
     function inner(d){
        return a+b+c+d
    }
    return inner
}
// const res=outer(2);
// console.log(res(3));
// console.log(outer(2)(3))

function out(){
let num =0;
  return{
    increment:function(){
        num++
    },
    decrement:function(){
        num--
    },
    get:function(){
        console.log(num)
    }
  }
}
// const func=out();
// func.increment();
// func.increment();
// func.get();
let x=4;
let y = ++x;
// console.log(y);


/* this binding */
function sayName(){
    console.log(this.name)
}
const p1={
    name:"John",
    age:40
}

// 1. default binding   Strict Mode=undefined    non Strict Mode=global window
// sayName();
//2. impicit binding   this = obj before dot
   let person={
    name:"Joe",
    age:34,
    getName:function(msg){
        console.log( msg + " " + this.name)
    }
   }
  let getName= person.getName;
  let p2={
    name:"Jack",
    age: 20,
    getName
  }
//   p2.getName();

//   3. Explicit binding
const p3= {
    name:"Hasmik",
    age:34
}
// getName.call(p3,"Hello");
// getName.apply(p3,["Hi"]);
// let greeting=getName.bind(p3);
// greeting("My this is obj")


let getName2 = function() {
    console.log(this.name);
}

let user = {
  name: 'Tapas',
  address: 'Freecodecamp'  
};

// getName2.call(user);
// 4 new binding
function Car(color,brand){
    this.color=color;
    this.brand= brand;
    

}
  Car.prototype.sayColor=function (){
    console.log(this.color)
  }


  let car1=new Car("red","camry");
//   car1.sayColor();


//NaN
//  console.log(isNaN(1));
//  console.log(isNaN("1")); 
//  console.log(isNaN(true));
//  console.log(isNaN("Hello"));


/*Recursion 
function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}
add(3) => 3 + add(2)
          3 + 2 + add(1)
          3 + 2 + 1 + add(0)
          3 + 2 + 1 + 0 = 6  

function computeSum(arr){
  if(arr.length === 1){
    return arr[0];
  }
  else{
    return arr.pop() + computeSum(arr);
  }
}
computeSum([7, 8, 9, 99]); // Returns 123

*/

// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

function sumNum(num){
    if(num<=0){
        return 0;
    }else{
        return num+sumNum(num-1)
    }
}
// console.log(sumNum(5))

const arr=[1,2,3,4,5];
function sumArr(arr){
    if(!arr.length){
        return 0;
    }else{
      return   arr.pop() + sumArr(arr)
    }
}

// console.log(sumArr(arr))


function factorial(num){
    if(!num){
        return 1;
    }else{
        return num * factorial(num-1)
    }
}
// console.log(factorial(5))

function fibonacii(num){
    if(num<=2){
        return 1;
    }else{
        return fibonacii(num-2)+fibonacii(num-1)
    }
}
// console.log(fibonacii(15))

function fib(num){
    let arr=[0,1];
    for(let i=2;i<=num;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[num]
}
// console.log(fib(15))

function fibArr(num,cachArr=[]){
    if(cachArr[num]){
        return cachArr[num];
    } 
    if(num<=2){
        return 1;
    }
        cachArr[num] = fibArr(num-1)+fibArr(num-2)
    
    
       return cachArr[num] ;
    
}

// console.log(fibArr(15))


function printNum(num){
    if(num<0){
        return
    }else{
       console.log(num) ;
      return printNum(num-1)
    }
}
printNum(6)

function numPrint(num,n=0){
    if(n>num){
        return;
    }else{
        console.log(n);
        numPrint(num,n+1)
    }
}