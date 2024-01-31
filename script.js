//1. Do the below programs in anonymous function & IIFE
//   a. Print odd numbers in an array
//Solution:
//Anonymous Function:
var temp = [];
 var res=function(arr){
     for(var i=0;i<arr.length;i++){
     if(arr[i]%2!=0)
     temp.push(arr[i]);
     }
     return temp;
    }
 console.log(res([1,2,3,5,4,6,7,8,9,11,12,13]));
//IIFE Function:
 var temp = [];
 (function(arr){
     for(var i=0;i<arr.length;i++){
     if(arr[i]%2!=0)
     temp.push(arr[i]);
     }
     console.log(temp);
 })([1,2,3,5,4,6,7,8,9,11,12,13]);

//1.b) Convert all the strings to title caps in a string array
//Solution:
//Aonymous Function:
var res=function(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
      var titleCase = arr[i].replace(/\b\w/g, function(match){
        return match.toUpperCase();
      });
      temp.push(titleCase);
    }
    return temp;
  }
  console.log(res(["hello world", "javascript is awsome", "title case"]));
//IIFE Function:
(function str(arr){
    var temp=[];
    for(var i=0;i<arr.length;i++){
      var titleCase = arr[i].replace(/\b\w/g, function(match){
        return match.toUpperCase();
      });
      temp.push(titleCase);
    }
    console.log(temp);
  })(["hello world", "javascript is awsome", "title case"]);

 //1.c) Sum of all numbers in an array
//Solution:
//Anonymous Function:
var sum=0;
var res=function(arr){
    for(var i=0;i<arr.length;i++){
      sum=sum+arr[i];  
    }
    return sum;
}
console.log(res([1,2,3,4,5,6,7,8,9,10]));
//IIFE Function:
var sum=0;
(function(arr){
    for(var i=0;i<arr.length;i++){
      sum=sum+arr[i];  
    }
    console.log(sum);
})([1,2,3,4,5,6,7,8,9,10]);

//1.d) Return all the prime numbers in an array
//Solution:
//Anonymous Function:
var temp=[];
var res=function(arr){
    for(var i=0;i<arr.length;i++){
        var num=arr[i];
        var count=0;
        if(num==1){
        continue;
        }
        for(var j=2;j<num;j++){
            if(num%j==0){
                count++;
            }
            
            }
            if(count==0){
                temp.push(num);
        }
        
      }
      return temp.join(",")
    }
    
console.log(res([1,2,3,4,5,6,7,8,9,10,101]));
//IIFE Function:
var temp=[];
(function(arr){
    for(var i=0;i<arr.length;i++){
        var num=arr[i];
        var count=0;
        if(num==1){
        continue;
        }
        for(var j=2;j<num;j++){
            if(num%j==0){
                count++;
            }
            
            }
            if(count==0){
                temp.push(num);
        }
        
      }
      console.log(temp.join(","));
    })([1,2,3,4,5,6,7,8,9,10,101]);

//1.e) Return all the palindromes in an array
//Solution:
//Anonymous Function:
var temp=[];
var res=function(arr){
    for(var j=0;j<arr.length;j++){
        var num=arr[j].toString().split("");
        var rev=num.reverse().join("");
      if(rev==arr[j])
         temp.push(rev);
      }
      return temp.join(",")
    }
    
console.log(res([121,123,212,345,555,483]));
//IIFE Function:
var temp=[];
(function(arr){
    for(var j=0;j<arr.length;j++){
        var num=arr[j].toString().split("");
        var rev=num.reverse().join("");
      if(rev==arr[j])
         temp.push(rev);
      }
      console.log(temp.join(","));
    })([121,123,212,345,555,483]);

//1.f)Return median of two sorted arrays of the same size.
//Solution:
//Anonymous Function:
var res=function(arr1,arr2){
    var arr3=arr1.concat(arr2);
    var newArray=arr3.sort(function(a,b){
      return a-b;
    });
    var length=newArray.length;
    var middleIndex=length/2;
    if(length%2==0){
    return (newArray[middleIndex-1]+newArray[middleIndex])/2
    }
    else{
    return newArray[middleIndex];
    }
  }
  console.log(res([4,6,3,1,7],[2,5,8,9,10]));
//IIFE Function:
(function(arr1,arr2){
    var arr3=arr1.concat(arr2);
    var newArray=arr3.sort(function(a,b){
      return a-b;
    });
    var length=newArray.length;
    var middleIndex=length/2;
    if(length%2==0){
    console.log((newArray[middleIndex-1]+newArray[middleIndex])/2);
    }
    else{
    console.log(newArray[middleIndex]);
    }
  })([4,6,3,1,7],[2,5,8,9,10]);

//1.g)Remove duplicates from an array
//Solution:
//Anonymous Function:
var res=function(arr) {
    let unique = [];
    for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(res(["apple","orange","apple","mango","grapes","orange"]));
//IIFE Function:
(function(arr) {
    let unique = [];
    for (var i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    console.log(unique);
})(["apple","orange","apple","mango","grapes","orange"]);

//1.h)Rotate an array by k times
//Solution:
//Anonymous Function:
var res = function(arr, k) {

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
  
    return arr;
  }
  console.log(res([1,2,3,4,5,6],3));
//IIFE Function:
(function(arr, k) {

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
  
    console.log(arr);
  })([1,2,3,4,5,6],3);

//2. Do the below programs in arrow functions.
//a) Print odd numbers in an array
//Solution:
//Arrow Function:
var temp = [];
 var res=(arr)=>{
     for(var i=0;i<arr.length;i++){
     if(arr[i]%2!=0)
     temp.push(arr[i]);
     }
     return temp;
 }
 console.log(res([1,2,3,5,4,6,7,8,9,11,12,13]));

 //2.b)Convert all the strings to title caps in a string array
 //Solution:
 //Arrow Function:
var temp=[];
var res=(arr)=>{
    for(var i=0;i<arr.length;i++){
      var titleCase = arr[i].replace(/\b\w/g, function(match){
        return match.toUpperCase();
      });
      temp.push(titleCase);
    }
    return temp;
  }
  console.log(res(["hello world", "javascript is awesome", "title case"]));

//2.c)Sum of all numbers in an array
//Solution:
//Arrow Function:
var sum=0;
var res=(arr)=>{
    for(var i=0;i<arr.length;i++){
      sum=sum+arr[i];  
    }
    return sum;
}
console.log(res([1,2,3,4,5,6,7,8,9,10]));

//2.d)Return all the prime numbers in an array
//Solution:
//Arrow Function:
var temp=[];
var res=(arr)=>{
    for(var i=0;i<arr.length;i++){
        var num=arr[i];
        var count=0;
        if(num==1){
        continue;
        }
        for(var j=2;j<num;j++){
            if(num%j==0){
                count++;
            }
            
            }
            if(count==0){
                temp.push(num);
        }
        
      }
      return temp.join(",")
    }
    
console.log(res([1,2,3,4,5,6,7,8,9,10,101]));

//2.e)Return all the palindromes in an array
//Solution:
//Arrow Function:
var temp=[];
var res=(arr)=>{
    for(var j=0;j<arr.length;j++){
        var num=arr[j].toString().split("");
        var rev=num.reverse().join("");
      if(rev==arr[j])
         temp.push(rev);
      }
      return temp.join(",")
    }
    
console.log(res([121,123,212,345,555,483]));