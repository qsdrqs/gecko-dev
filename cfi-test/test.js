function callme(a,b) {
  return a-b;
}

function main(){
    for(let i = 0; i < 100000; i++) {
        let a = i;
        let b = i+123;
        callme(a,b);
    }
}
main()
print(dis(callme))
print(disnative(callme))
