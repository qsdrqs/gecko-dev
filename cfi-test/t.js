function f1(a, b) {
	return 12345+a+b+arguments.length;
}
function f2() {
  let c = 0;
	for (let i = 0; i < 20; i++) {
		c += f1(i, i+1);
	}
}
f2()
print(dis(f2))
print(disnative(f2))
