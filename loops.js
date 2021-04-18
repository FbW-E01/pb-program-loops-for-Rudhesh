for (let i = 1; i <= 20; i++) {
    
    console.log(i)
}



let bottles = ["There is one bottle of beer on the wall.",
 "There are two bottles of beer on the wall",
 "There are three bottles of beer on the wall",
 "There are four bottles of beer on the wall",
 "There are five bottles of beer on the wall"]

 for (let i = 0; i < bottles.length; i++) {
     const e = bottles[i];
     console.log(e);
     
 }





for (let i = 0; i <= 20; i++) {

    
    if (i % 2 === 0) {
        console.log(i, "is even")
    }
    else{
        console.log( i, "is odd")
    }
}



 for (let i = 0; i <= 10; i++) {
     
    const e = (i * 9)

    console.log((i),"* 9 =", (e));
     
 }



for (let i = 1; i <= 100; i++) {
  
    if (i % 15 === 0)
        console.log("FizzBuzz");
    else if (i % 3 === 0)
        console.log("Fizz");
    else if (i % 5 === 0)
        console.log("Buzz");
    else
        console.log(i);
    
}



let sum = 0

for (let i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        {sum = sum + i;}
        console.log(sum);
    }
}


for (let i = 100; i <= 1000; i = i + 100) {
    
    console.log(i)
}

for (let i = 0; i <= 10; i = i + 2) {
    
    console.log(i)
}

for (let i = 3; i <= 15; i = i + 3) {
    
    console.log(i)
}

for (let i = 9; i >= 0; i--) {
    const num = i;
    
console.log(num);
}


for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
  
    console.log(i);
    console.log(j);
}
}