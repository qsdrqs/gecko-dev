function f1(a, b) {
	// return 12345+a+b+arguments.length;
	return a + b;
}
function f2() {
    let c = 0;
    for (let i = 0; i < 100; i++) {
        c += f1(i, i+1);
    }
    return c;
}
let c = 0;
for (let i = 0; i < 100; i++) {
        c += i + i+1;
}
let x = f2();
print(c);
print(x);
//print(f2())
// console.log(f2())
// print(dis(f2))
//print(disnative(f2))
