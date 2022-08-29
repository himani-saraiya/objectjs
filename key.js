var a = { 3: 23, 2: 30, 1: 40 };
var sum = 0
for (i in a) {
    sum = sum + Number(i)
}
console.log(sum)