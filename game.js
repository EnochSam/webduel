let health1 = 20;
let health2 = 20;

displayHealth();

function attack(attacker){
    if(attacker == 1){
        health2--;
        if(health2 <= 0){
            kill(2);
        }
    }
    else{
        health1--;
        if(health1 <= 0){
            kill(1);
        }
    }

    displayHealth();
}

function displayHealth(){
    document.getElementById('health2').innerHTML = "Health: " + health2;
    document.getElementById('health1').innerHTML = "Health: " + health1;
}

function kill(char){
    let target;
    let winner;
    if(char == 1){
        target = document.getElementById("img1")
        winner = 2;
    }
    else{
        target = document.getElementById("img2")
        winner = 1;
    }

    target.src = "dead.jpg"

//    if(confirm("Player " + winner + " Wins!!! Do you want to play again?") == true){
//         location.reload();
//    }
//    else{
//         disableGame()
//    } 

   disableGame();
}

function disableGame(){
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
}