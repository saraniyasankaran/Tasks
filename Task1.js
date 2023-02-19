//for each

var flowers = ['sunflower','lilly','rose','jasmine']
flowers.forEach(function(element){
    console.log(element);
})

//fiter starstswith 
const countries = ['Europe', 'England',  'Denmark', 'New Zealand'];
const startsWith = countries.filter((country) => country.startsWith("E"));
console.log(startsWith);

//string items
const arr = [1,'sunflower',2,'lilly',3,'rose','jasmine']


function getStringsLists(arr){
  for(let i=1; i<arr.length; i++){
      if(typeof(arr[i]) == 'string'){
          console.log(arr[i])
      }
  }
    
}
getStringsLists(arr)

// reduce
const arr1 = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway','IceLand' ]
function concate(hold,value){
    return hold+" "+value;   
}
let concatenation = arr1.reduce(concate)
console.log(concatenation)

//map
const numbers = [10, 20, 30, 40, 50];
const square = numbers.map(element => element ** 2);
console.log(square); 

//
const constants = [2.71828, 3.14159, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e); 
console.log(pi); 
console.log(gravity); 
console.log(humanBodyTemp); 
console.log(waterBoilingTemp); 

//Exercise1
// Create an Empty Set
var empty = new Set();
// Create a set containing 0 to 10 using loop
var set1 = new Set();
for(let i=1;i<=10;i++){
    set1.add(i)+" ";
    console.log (i);
}
// Remove an element from set
const country =new Set (['Finland', 'Sweden', 'Norway'])
console.log(country)
countries.delete('Sweden');
console.log(countries)
//Clear a set
countries.clear();
console.log(countries)
//Create a set of 5 string elements from array
let array=['Finland', 'Sweden', 'Norway','korea','morraco']
let setexample=new Set(array);
console.log(setexample)
//Create a map of countries and number of characters of a country
let map=new Map([['India',5],['Finland',7],['Sweden',6],['Norway',5]])
console.log(map)

//Exercise 2
let a = [1, 2, 3,4];
let b = [3, 4, 5,6];
let union = [...new Set([...a, ...b])];
console.log(union); 
let intersection = a.filter((element) => b.includes(element));
console.log(intersection);

