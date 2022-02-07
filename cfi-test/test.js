function callme(a,b) {
  return a-b;
}

for(let i = 0; i < 100000000; i++) {
  let a = i;
  let b = i+123;
  let c = callme(a,b);
}

print(disnative(callme))
