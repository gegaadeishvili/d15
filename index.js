const nums = [10, 15, 15, 20];
const ganNum = [];

nums.forEach(num => {
  if (!ganNum.includes(num)) {
    ganNum.push(num);
  }
});

console.log(ganNum);



const name = 'gega'; 
const lastName = "adeishvili"; 
const age = 16; 

if (name.length > 20) {
  console.log("Name exceeds the character limit");
}

if (lastName.length > 40) {
  console.log("Last name exceeds the character limit");
}

if (age > 18) {
  const fullName = `${name} ${lastName}`;
  console.log(`Hello, ${fullName}`);
}