//1. ways to print in javascrpipt

//console.log("Hello World");
// alert("me");
// document.write("this is a document");
//   2.Javascript console API
// console.log("Hello World");
// console.warn("this is an warning");
// console.error("this is an error");
// 3.javascript Variables
var number1 = 30;
var number2 = 50;
//  console.log(number1+number2);
//  4.Data types in variables
// number
var num1 = 45;
var num2 = 45.667;
// string
var str1 = "this is a string ";
var str2 = "this is another string";
// object
var marks = {
  ravi: 56,
  shubham: 45,
  somu: 67

}
// boolean
var a = true;
var b = false;
//  console.log(a,b)
var und;
// console.log(und);
var nu = null;
// console.log(nu);
/*there are two types of data types in javascript.
    1.primitive datatype: null,undefined,number,string,boolean,symbol 
    2.reference datatype: array and object
    */
var arr = [1, 2, 3, "hello", 5];
//    console.log(arr);
// Arithmetic operator
var a = 100;
var b = 10;
// console.log(a*b)
// Assigment operator
var c = b;
c = c + b;
//  console.log(c);
// //  comparison operator
// var x=34;
// var y=56;
// // console.log(x==y);
// // console.log(x>y);

// // logical operator
// console.log(true&&false)
// console.log(true||false)
// // logical not
// console.log(!true)
// console.log(!false)

// Functions in javascript


// conditional statements in javascript
/* var age=2;
 if( age>18 && age<30)
 {
   console.log("you are not a kid");
 }
 else if(age>31 && age<50)
 {
   console.log("tum bade ho chuke ho");
 }
 else
 {
   console.log("you are kid");
 }*/

//  Loops in javascript
var arr = [1, 2, 3, 4, 5]
//  for(var i=0;i<arr.length;i++)
//  {
//     console.log(arr[i])
//  }
let j = 0;
// while(j<arr.length)
// {
//   console.log(arr[j])
//   j++;
// }
// const ac=0;
// ac=ac+1;

// do {
//   console.log(arr[j])
// } while (j < arr.length)

// let myarr=['fan','somu',43,null,true];
// console.log(myarr.length);
// myarr.pop();
// myarr.push('bajpai');
// myarr.unshift('so');

// console.log(myarr);
// string methods in javascript
// let mystring="Somesh is a good boy boy";
// console.log(mystring.length)
// console.log(mystring.lastIndexOf("boy"))
// console.log(mystring.slice(1,3))
// d=mystring.replace("Somesh","Bajpai");
// console.log(d)

// Dates in js

// let mydate = new Date();
// console.log(mydate)
// console.log(mydate.getTime());// It gives ime in seconds
// console.log(mydate.getFullYear());
// console.log(mydate.getDay())

// DOM Manipulation
let elem1 = document.getElementById("click");
// console.log(elem1)
// let elem2= document.getElementsByClassName("container");
// console.log(elem2)
// console.log(elem1.innerHTML)
// console.log(elem1.innerText)
// console.log(elem1.getElementsByTagName())


// Selecting using Query

// sel=document.querySelector('.container')
// console.log(sel)

// // Events in javascript

// function clicked(){
//   console.log('the button was clicked')
// }
// window.onload=function(){
//   console.log('the document was loaded')
// }

// firstcontainer.addEventListener('click',function()
// {
//   console.log("clicked on container")
// })
// firstcontainer.addEventListener('mouseover',function()
// {
//   console.log("mouse on container")
// })
// firstcontainer.addEventListener('mouseout',function()
// {
//   console.log("mouseout on container")
// })

// Arrow Function
// summ=(a,b)=>{
//   return(a+b);
// }

// // SetTimeout and Setinterval
// // To perform any task repeateadly we use setinterval
// setInterval(logkaro,5000);
// Use clearinterval(clr)  and clearTimeout(clr) to cancel SetTimeout and Setinterval
// Javascript local Storage
// localStorage.setItem('name','somu');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// JSON- javascript Object Notation

obj={name:"somu", length: 2,a:{this:"that"}};
jso=JSON.stringify(obj);
console.log(typeof(obj));
console.log(jso)
parsed=JSON.parse('{"name":"somu","length":2,"a":{"this":"that"}}');
console.log(parsed);
console.log(typeof (parsed));








