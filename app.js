let FirstPrice=document.getElementById('first-price');
let SecondPrice=document.getElementById('second-price');
let ThirdPrice=document.getElementById('third-price');
let FourthPrice=document.getElementById('fourth-price');
let FifthPrice=document.getElementById('fifth-price');
let SixthPrice=document.getElementById('sixth-price');
let SeventhPrice=document.getElementById('seventh-price');
let firstBar=document.getElementById('first');
let secondBar=document.getElementById('second');
let thirdBar=document.getElementById('third');
let fourthBar=document.getElementById('fourth');
let fifthBar=document.getElementById('fifth');
let sixthBar=document.getElementById('sixth');
let seventhBar=document.getElementById('seventh');

firstBar.addEventListener('mouseover',showFirst)
function showFirst(){
    FirstPrice.style.visibility="visible";
    firstBar.style.backgroundColor="hsl(9, 91%, 77%)"
    firstBar.style.cursor="pointer"
}
firstBar.addEventListener('mouseout',hideFirst)
function hideFirst(){
    FirstPrice.style.visibility="hidden";
    firstBar.style.backgroundColor="hsl(10, 79%, 65%)"
}
secondBar.addEventListener('mouseover',showsecond)
function showsecond(){
    SecondPrice.style.visibility="visible";
    secondBar.style.backgroundColor="hsl(9, 91%, 77%)"
   secondBar.style.cursor="pointer"

}
secondBar.addEventListener('mouseout',hidesecond)
function hidesecond(){
    SecondPrice.style.visibility="hidden";
    secondBar.style.backgroundColor="hsl(10, 79%, 65%)"
}
thirdBar.addEventListener('mouseover',showthird)
function showthird(){
    ThirdPrice.style.visibility="visible";
    thirdBar.style.backgroundColor="hsl(186, 53%, 78%)"
    thirdBar.style.cursor="pointer"

}
thirdBar.addEventListener('mouseout',hidethird)
function hidethird(){
    ThirdPrice.style.visibility="hidden";
    thirdBar.style.backgroundColor="hsl(186, 34%, 60%)"
}
fourthBar.addEventListener('mouseover',showfourth)
function showfourth(){
    FourthPrice.style.visibility="visible";
    fourthBar.style.backgroundColor="hsl(9, 91%, 77%)"
        fourthBar.style.cursor="pointer"

}
fourthBar.addEventListener('mouseout',hideFourth)
function hideFourth(){
    FourthPrice.style.visibility="hidden";
    fourthBar.style.backgroundColor="hsl(10, 79%, 65%)"
}
fifthBar.addEventListener('mouseover',showFifth)
function showFifth(){
    FifthPrice.style.visibility="visible";
    fifthBar.style.backgroundColor="hsl(9, 91%, 77%)"
        fifthBar.style.cursor="pointer"

}
fifthBar.addEventListener('mouseout',hideFifth)
function hideFifth(){
    FifthPrice.style.visibility="hidden";
    fifthBar.style.backgroundColor="hsl(10, 79%, 65%)"
}
sixthBar.addEventListener('mouseover',showsixth)
function showsixth(){
    SixthPrice.style.visibility="visible";
    sixthBar.style.backgroundColor="hsl(9, 91%, 77%)"
       sixthBar.style.cursor="pointer"

}
sixthBar.addEventListener('mouseout',hidesixth)
function hidesixth(){
    SixthPrice.style.visibility="hidden";
    sixthBar.style.backgroundColor="hsl(10, 79%, 65%)"
}
seventhBar.addEventListener('mouseover',showseventh)
function showseventh(){
    SeventhPrice.style.visibility="visible";
    seventhBar.style.backgroundColor="hsl(9, 91%, 77%)"
        seventhBar.style.cursor="pointer"

}
seventhBar.addEventListener('mouseout',hideseventh)
function hideseventh(){
    SeventhPrice.style.visibility="hidden";
    seventhBar.style.backgroundColor="hsl(10, 79%, 65%)"
}