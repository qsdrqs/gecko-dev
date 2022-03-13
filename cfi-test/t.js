function f3(a, b) {
	// return 12345+a+b+arguments.length;
    print("in f3")
	return a - b;
}
function f1(a, b) {
	// return 12345+a+b+arguments.length;
    print("in f1")
	return a + b;
}
function f2() {
    let c = 0;
    for (let i = 0; i < 100000; i++) {
        print(i);
        print("goto f1")
        c += f1(i, i+1);
        print("goto f3")
        c += f3(i, i+1);
    }
    return c;
}
print(f2())
// console.log(f2())
// print(dis(f2))
//print(disnative(f2))
