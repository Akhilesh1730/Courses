var img1 =  document.querySelector(".img1");
var img2 =  document.querySelector(".img2");
var randomNumber=Math.random();
randomNumber=randomNumber*6;
randomNumber=Math.floor(randomNumber)+1;

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

setMyImage(img1,randomNumber);
setMyImage(img2,randomNumber2);


function setMyImage(obj,num){
  switch (num) {
    case 1:
      obj.setAttribute("src","images/dice1.png");
        break;
    case 2:
    obj.setAttribute("src","images/dice2.png");
     break;

    case 3:
    obj.setAttribute("src","images/dice3.png");
     break;

    case 4:
    obj.setAttribute("src","images/dice4.png");
     break;

    case 5:
    obj.setAttribute("src","images/dice5.png");
     break;

    case 6:
    obj.setAttribute("src","images/dice6.png");

      break;
    default:

  }
}

img2.classList.add("")
