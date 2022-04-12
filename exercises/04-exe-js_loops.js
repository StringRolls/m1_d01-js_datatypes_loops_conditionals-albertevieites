// Practice loops
  
  // 1: Use any loop. Given the iterable let str='hello,dear.friend! nice,to.see you!', 
  // replace each dot and comma with space. The final output should be: hello dear friend! nice to see you!.
  
  let str = 'hello,dear.friend! nice,to.see you!'

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "," || str[i] === ".") {
      const regex = /[.,]/g;
      str = str.replace(regex, " ");
    }
  }
    
// 2. Loop from 0 to 15 with the conditions:
// For every number that is divisible by 3 output ‘Fizz’ in the console
// For every number that is divisible by 5 output ‘Buzz’ in the console
// For every number that is divisible by 3 and 5 output ‘FizzBuzz’ in the console
for (let i = 0; i <= 15; i++) {
  if ([i] % 3 === 0) {
    console.log("Fizz");
  } else if ([i] % 5 === 0) {
    console.log("Buzz");
  } else if ([i] % 3 === 0 && [i] % 5 === 0) {
    console.log("FizzBuzz")
  }
}