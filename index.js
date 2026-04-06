
let home = 0;
let guest = 0;

function add1home(){
       home += 1
       document.getElementById("score1").innerText = home
}

function add2home(){
       home += 2
       document.getElementById("score1").innerText = home 
}

function add3home(){
         home += 3
       document.getElementById("score1").innerText = home
}

function add1guest(){
        guest += 1
       document.getElementById("score2").innerText = guest
}

function add2guest(){
           guest += 2
       document.getElementById("score2").innerText = guest
}

function add3guest(){
           guest += 3
       document.getElementById("score2").innerText = guest
}

function reset(){
    home = 0;
    guest = 0;
    document.getElementById("score1").innerText = home
    document.getElementById("score2").innerText = guest
}
