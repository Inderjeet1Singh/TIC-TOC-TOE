const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const heading = document.getElementById("heading");
const alertBox = document.getElementById('customAlert');
const showAlertButton = document.getElementById('showAlert');
const closeAlertButton = document.getElementById('closeAlert');
const okButton = document.getElementById('okBtn');
const winPara = document.getElementById("winMessage");
let allBox = document.getElementsByClassName("Box");
const btn = document.getElementById("btn");
let playerTurn = 0;
let boxId = "";
let isDraw = true;
let winArray = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
function resetAllBox(){
   for(let i=0;i<allBox.length;i++){
    allBox[i].textContent = "";
   }
   playerTurn = 0;
}
btn.addEventListener('click',resetAllBox);
function findTheWhichBoxIsClicked(e){
        boxId = e.target.id;
}
for(let i=0;i<allBox.length;i++)
{
    allBox[i].addEventListener('click',findTheWhichBoxIsClicked);
}
function createWinMessage(){
    let newEle = document.createElement("p");
    heading.parentNode.insertBefore(newEle,heading);

}
function isAnyOneWin(){
    winArray.forEach((ele)=>{
       if(allBox[ele[0]].textContent!='' && allBox[ele[1]].textContent!='' && allBox[ele[2]].textContent!='')
       if(allBox[ele[0]].textContent==allBox[ele[1]].textContent && allBox[ele[0]].textContent==allBox[ele[2]].textContent){
        let whoWin = allBox[ele[0]].textContent;
        isDraw = false;
        setTimeout(function() {
            winPara.textContent = `Player ${whoWin} Win`;
            displayTheAlert();
            resetAllBox();
        }, 200);
       }
    });
}
function handler(){
    let boxNumber = document.getElementById(boxId);
    let boxContent = boxNumber.textContent;
    if(boxContent ==""){
    if(playerTurn%2==0){
        boxNumber.textContent = 'X';
        playerTurn++;
    }
    else{
        boxNumber.textContent = 'O';
        playerTurn++;
    }
    isAnyOneWin();
    if(playerTurn==9 && isDraw==true){
        winPara.textContent = `Its a Draw!`;
        displayTheAlert();
        resetAllBox();
    }
}
}
for(let i=0;i<allBox.length;i++)
    {
        allBox[i].addEventListener('click',handler);
    }

// Button script
var animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }
  // script for alert 
function displayTheAlert() {
    alertBox.style.display = 'block';
};
closeAlertButton.onclick = function() {
    alertBox.style.display = 'none';
};
okButton.onclick = function() {
    alertBox.style.display = 'none';
};
window.onclick = function(event) {
    if (event.target === alertBox) {
        alertBox.style.display = 'none';
    }
};


