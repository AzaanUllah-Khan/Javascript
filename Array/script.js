// Create An Array
var array = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
// Add element to the end of the array
array.push("grapes")
// remove element from the end of the array
array.pop()
// Add element to the starting of the array
array.unshift("lemon")
// Remove one element from the starting of the array
array.shift()
console.log(array);
// checking if an element is present in an array
console.log(array.indexOf("cherry"));
if (array.includes("kiwi")) {
    console.log("Kiwi is in");
}
else {
    console.log("Kiwi is out");
}
// Creating a new array
var secondArr = ["grape", "kiwi", "lemon", "lime"]
// merging the two arrays together
var mergedArr = secondArr.concat(array)
console.log(mergedArr);
// seperating element from index 1 to 3 from the merged array
var slicedArr = mergedArr.slice(1, 4)
console.log(slicedArr);
// converting array into string
console.log(mergedArr.join(" "))
// Sorting the Array
console.log(mergedArr.sort(), "Sorted Array");
// Reversing an array through for loop
var reverseArray = []
for (i = mergedArr.length - 1; i >= 0; i--) {
    reverseArray.push(mergedArr[i])
}
console.log(reverseArray, "reversed Array", mergedArr, "orignal Array");
// checking the length of merged array
console.log(mergedArr.length);