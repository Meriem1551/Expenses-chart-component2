let thirdBar=document.getElementById('third');
let ThirdPrice=document.getElementById('third-price');

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


function showPrice(e){
    const priceElement = e.querySelector('.price');
    priceElement.style.visibility = "visible";
    e.style.backgroundColor="hsl(10, 82%, 75%)"
    e.style.cursor="pointer"
}
function hidePrice(e){
    const priceElement = e.querySelector('.price');
    priceElement.style.visibility = "hidden";
    e.style.backgroundColor="hsl(10, 79%, 65%)"
}

