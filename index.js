var random_dice=Math.floor(Math.random() * 6)+1;
var random_dice1=Math.floor(Math.random() * 6)+1;
if(random_dice>random_dice1){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(random_dice<random_dice1){
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
if(random_dice===1){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}
else if(random_dice===2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(random_dice===3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(random_dice===4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(random_dice===5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");

}
if(random_dice1===1){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
else if(random_dice1===2){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
else if(random_dice1===3){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
else if(random_dice1===4){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
else if(random_dice1===5){
    document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
else{
    document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");

}