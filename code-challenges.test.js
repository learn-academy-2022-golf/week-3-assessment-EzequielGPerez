// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//Input: fibLength1 and fibLength2
//Output: [1, 1, 2, 3, 5, 8] and [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

 // I am going to first start with the expect statements, one for each variable 
 // Since I am not familiar with the Fibonacci sequence I will have to do some research 
 // In the describe arguement I will put fibonacci 
// The next step is where I felt I was having the most difficulty, the layout of my expect statement. I was making it more complicated than needed. This time I will put fibonacci to invoke the function and the expected outputs on the right to be compared to 

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("fibonacci", () => { 
//   it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
//     expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   }) 
// })

// I ran the test and at first I didn't get the correct error, I "got Missing second argument. It must be a callback function. Perhaps you want to use `test.todo` for a test placeholder." So I thought maybe syntax error with the parentheses. I fixed the parentheses and then I did get "ReferenceError: fibonacci is not defined"

// b) Create the function that makes the test pass.

//Now for the fibonacci function
//Input:  fibLength1
//Output: [1, 1, 2, 3, 5, 8]
//Input: fibLength2
//Output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// Looking into the Fibonacci sequence it works by finding the next number by adding the last 2 numbers before it. 
//I found this concept called recursion that is basically a for loop as it uses the same rules. Its a function that calls upon itself until a condition is met. 

// function fibonacci(num) 
//    {    
//         if(num==1) 
//             return 0; 
//         if (num == 2) 
//             return 1; 
//         return  fibonacci(num - 1) + fibonacci(num - 2);
//    } 
//This didn't give me what I wanted, this would only return the number but not a list of numbers. 

//I found a while loop which will loop while a condition is true and will stop when the condition is false, so if I ask it to give me 6 numbers it will keep going until it reaches 6 then it will stop.

// var fibonacci = function (n) 
// {
//   if (n===1) 
//   {
//     return [0, 1];
//   } 
//   else 
//   {
//     var s = fibonacci(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// }

// I get this error, this is as close as I can get  
    // - Expected  - 0
    // + Received  + 1

    // @@ -1,6 +1,7 @@
    //   Array [
    // +   0,
    //     1,
    //     1,
    //     2,
    //     3,
    //     5,
// I have tried again for too long, for 3 hours trying different changes trying to get it to start one index higher but I cannot get it to work no matter what.



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

//Input: studyMinutesWeek1, studyMinutesWeek2
//Output: [15, 15, 20, 30, 30, 60, 90] , [10, 15, 20, 45, 60, 65, 100]

 // I am going to first start with the expect statements, one for each variable 
 // In the describe arguement I will put minutes 
// In my expect statement I will put minutes and .toequal (the numbers in order)

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// describe("minutes", () => { 
//   it("takes in an object and returns an array of the values sorted from least to greatest", () => {
//     expect(minutes(Object.values(studyMinutesWeek1))).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(minutes(Object.values(studyMinutesWeek2))).toEqual([10, 15, 20, 45, 60, 65, 100])
//   }) 
// })

//     ReferenceError: minutes is not defined

// b) Create the function that makes the test pass.

//input: minutes
//output: [15, 15, 20, 30, 30, 60, 90]
//I'm going to need something to sort the numbers from least to greatest 
// parameter as array so it will grab the array 
//use .sort HOF as it will sort the numbers from least to greatest 

// const minutes = (array) => {
//   return array.sort((a, b) => a - b)
// }

//✓ takes in an object and returns an array of the values sorted from least to greatest (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//This is my first jest test in the past 2 weeks that has passed, and my heart dropped when it did. I can't believe I did it!!! 




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//Im going to make describe function accumulate 
// expect statement for each array variable
//input: array with numbers
//output: array with accumulative sum

describe("accumulate", () => { 
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    expect(accumulate(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulate(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulate(accountTransactions3)).toEqual([])
  }) 
})

//    ReferenceError: accumulate is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

//Not sure what I will have to do so I will have to do some research
// After a while of not looking up the right things I found I had to Google "javascript list of partial sums" and that gave me very good results
// We needed to target the index and loop through to iterate through the numbers and add their sums of the values together
//

const accumulate = (arr) => {
  const output = []
  arr.forEach((num, index) => {
     if(index === 0){
        output[index] = num
     }else{
        output[index] = num + output[index - 1]
     }
  })
  return output
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total