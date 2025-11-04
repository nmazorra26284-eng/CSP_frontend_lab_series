/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

// TODO 2: Print basic math ops: + - * /
// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

// TODO 3: Assignment operators with score variable

// TODO 4: Expressions with operator precedence

// TODO 5: Strings (single, double, backticks)

// TODO 6: String properties and methods
// - greeting.length
// - charAt(0), charAt(5), [3]
// - indexOf("sad")
// - repeat()
// - substring, substr, slice examples

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example

console.log("todo1");
var a=34
var b=12.99
console.log("Age:"+a)
console.log("Price:$"+b)

console.log("todo1b");
let x="Sandra"/2
console.log('"Sandra"/2=',x)

console.log("math ops")
n1=15;n2=4
console.log(n1+"+"+n2+"=",n1+n2)
console.log(n1+"-"+n2+"=",n1-n2)
console.log(n1+"*"+n2+"=",n1*n2)
console.log(n1+"/"+n2+"=",n1/n2)

console.log("exp n modulo")
console.log("2**3=",2**3)
console.log("7%2=",7%2)

console.log("assign ops")
let s=50
console.log("start",s)
s+=10;console.log("+=10",s)
s-=5;console.log("-=5",s)
s*=2;console.log("*=2",s)
s/=5;console.log("/=5",s)
s%=3;console.log("%=3",s)

console.log("precedence")
p1=5+3*2
p2=(5+3)*2
p3=10-8/4+6
console.log("5+3*2="+p1)
console.log("(5+3)*2="+p2)
console.log("10-8/4+6="+p3)

console.log("strings yay")
t1='js fun'
t2="double quotes work"
t3=`age is ${a}`
console.log(t1)
console.log(t2)
console.log(t3)

console.log("string stuff")
g="Hello, sadness and sunshine!"
console.log("g=",g)
console.log("len",g.length)
console.log("char0",g.charAt(0))
console.log("char5",g.charAt(5))
console.log("index3",g[3])
console.log("indexOf sad",g.indexOf("sad"))
console.log("repeat",g.repeat(2))
console.log("substring",g.substring(0,5))
console.log("substr",g.substr(7,3))
console.log("slice",g.slice(-9))

console.log("even check")
num=42
console.log(num,"even?",num%2==0)

console.log("compare words")
wa="apple"
wb="banana"
console.log(wa+".localeCompare("+wb+")=",wa.localeCompare(wb))
console.log(wb+".localeCompare("+wa+")=",wb.localeCompare(wa))