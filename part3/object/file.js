
//assign method
const person = {
    firstName : "mohamed",
    lastName : "mahmoud",
    age : 23 ,
    number : 54554535354,
    email : "mohamed@gmail.com",
    fullName : function (){
        return this.firstName + " " + this.lastName;
    }
}
////////////////////////////////////////////////////////////////////////////

// assign method 
//method copies all enumerable own properties from one or more source object to a target object
const person2 = Object.assign({
    firstName : "ahmed",
    midName : "mohamed",
    lastName : "omran",
    age : 25
},person);

document.write (person2.firstName + "</br>");
document.write (person2.midName + "</br>");
document.write (person2.lastName + "</br>");
///////////////////////////////////////////////////////////////////////////////////////////////////////


// create method
//method creates a new object
const me = Object.create(person);


document.write(me.fullName(),
me.age);

//////////////////////////////////////////////////////////////////

// defineProperties method
//method defines new or modifies existing properties directly on an object
Object.defineProperties(person , {
    ID: {
        value : 546542435,
        writable: true
    }
});

document.write("</br>" + person.ID);

//////////////////////////////////////////////////////////////////

// entries method  returns an array of a given object's own enumerable string-keyed property [key, value] pairs
for(const [key , value] of Object.entries(person)){
    document.write(`</br> ${key} : ${value} </br>`);
}


///////////////////////////////////////////////////////////////////

//getOwnPropertyNames method
// returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

document.write("</br>" + Object.getOwnPropertyNames(person));


///////////////////////////////////////////////////////////////////

// object.is method 

document.write( "</br>" + Object.is("mohamed" , "ahmed")) ;


/////////////////////////////////////////////////////////////////////

//hasOwn method  
//determines whether two values are the same value.

document.write("</br>" + Object.hasOwn(person , 'firstName'));

/////////////////////////////////////////////////////////////////////

//Object.values
//returns an array of a given object's own enumerable property values

document.write("</br> " + Object.values(person) + "<br>");

/////////////////////////////////////////////////////////////////////

//freez method
//freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.

Object.freeze(person);

person.age = 55;

document.write(person.age + "</br>");


///////////////////////////////////////////////////////////////////////

//sealed method 
//seals an object. Sealing an object prevents extensions and makes existing properties non-configurable.

Object.seal(person);
person.number = 54545;

document.write(person.number + "</br>");

delete person.number; //cannot delete while method is sealed

document.write(person.number);


///////////////////////////////////////////////////////////////////////
//getOwnPropertyDescriptor method 
//returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).

const objdescribe = Object.getOwnPropertyDescriptor(person , 'age');

document.write(objdescribe.configurable);
document.write(objdescribe.value);