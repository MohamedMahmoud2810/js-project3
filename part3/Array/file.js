// Array.prototype.at() 
// takes an integer value and returns the item at that index
const arr1 = [5,6,7,9,6,2];
const arr2 = [7,9,3,6,5,1 , 0 , 4154 , 4577 , 575 ];
let index = 2;

document.write(`using the index of array to reach elements the element of index ${index} is ${arr1.at(index)} </br>`);

////////////////////////////////////////////////////////////////////////////

//Array.prototype.concat()
// used to merge two or more arrays.

const arr3 = arr1.concat(arr2);
document.write(arr3 + "</br>");


////////////////////////////////////////////////////////////////////////////

//Array.prototype.entries()
//returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const Iterator = arr1.entries();

document.write(Iterator.next().value + "</br>");
document.write(Iterator.next().value + "</br>");
document.write(Iterator.next().value + "</br>");


/////////////////////////////////////////////////////////////////////////////
//Array.prototype.fill()
//changes all elements in an array to a static value

document.write(arr1.fill(1));


//Array.prototype.filter()
//creates a shallow copy of a portion of a given array

const result = arr2.filter(ele=> ele <10);
document.write("</br>" + result + "</br>");

////////////////////////////////////////////////////////////////////////////
//Array.prototype.find()
//returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function


const found = arr2.find((element) => element > 45);
document.write(found + "</br>");


///////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.findIndex()
//returns the index of the first element in an array that satisfies the provided testing function.

const isLargeNumber = elem => elem > 2;
document.write("</br>" + arr2.findIndex(isLargeNumber) + "</br>");


////////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.findLast()
//iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
const res = arr2.findLast(eleme => eleme > 5);
document.write("</br>" + res + "</br>");


///////////////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.forEach()
//executes a provided function once for each array element.

arr2.forEach(rele => document.write(rele));


///////////////////////////////////////////////////////////////////////////////////////////////////////

//Array.from()
//creates a new, shallow-copied Array instance from an iterable or array-like object.

document.write( "</br>" + Array.from("mohamed") + "</br>");


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.includes()
//determines whether an array includes a certain value among its entries

document.write(arr2.includes(10));


///////////////////////////////////////////////////////////////////////////////////////////////////////





