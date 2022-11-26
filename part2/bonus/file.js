var shape = prompt ("Enter The Shape That You Want To Calc The Area For : ");
const pie = 3.14;



function Circle(){
    var radious = prompt("Enter The Radious : ");
    const area = pie*Math.pow(radious , 2);
    alert("The Area Of the Circle Is : " + area);
}

function Triangle(){
    var base = prompt("Enter The Triangle Base : ");
    var height = prompt ("Enter The Triangle Height : ");
    const area = 0.5 * base * height;
    alert("The Area Of the Triangle Is : " + area);
}

function Square(){
    var LengthOfSide = prompt("Enter The square Length Of Side : ");
    const area = Math.pow(LengthOfSide , 2);
    alert("The Area Of the Square Is : " + area);
}

function Rectangle(){
    var length = prompt("Enter The Rectangle Length : ");
    var width = prompt ("Enter The Rectangle Width : ");
    const area = length * width;
    alert("The Area Of the Rectangle Is : " + area);
}

function Parallelogram(){
    var base = prompt("Enter The Parallelogram base : ");
    var vertical_height = prompt ("Enter The Parallelogram vertical_height : ");
    const area = base * vertical_height;
    alert("The Area Of the Parallelogram Is : " + area);
}

function Trapezium (){
    var length_of_side = Number(prompt("Enter The Trapezium side : ")) ;
    var length_of_other_side = Number(prompt("Enter The Trapezium other side : ")) ;
    var height = Number(prompt("Enter The Trapezium height : ")) ;
    const area = (0.5*(length_of_side + length_of_other_side) * height);
    alert("The Area Of the Trapezium Is : " + area);

}


function Ellipse(){
    var  minor_axis = prompt("Enter The half of minor axis: ");
    var major_axis = prompt("Enter The half of major axis: ");
    const area = pie * minor_axis * major_axis;
    alert("The Area Of the Ellipse Is : " + area);
}

var stop = false;

do{
    if(shape == "circle"){
        Circle();
    }
    else if(shape == "triangle"){
        Triangle();
    }
    else if(shape == "square"){
        Square();
    }
    else if(shape == "rectangle"){
        Rectangle();
    }
    else if(shape == "parallelogram"){
        Parallelogram();
    }
    else if(shape == "trapezium"){
        Trapezium();
    }
    else if(shape == "ellipse"){
        Ellipse();
    }
    else{
        alert("Wrong Shape ");
        stop =true;
    }
}
while(!stop);

