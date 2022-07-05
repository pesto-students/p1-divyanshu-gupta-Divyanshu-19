const fibonacci = {
    [Symbol.iterator](){
        let a=0, b=1;
        return {
            next(){
                let c = a;
                a = b
                b = c+b
                return {value: c, done: c>30}
            }
        }
    }
}

console.log("The Fibonacci Series is:")
for(const el of fibonacci){
    console.log(el);
}