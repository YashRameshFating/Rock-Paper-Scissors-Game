let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
  const options=["rock","paper","scissors"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
}

const showwinner=(userwin,userchoice,comchoice)=>{
if(userwin){
      userscore++;
      userScore.innerText=userscore;
      msg.innerText=`You Win!${userchoice} beats ${comchoice}`;
      msg.style.backgroundColor="green";
}
else{
    compscore++;
    compScore.innerText=compscore;
    msg.innerText=`You Lose!${comchoice} beats ${userchoice}`;
    msg.style.backgroundColor="red";
}
}

const drawGame=()=>{
  msg.innerText="Game will draw!Play Again.";
  msg.style.backgroundColor="#081b31";
}

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const comchoice=genCompChoice();
    console.log("comp choice = ",comchoice);
    if(userchoice===comchoice){
      drawGame();
    }else{
      let userwin=true;
      if(userchoice==="rock"){
        userwin=(comchoice==="paper")?false:true;
      }else if(userchoice==="paper"){
        userwin=(comchoice==="scissors")?false:true;
      }else if(userchoice==="scissors"){
        userwin=(comchoice==="rock")?false:true;
      }
      showwinner(userwin,userchoice,comchoice);
    }

}

choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
     });
});