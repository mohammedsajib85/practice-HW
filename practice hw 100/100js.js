JavaScript Practice:

1.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

2. দুই সংখ্যার যোগফল

let a = 10, b = 20;
console.log("Sum:", a + b);

3. দুটি সংখ্যার বড়টি নির্ণয়

let a = 5, b = 8;
console.log("Greater:", a > b ? a : b);

4. একটি সংখ্যা জোড় না বিজোড়

let num = 7;
console.log(num % 2 === 0 ? "Even" : "Odd");

5. একটি অ্যারে প্রিন্ট করা

let arr = [1, 2, 3, 4, 5];
arr.forEach(item => console.log(item));

6. ফ্যাক্টোরিয়াল নির্ণয়

let n = 5, fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log("Factorial:", fact);

7. একটি স্ট্রিং রিভার্স করা

let str = "hello";
let reversed = str.split('').reverse().join('');
console.log("Reversed:", reversed);

8. একটি অ্যারে থেকে বড় সংখ্যা বের করা

let nums = [3, 5, 2, 8, 1];
let max = Math.max(...nums);
console.log("Max:", max);

9. নাম্বার গেসিং গেম (সাধারণ)

let secret = 7;
let guess = 5;
console.log(guess === secret ? "Correct!" : "Try again");

10. একটি অবজেক্ট প্রিন্ট করা

let person = { name: "Sajib", age: 25 };
console.log(person.name, person.age);
You sent
51. দুটি স্ট্রিং তুলনা করা

let a = "hello", b = "Hello";
console.log(a === b); // false

52. স্ট্রিং-এর দৈর্ঘ্য বের করা

let str = "JavaScript";
console.log(str.length);

53. এলিমেন্ট পুশ ও পপ করা

let arr = [1, 2];
arr.push(3);
arr.pop();
console.log(arr);

54. অবজেক্টে নতুন প্রপার্টি যোগ করা

let user = { name: "Sajib" };
user.age = 26;
console.log(user);

55. অ্যারেকে স্ট্রিং-এ রূপান্তর

let arr = [1, 2, 3];
console.log(arr.join(", "));

56. বড় হাত ও ছোট হাত অক্ষর চেক করা

let ch = "A";
console.log(ch === ch.toUpperCase() ? "Uppercase" : "Lowercase");

57. Number to Binary রূপান্তর

let num = 10;
console.log(num.toString(2)); // "1010"

58. নাম্বার ফ্লোটে কনভার্ট করা

let n = "3.14";
console.log(parseFloat(n));

59. ক্যাপিটালাইজ ফার্স্ট লেটার

let str = "sajib";
let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalized);

60. টাইম ফরম্যাট (HH:MM:SS)

let now = new Date();
let time = now.toTimeString().split(" ")[0];
console.log(time);

61. Callback Function ব্যবহার

function greet(name, cb) {
  cb(Hello ${name});
}
greet("Adil", msg => console.log(msg));

62. Template Literal ব্যবহার

let name = "Hafsa", age = 25;
console.log(Name: ${name}, Age: ${age});

63. একটি প্রপার্টি আছে কিনা চেক করা

let obj = { name: "Sajib" };
console.log("age" in obj); // false

64. LocalStorage এ ভ্যালু সেট ও গেট

localStorage.setItem("user", "Sajib");
console.log(localStorage.getItem("user"));

65. null এবং undefined পার্থক্য

let a = null;
let b;
console.log(typeof a, typeof b);

66. ইভেন্ট হ্যান্ডলার যোগ করা (Browser)

<button onclick="sayHi()">Click me</button>
<script>
function sayHi() {
  alert("Hello!");
}
</script>

67. ফাংশন ডিফল্ট প্যারামিটার

function greet(name = "Guest") {
  console.log(Hi, ${name});
}
greet();

68. Constructor ফাংশন

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p = new Person("Sajib", 26);
console.log(p);

69. টাইম কনভার্ট (seconds → HH:MM:SS)

let secs = 3661;
let h = Math.floor(secs / 3600);
let m = Math.floor((secs % 3600) / 60);
let s = secs % 60;
console.log(${h}:${m}:${s});

70. (Descending)

let arr = [5, 2, 9];
arr.sort((a, b) => b - a);
console.log(arr);

71. Array destructuring

let [a, b] = [10, 20];
console.log(a, b);

72. Object destructuring

let user = { name: "Sajib", age: 26 };
let { name, age } = user;
console.log(name, age);

73. Spread operator

let a = [1, 2], b = [3, 4];
let c = [...a, ...b];
console.log(c);

74. Rest parameter

function sum(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));

75. Arrow function

let square = n => n * n;
console.log(square(4));

76. Check if object is empty

let obj = {};
console.log(Object.keys(obj).length === 0);

77. Find duplicates in array

let arr = [1, 2, 2, 3];
let dup = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(dup);

78. Palindrome checker (number)

let num = 121;
let str = num.toString();
console.log(str === str.split('').reverse().join(''));

79. Count word frequency in string

let text = "hi hello hi";
let words = text.split(" ");
let freq = {};
words.forEach(w => freq[w] = (freq[w] || 0) + 1);
console.log(freq);

80. Swap two variables

let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);

81. Convert string to array

let str = "hello";
console.log([...str]);

82. Generate random HEX color

let color = "#" + Math.floor(Math.random()*16777215).toString(16);
console.log(color);

83. Delay execution with Promise

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(1000).then(() => console.log("1 second later"));

84. Capitalize every word in sentence

let text = "hello world";
let result = text.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
console.log(result);

85. Remove falsy values from array

let arr = [0, false, "", 5, "hi"];
let cleaned = arr.filter(Boolean);
console.log(cleaned);

86. Flatten nested array

let nested = [1, [2, [3]]];
console.log(nested.flat(2));

87. Current year

console.log(new Date().getFullYear());

88. Sum of digits in number

let n = 123;
let sum = n.toString().split('').reduce((a, b) => +a + +b);
console.log(sum);

89. Remove spaces from string

let str = " a b c ";
console.log(str.replace(/\s/g, ""));

90. Get last element of array

let arr = [1, 2, 3];
console.log(arr[arr.length - 1]);

91. Count vowels in string

let str = "education";
let count = (str.match(/[aeiou]/gi) || []).length;
console.log(count);

92. Reverse words in sentence

let sentence = "Hello world";
let reversed = sentence.split(" ").reverse().join(" ");
console.log(reversed);

93. Filter out numbers from array

let arr = [1, "a", 2, "b"];
let nums = arr.filter(x => typeof x === "number");
console.log(nums);

94. Check leap year

let year = 2024;
console.log(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

95. Convert to Title Case

let str = "my new blog";
let title = str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
console.log(title);

96. Generate random boolean

console.log(Math.random() >= 0.5);

97. Count occurrences of a letter

let str = "banana";
let count = str.split("a").length - 1;
console.log(count);

98. Convert array to object (index:value)

let arr = ["a", "b", "c"];
let obj = Object.assign({}, arr);
console.log(obj);

99. Replace all in string

let str = "a-b-c";
console.log(str.replace(/-/g, "_"));

100. Filter even numbers using reduce

let arr = [1, 2, 3, 4];
let evens = arr.reduce((acc, val) => {
  if (val % 2 === 0) acc.push(val);
  return acc;
}, []);
console.log(evens);
 