function rando(max) {
  return (Math.floor(Math.random() * Math.floor(max))+1);   // returns a 'random' number btwn 1 and max inclusive
}

function sortRolls(dice) {
  let n = dice.length;
  let ae = n - 1; //array end (length - 1)
  let swap,die = 0;
  
  for (let i=0;i<n;i++) {
    die = dice[i];
    for (let j = i + 1; j < n; j++) {
      if (die < dice[j]) {
        swap = die;
        die = dice[j];
        dice[j] = swap;
      }
    }
  }

  return dice[0]+dice[1]+dice[2];
}

function rollAHero() {

  let d6s = [];
  let stats = [];

  let report = document.getElementById("clickOutput"); 
  report.innerHTML = "Here are your stats in no particular order;<br>click above for another set.";
    for (i=0; i<7; i++){
      for (j=0; j<4; j++) {
        d6s [j] = rando(6);
      } 
    stat = sortRolls(d6s);
    document.write(d6s," ",stat," ");
  }
}