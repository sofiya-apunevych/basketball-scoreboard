let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let scoreHomeJS = 0
let scoreGuestJS = 0

let winner = document.getElementById("winner")

function addOneHome(){
    scoreHomeJS+=1
    scoreHome.textContent = scoreHomeJS
    //winner.innerHTML = "Start again!!"
}

function addOneGuest(){
    scoreGuestJS+=1
    scoreGuest.textContent = scoreGuestJS
     //winner.innerHTML = "Start again!!"
}


function addTwoHome(){
    scoreHomeJS+=2
    scoreHome.textContent = scoreHomeJS
     //winner.innerHTML = "Start again!!"
}

function addTwoGuest(){
    scoreGuestJS+=2
    scoreGuest.textContent = scoreGuestJS
     //winner.innerHTML = "Start again!!"
}

function addthreeHome(){
    scoreHomeJS+=3
    scoreHome.textContent = scoreHomeJS
     //winner.innerHTML = "Start again!!"
}

function addthreeGuest(){
    scoreGuestJS+=3
    scoreGuest.textContent = scoreGuestJS
     //winner.innerHTML = "Start again!!"
}


 

function gameOver(){
   
    if(scoreGuestJS > scoreHomeJS)
        winner.innerHTML = "Guest win!!! CONGRATS!!"
    if(scoreGuestJS == scoreHomeJS)
    winner.innerHTML ="It was a draw!!!"
    
    if(scoreHomeJS > scoreGuestJS)
       winner.innerHTML = "HOME win!!! CONGRATS!!"
  
    
    
    
    
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    
    scoreGuestJS = 0
    scoreHomeJS = 0
    //setTimeout(winner.innerHTML = "Start again!!", 5000)
}

