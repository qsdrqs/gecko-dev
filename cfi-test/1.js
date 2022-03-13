function is_prime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return 0;
    }
  }
  return 1;
}

function main() {
  let up = 200000;
  let count = 0;
  for (let i = 2; i <= up; i++) {
    if (is_prime(i)) {
      count++;
    }
  }
  console.log("count = " + count);
}
main()
