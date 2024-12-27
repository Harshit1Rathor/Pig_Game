'use strict';

    let activePlayer = 1;
function start(){


    let rollDiceBtn = document.querySelector(".btn--roll");
    let holdBtn = document.querySelector(".btn--hold");
    let newBtn = document.querySelector(".btn--new");

    let currentScore1 = 0;
    let currentScore2 = 0;
    let score1 = 0;
    let score2 = 0; 


    const player1 = document.querySelector(".player--0");
    const player2 = document.querySelector(".player--1");

    document.getElementById("current--0").textContent = currentScore1;
    document.getElementById("current--1").textContent = currentScore2;
    document.getElementById("score--0").textContent = score1;
    document.getElementById("score--1").textContent = score2;

    function changePlayer(){
        currentScore1 = 0;
        currentScore2 = 0;
        document.getElementById("current--0").textContent = currentScore1;
        document.getElementById("current--1").textContent = currentScore2;
        if(activePlayer === 1){
            activePlayer = 2;
            player1.classList.remove("player--active");
            player2.classList.add("player--active");
            
        }else if(activePlayer === 2){
            activePlayer = 1;
            player2.classList.remove("player--active");
            player1.classList.add("player--active");
        }
    

    }

    rollDiceBtn.addEventListener("click",()=>{
            
        function random(){
            return Math.floor(Math.random() * 6)+1;
        }
        let dice = random();
    
    
        let imageNo = `dice-${dice}.png`;
    
        document.querySelector(".dice").setAttribute("src", imageNo);

        if(activePlayer === 1){

            if(dice===1){
                // currentScore1 = 0;
                document.getElementById("current--0").textContent = currentScore1;
                changePlayer();
            }else{
                currentScore1 += dice;
                document.getElementById("current--0").textContent = currentScore1;
            }
        }else{
            if(dice===1){
                // currentScore2 = 0;
                document.getElementById("current--1").textContent = currentScore2;
                changePlayer();
            }else{
                currentScore2 += dice;
                document.getElementById("current--1").textContent = currentScore2;
            }
        }    
    });

    holdBtn.addEventListener("click",()=>{
        score1 = score1 + currentScore1;
        score2 = score2 + currentScore2;
        if(score1>=100){
            document.getElementById("name--0").textContent = "Winner!";
            rollDiceBtn.disabled = true;
            holdBtn.disabled = true;
            player2.classList.remove("player--active");
            player1.classList.add("player--active");
        }else if(score2>=100){
            document.getElementById("name--1").textContent = "Winner!";
            rollDiceBtn.disabled = true;
            holdBtn.disabled = true;
            player2.classList.add("player--active");
            player1.classList.remove("player--active");
        }
        document.getElementById("score--0").textContent = score1;
        document.getElementById("score--1").textContent = score2;
        if(score1<100 && score2<100){
            changePlayer();
        }
        
    })


    

    


    

};

start();

newBtn.addEventListener("click", start());