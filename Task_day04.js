//1.Do the below programs in anonymous function & IIFE

//1.a)Print odd numbers in an array - (Anonymous function)

var res = function (arr){
    var odd = [];
    for(var i=0; i<arr.length; i++){
        if (arr[i] % 2 != 0){
            odd.push(arr[i]);
        }
    }
    return odd.join(" ");
}
console.log(res([1,2,3,4,5,6]));

//1.a)Print odd numbers in an array - (IIFE)

(function odd(arr){
    var odd = [];
    for(var i=0; i<arr.length; i++){
        if (arr[i] % 2 != 0){
            odd.push(arr[i]);
        }
    } 
    console.log(odd.join(" "));
})([1,2,3,4,5,6])

//1.b)Convert all the strings to title caps in a string array - (Anonymous function)

var titleCap = function (str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
console.log(titleCap("spread love"));

//1.b)Convert all the strings to title caps in a string array - (IIFE)

(function titleCap(str){
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log( str.join(" ") );
})("spread love")

//1.c)Sum of all numbers in an array - (Anonymous function)

var res = function(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(res([2,5,6,3,4,1,10]));

//1.c)Sum of all numbers in an array - (IIFE)

(function sum(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);

})([2,5,6,3,4,1,10]);

//1.d)Return all the prime numbers in an array - (Anonymous function)

var primeNos = function(arr){
    var res = [];
       for(var i=0; i<arr.length; i++){
        var count = 0;
         for(var j=1; j<=arr[i]; j++){
            if(arr[i] % j == 0){
                
                count++;
            }
        }
        if(count == 2)
        res.push(arr[i]);  
    }
    return res.join(" ");
}
console.log(primeNos([1,2,3,4,5,6,7]));

//1.d)Return all the prime numbers in an array - (IIFE)

(function primeNos (arr){
    var res = [];
    for(var i=0; i<arr.length; i++){
     var count = 0;
      for(var j=1; j<=arr[i]; j++){
         if(arr[i] % j == 0){
             
             count++;
         }
     }
     if(count == 2)
     res.push(arr[i]);  
 }
 console.log (res.join(" "));
})([1,2,3,4,5,6,7]);

//1.e)Return all the palindromes in an array - (Anonymous function)


var isPalin = function(str){
    for(var j=0,k=str.length-1; k>j; j++,k--){
        if (str.charAt(j) != str.charAt(k)){
            return false;
        }
    }
    return true;
}

var palindrome = function(arr){
var res = [];
for(var i = 0; i<arr.length; i++){
        if (isPalin(arr[i])){
            res.push(arr[i]);
        }
    }
return res.join(" ");
}
console.log(palindrome(["mam","sir","malayalam","tamil"]))

//1.e)Return all the palindromes in an array - (IIFE)

function isPalin (str){
    for(var j=0,k=str.length-1; k>j; j++,k--){
        if (str.charAt(j) != str.charAt(k)){
            return false;
        }
    }
    return true;
}

(function palindrome(arr){
    var res = [];
    for(var i = 0; i<arr.length; i++){
            if (isPalin(arr[i])){
                res.push(arr[i]);
            }
        }
    console.log (res.join(" "));
    })(["mam","sir","malayalam","tamil"]);

//1.f)Return median of two sorted arrays of the same size - (Anonymous function)

var median = function (arr1,arr2){
    var arr3 = arr1.concat(arr2);
    arr3.sort((arr1,arr2)=>arr1-arr2);
    if(arr3.length % 2 == 0){
      var med;
      med = (arr3[arr3.length/2]+arr3[(arr3.length/2)-1])/2;
      return med;
    }
    else
    var med;
    med = arr3[((arr3.length/2)-1).toFixed(0)];
    return med;
    
 }
 console.log(median([1,3,4,5,6],[2,7,8,9]));

 //1.f)Return median of two sorted arrays of the same size - (IIFE)

 (function med (arr1,arr2){
    var arr3 = arr1.concat(arr2);
    arr3.sort((arr1,arr2)=>arr1-arr2);
    if(arr3.length % 2 == 0){
      var med;
      med = (arr3[arr3.length/2]+arr3[(arr3.length/2)-1])/2;
      console.log (med);
    }
    else{
    var med;
    med = arr3[((arr3.length/2)-1).toFixed(0)];
    console.log(med);
    }
 })([1,3,4,5,6],[2,7,8,10,9]);

 //1.g)Remove duplicates from an array - (Anonymous function)

var res = function(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(res([1,2,3,1,2,3,4,5]));

 //1.g)Remove duplicates from an array - (IIFE)

(function removeDuplicates (arr){
    console.log (arr.filter((item,
    index) => arr.indexOf(item) === index));
})([1,2,3,1,2,3,4,5]);

//1.h)Remove duplicates from an array - (Anonymous function)

var rotate = function (arr,k){
    var temp;
      for(var i=0; i<k; i++){
          temp = arr.shift();
          arr.push(temp);
      }
      return arr;
  }
  console.log(rotate([1,2,3,4,5,6],3));

  //1.h)Remove duplicates from an array - (IIFE)

  (function rotate (arr,k){
    var temp;
    for(var i=0; i<k; i++){
        temp = arr.shift();
        arr.push(temp);
    }
    console.log (arr);
})([1,2,3,4,5,6],3);

//2.Do the below programs in arrow functions.

//2.a)Print odd numbers in an array

var res = (arr) => {
    var odd = [];
    for(var i=0; i<arr.length; i++){
        if (arr[i] % 2 != 0){
            odd.push(arr[i]);
        }
    }
    return odd.join(" ");
}
console.log(res([1,2,3,4,5,6]));

//2.b)Convert all the strings to title caps in a string array

var titleCap = (str) => {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
console.log(titleCap("spread love"));

//2.c)Sum of all numbers in an array

var res = (arr) => {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(res([2,5,6,3,4,1,10]));

//2.d)Return all the prime numbers in an array

var primeNos = (arr) => {
    var res = [];
       for(var i=0; i<arr.length; i++){
        var count = 0;
         for(var j=1; j<=arr[i]; j++){
            if(arr[i] % j == 0){
                
                count++;
            }
        }
        if(count == 2)
        res.push(arr[i]);  
    }
    return res.join(" ");
}
console.log(primeNos([1,2,3,4,5,6,7]));

//2.e)Return all the palindromes in an array

var isPalin = (str) => {
    for(var j=0,k=str.length-1; k>j; j++,k--){
        if (str.charAt(j) != str.charAt(k)){
            return false;
        }
    }
    return true;
}

var palindrome = (arr) => {
var res = [];
for(var i = 0; i<arr.length; i++){
        if (isPalin(arr[i])){
            res.push(arr[i]);
        }
    }
return res.join(" ");
}
console.log(palindrome(["mam","sir","malayalam","tamil"]))




  }