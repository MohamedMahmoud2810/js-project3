var elements = [];
var numbers = Number(prompt("Enter the number of numbers that you want to calculate the sum and average : "));

for(var i=1 ; i<= numbers ; i++){
    var number = Number(prompt("Enter number " + i + " : "));
    elements.push(number);
}
alert(elements);

var sum = 0;

for(var j = 0 ; j<elements.length ; j++){
    
    sum += +elements[j];
}
var avg = sum / numbers

alert(" sum = " + sum);
alert("Average = " + avg);

