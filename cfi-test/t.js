function f1(a, b) {
	return 12345+a+b+arguments.length;
}
function f2() {
	for (let i = 0; i < 20; i++) {
		f1(i, i+1);
	}
}
f2()
print(dis(f1))
print(disnative(f1))