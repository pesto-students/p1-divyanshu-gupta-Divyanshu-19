const printString = {
  founder: 'Raimi',
  companyName: 'X.COM',
  welcomeString: function (...args) {
    const employees = args;
    const employeeString = args.join(', ');
    return `Welcome ${employeeString} to ${this.companyName} build by our founder ${this.founder}`;
  },
};

console.log(printString.welcomeString()); // This will return founder and companyName

let anotherVar = printString.welcomeString; // This will return undefined as now this is global scope

console.log(anotherVar());

console.log('\nThis is Bind function');
let anotherVarBind = printString.welcomeString.bind(printString, 'X', 'Y');
console.log(anotherVarBind()); //Will return values of founder and company name

console.log('\nThis is Call function');
console.log(anotherVar.call(printString, 'X', 'Y')); //Calling the printString with positional arguments.
//Call does not create new function

console.log('\nThis is Apply function');
console.log(anotherVar.apply(printString, ['X', 'Y'])); //Calling the printString with a single arguments of list.
//Apply does not create new function. It is used when we don't know the number of arguments
