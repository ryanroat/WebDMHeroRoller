function rando(max) {
  return (Math.floor(Math.random() * Math.floor(max))+1);   // returns a 'random' number btwn 1 and max inclusive
}

function sortRolls(dice) {
  let n = dice.length;
  let c = 0;
  

}

function rollAHero() {

  let d6s = [];
  let stats = [];

  let report = document.getElementById("clickOutput"); 
  report.innerHTML = "Here are your stats in no particular order;<br>click above for another set.";
  //let rolls = document.getElementsByClassName("rolls");

  for (i=0; i<7; i++){
    for (j=0; j<4; j++) {
      d6s [j] = rando(6);
    }

    stat = sortRolls(d6s);
        
    document.write(d6s,stat);


  }
}