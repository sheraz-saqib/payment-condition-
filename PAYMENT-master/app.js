

function sum(){
    let a = +document.querySelector(".a").value
    let border = document.querySelector("#b")
    let result = document.querySelector(".result")
    let age = document.querySelector(".age")

    if(a<0){
        result.innerHTML="your vlaue is valid"
        age.innerHTML=`age ${a}`
        border.style.borderStyle="solid"
    }
     else if(a>=1 && a<=5){
        result.innerHTML="your ticket is 75% off"
        age.innerHTML=`age ${a}`
    }
    else if(a>=5 && a<=15){
        result.innerHTML="your ticket is 60% off"
        age.innerHTML=`age ${a}`
    }
    else if(a>=16 && a<=50){
        result.innerHTML="your ticket is 100% off"
        age.innerHTML=`age ${a}`
    }
    else if(a>=51 && a<=60){
        result.innerHTML="your ticket is 50% off"
        age.innerHTML=`age ${a}`
    }
    else if(a>=61 && a<=70){
        result.innerHTML="your ticket is 25% off"
        age.innerHTML=`age ${a}`
    }
    else if(a>=71 && a<=80){
        result.innerHTML="your ticket is 70% off"
        age.innerHTML=`age ${a}`
    }
    else{
        result.innerHTML="stay at home"
        age.innerHTML=`age ${a}`
       

    }
};
// loop