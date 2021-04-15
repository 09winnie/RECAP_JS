var marks=40;
if(marks>=50){
    grade="pass"

}
else{
    grade="fail"
}
console.log(grade);
// ternary operator
var marks=75;
var grade=(marks>=50) ? "pass" :"fail"
console.log(grade);
// Immediately Invoked Function Expressions(IIFE)
(function student(){
    var marks=60;
    var grade=(marks<=50)
    ? "fail":"pass"
    console.log(grade);
})
();
var x=function (){
    return 20;
}
console.log(x())
function student(a){
    var a=55;
    function inner(y){
var y=45;
return y+a;
    }
    console.log(inner())
}student();
for (var i=0;i<=10;i++){
    console.log("You have a beautiful smile");
};
var student={
    jina:"Gracie",
    age:24,
    weight:56,

}
console.log(student.jina);
console.log(student.age);
console.log(student.weight);
console.log(`My name is ${student.jina} and i am ${student.age} years old.My weight is ${student.weight} kgs.`)

class TwigaFoods{
    constructor (foodItem,price,quantity){
this.food=foodItem;
this.price=price;
this.quantity=quantity;
    }
    getCost(){
        return `${this.quantity} Kgs of ${this.food} for KES ${this.price*this.quantity}`
    }

    
}
var foods1=new TwigaFoods("cucumbers",40,2)
console.log(foods1.getCost())

var foods2=new TwigaFoods("onions",100,1)
console.log(foods2.getCost())

var foods3=new TwigaFoods("tomatoes",50,3)
console.log(foods3.getCost())

var foods4=new TwigaFoods("kales",30,5)
console.log(foods4.getCost())

var foods5=new TwigaFoods("avocadoes",20,5)
console.log(foods5.getCost())