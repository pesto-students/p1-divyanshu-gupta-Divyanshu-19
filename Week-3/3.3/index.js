function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// Solution: The answer to the above problem will be 'Count is 0' because during the initialization the String value takes count to be 0
// Count value actually increases but the line 6 is not run again so the value never gets updated. So when we log the actual value of
// count is actually 3 but the message is still the same as it was at initialization.
