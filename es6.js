

function greet(name="default", age=12){
console.log(name,age)
}    
 greet("sujay",12333);


 //templet iterates
let one ="js"
 console.log(`sujay`
 ,`${one}`)

 //destructuring
 //-array
 //-objects

 const ourArray = ["java",123]
 
 const [age,na]=ourArray

 console.log(na,age)
 
const obj ={
    nam:"suja",
    ag:12
}
const{ag,nam}=obj
console.log(nam,ag)

//arrow function

const greaat=()=>{
    console.log("sujya")

}
greaat();


// this key word is very imp
const objee ={
    name:"sujay",
    hello:function(){
        console.log(this);
    },
    another:{
        name:"java",
        greeeet:function(){
            console.log("another",this)
        }
    }
};
console.log("outter",this);
//when we 
objee.hello();

objee.another.greeeet();

