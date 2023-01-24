
//white variable
document.getElementById('my').innerHTML="&#9817";
var wporn=my.innerHTML;
document.getElementById('my').innerHTML="&#9814";
var wrook=my.innerHTML;
document.getElementById('my').innerHTML="&#9816";
var wknigth=my.innerHTML;
document.getElementById('my').innerHTML="&#9815";
var wbishop=my.innerHTML;
document.getElementById('my').innerHTML="&#9812";
var wking=my.innerHTML;
document.getElementById('my').innerHTML="&#9813";
var wqueen=my.innerHTML;

// black variable
document.getElementById('my').innerHTML="&#9818";
var bking=my.innerHTML;
document.getElementById('my').innerHTML="&#9819";
var bqueen=my.innerHTML;
document.getElementById('my').innerHTML="&#9820";
var brook=my.innerHTML;
document.getElementById('my').innerHTML="&#9821";
var bbishop=my.innerHTML;
document.getElementById('my').innerHTML="&#9822";
var bknight=my.innerHTML;
document.getElementById('my').innerHTML="&#9823";
var bporn=my.innerHTML;

my.innerHTML="";

var abc=0;
var secondclick=1;

function myFunction(i){


var piece=i.innerHTML;
var select=i.id;
console.log(i.id);

if(secondclick==2){

  document.getElementById(select).innerHTML=abc;
  secondclick=1;
}


else{


switch(piece){
  case bporn:
    abc=bporn;
    secondclick=2;
    i.innerHTML="";
break;
  //2
case wporn:
  abc=wporn;
  secondclick=2;
  i.innerHTML="";
break;
  //3
  case brook:
  abc=brook;

    secondclick=2;
i.innerHTML="";
  break;
//4
  case wknigth:
  abc=wknigth;

    secondclick=2;
i.innerHTML="";
  break;
  //5
  case wking:
  abc=wking;

    secondclick=2;
i.innerHTML="";
  break;
  //6
  case wbishop:
  abc=wbishop;

    secondclick=2;
i.innerHTML="";
  break;
  //7
  case wqueen:
  abc=wqueen;

    secondclick=2;
i.innerHTML="";
  break;
  //8
  case wrook:
  abc=wrook;

    secondclick=2;
i.innerHTML="";
  break;
  //9
  case bking:
  abc=bking;

    secondclick=2;
i.innerHTML="";
  break;
  //10
  case bknight:
  abc=bknight;

    secondclick=2;
i.innerHTML="";
  break;
  //11
  case bqueen:
  abc=bqueen;

    secondclick=2;
i.innerHTML="";
  break;
  //12
  case bbishop:
abc=bbishop;

  secondclick=2;
  i.innerHTML="";
    break;

  default:
  break;
}
console.log(abc);
}
}

function setpieae(d){

}






function blackporn(b){


var positiony=b.id.split('')[0];
var positionx=b.id.split('')[1];

var position;

var value=positionx.charCodeAt(0)+1;              //movement one step right forward
positionx=String.fromCharCode(value);

var value=positionx.charCodeAt(0)-1;              //movement one step left forward
positionx=String.fromCharCode(value);

var value=positiony.charCodeAt(0)+1;              //movement one step center forward
positiony=String.fromCharCode(value);
position= positiony+positionx;



document.getElementById(position).innerHTML=bporn;
b.innerHTML="";

 }

//JavaScript - Chess in browser
//Aditya Sundaresan, 2020
let lastmove = "";
let last2move = "";
let GameState = "";
let playerturnchange = False;
function timer(totalTimeinSecs) 
{
    let t = totalTimeinSecs;
    while (t > 0) 
    {
        setInterval(checkMove(), 1);
        if (playerturnchange === False) 
        {
            t--;
        } else 
        {
            break
        }
    }
    if(t===0)
    {
        GameState = "EndByTimeout"
    }
    let minutes = Math.floor(t / 60);
    let secs = t % 60;
    return t;
}

function checkMove()
{
    if (lastmove===last2move) {
        playerturnchange = True;
    } else {
        playerturnchange  = False;
    }
}


