// Action 1

// Reinforcements won't arrive for another 3 weeks. Your garrison of 300 troops will have to last until then.
var message = "Riefnroecemtn sow'n trairevf roa onhtre3 w eesk .oYrug rairos nfo3 00t orpo siwllh va eotl sa tnuit lhtne."; 
var message_array = Array.from(message);
var temp;

for (var i = 0; i < message_array.length; i++) {
	
    if(i == 0) {
    	document.write(message_array[i]);
    }
    
    else if(i%2 != 0){
    	if(i == message_array.length -1){
    		document.write(message_array[i]);
    	}
    	else {
        	temp = message_array[i]
        }
    }
    
    else {
    	document.write(message_array[i]);
        document.write(temp);
    }
} 

// Action 2
// Popup "Perfect, now is the time to strike! Assemble a mighty army that will outnumber the enemy 2 to 1!
//       "As the general, it is your job to monitor the status of your troops. Add a function that will 
//       "check the amount of soldiers in each squadron that are still alive."

class squadron {
    constructor(soldiers_alive) {
        this.soldiers_alive = 200;
    }
    
	// User will add this function! ***********************************************************************
    check_strength() {
        return this.soldiers_alive;
    }
	// *******************************************************************************************
    
    fight(enemies) {
    	this.soldiers_alive = this.soldiers_alive - enemies
		total_enemies = total_enemies - enemies                // edit this line so that the total amount of enemies only decreases if there are surviving soldiers
    }
}

// Action 3
// Create 3 instances of the squadron class and name them as you wish
var archers = new squadron();
var swordsmen = new squadron();
var spears = new squadron();

// Action 4
// Fight the enemy to the death! As the general, you must use strategy and not just strength to win the fight.
// Engage the enemy 20 soldiers at a time. After each attack, gauge how many of your soldiers are still alive.
// If less than 50 men in your squadron are surviving, use a new squadron to attack!

var total_enemies = 300;

var attacks = 1

// User will add all or part of this loop! ************************************************************************************
for(attacks = 1; archers.check_strength() > 50; attacks++){
	archers.fight(20)
    surviving = archers.check_strength();
	document.write(surviving + "<br>");
}
// *************************************************************************************************************************

document.write("Enemies: " + total_enemies)

// Action 5
// You've defeated the enemy, but a dragon appears and is guarding the castle! Only attack if you have atleast 100 troops left alive.

total_troops_left = archers.check_strength() + swordsmen.check_strength() + spears.check_strength();

if (total_troops_left > 100) {
	archers.attack_dragon();
	spears.attack_dragon();
	swordsmen.attack_dragon();
}

else { 
	archers.run();
	spears.run();
	swordsmen.run();
}




