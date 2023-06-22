const compose = (functions) => functions.reduceRight((a, b) => (c) => b(a(c)), c => c)

const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9

x => x + 1 (a (c))