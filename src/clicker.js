const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
const partnerLogo = document.querySelectorAll('.main__partners__logo img')
const result = Array.from(partnerLogo);
let logo = document.querySelector('.logo-wrap img')
let counter = 1;

partnerLogo[counter].style.opacity = 1;
const rightTurn = () =>{
       if(counter > (partnerLogo.length - 1 )){
        counter = 0;
    } else{
        counter = counter + 1
    }
 

    result[counter].style.opacity = 1;
    result.at(counter - 1).style.opacity = 0.3;

}
const lefttTurn = () =>{

    if(counter < 0){
        counter = result.length - 1;
    } else{
            counter --
    }
 

    result[counter].style.opacity = 1;
    if(counter < result.length - 1 ){
     result.at(counter + 1 ).style.opacity = 0.3;
    } else{
        result.at(0).style.opacity = 0.3;
    }

}
    
rightArrow.addEventListener('click', rightTurn)
leftArrow.addEventListener('click', lefttTurn)