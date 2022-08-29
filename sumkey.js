var a = { a: 23, b: 30, c: 40 };
var sum = 0;
for (i in a) {
    sum = sum + a[i]
}
console.log(sum)