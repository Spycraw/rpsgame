function choose(choice){
  console.log(choice);
  let result = document.getElementById("result");
  result.innerText = "You choose " + choice;
  let oppe = ["Rock","Paper","Scissor"];
  let ch = Math.floor(Math.random()*3);
  opponent.innerText = "Opponent choose " + oppe[ch];
  let out = document.getElementById("output");
  let opp = oppe[ch];
  if(choice === "Rock"){
    if(opp === "Paper"){
      out.innerText = "YOU LOST";
    }
    else if(opp === "Scissor"){
      out.innerText = "YOU WIN";
    }
    else{
      out.innerText = "TIE";
    }
  }
  if(choice == "Paper"){
    if(opp == "Scissor"){
      out.innerText= "YOU LOST";
    }
    else if(opp == "Rock"){
      out.innerText = "YOU WIN";
    }
    else{
      out.innerText = "TIE";
    }
  }
   if(choice == "Scissor"){
    if(opp == "Rock"){
      out.innerText= "YOU LOST";
    }
    else if(opp == "Paper"){
      out.innerText = "YOU WIN";
    }
    else{
      out.innerText = "TIE";
    }
   }  
}
