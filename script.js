let pile1 = 3;
let pile2 = 3;
let pile3 = 3;

let piles = [pile1, pile2, pile3];
let gameOrder = [];

function initialize(){
    pile1E = document.getElementById('pile1');
    pile2E = document.getElementById('pile2');
    pile3E = document.getElementById('pile3');
};

function subtract1(){
    if (returnPile(pile1)){
        pile1--;
        pile1E.innerHTML = pile1;
    } else {
        return false;
    };
};

function subtract2(){
    if (returnPile(pile2)){
        pile2--;
        pile2E.innerHTML = pile2;
    } else {
        return false;
    };
};

function subtract3(){
    if (returnPile(pile3)){
        pile3--;
        pile3E.innerHTML = pile3;
    } else {
        return false;
    };
};

// monster
function foo(){
    // chooses random pile.
    // if pile is 0, chooses new pile.
    let randpile = pile[Math.floor(Math.random()*pile.length)];
    randpile--;
    checkPile(randpile);
    gameOrder.append("bot");
};

// sees who went last, and declare that person the loser
function endgame(){
    if (piles = []){
        switch (gameOrder.pop()){
            case 'user':
                return "User";
            case "bot":
                return "Bot";
        }
    } else {
        return false;
    }
};

// use when everything is finished. Removes the pile if it's empty
function checkPile(pile){
    if (pile ==0) {
        iPile = piles.indexOf(pile);
        piles.splice(iPile, 1);
    };
};

// pass in pile to see if it's empty or not
function returnPile(pile){
    if (!(pile in piles)){
        return false;
    } else {
        return true;
    };
};