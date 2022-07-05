function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const addM = memoize(add);

time(() => addM(1, 2, 1, 1));
time(() => addM(1, 1, 1, 1));
time(() => addM(1, 1, 1, 1));
time(() => addM(1, 1, 1, 1));
time(() => addM(1, 1, 1, 1));
