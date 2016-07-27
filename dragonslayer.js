//$('#run').click(function(dragonSlayer) {
        
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

//var dragonSlayer = function() {
while(slaying){
    if(youHit) {
        alert("You swing your sword and hit the dragon! You do " + damageThisRound + " damage.");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            alert("Critical hit! The dragon falls over at your feet and gasps one last breath.")
            slaying = false;
        } else {
            var youHit = Math.floor(Math.random() * 2);
        }
    } else { 
        alert("You didn't stand a chance! The dragon burps after swallowing you whole.");
        slaying = false;
    }
  };

    

