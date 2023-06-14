const nums = [10, 15, 15, 20];
const ganNum = [];

nums.forEach(num => {
  if (!ganNum.includes(num)) {
    ganNum.push(num);
  }
});

console.log(ganNum);