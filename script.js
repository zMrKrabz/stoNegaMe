let pile1 = 3;
let pile2 = 3;
let pile3 = 3;

piles = [pile1, pile2, pile3];
gameOrder = [];

function initialize(){
    pile1E = document.getElementById('pile1');
    pile2E = document.getElementById('pile2'); 
    pile3E = document.getElementById('pile3');
};

function main(ele){
    let pile = (ele) => {

        let valid = false;
        // Passes in e, sees which element is the current pile
        switch(ele){
            // Validates if pile is true
            case '1':
                if (pile1 in piles){
                    return pile1;
                } else {
                    return valid;
                };
            
            case '2':
                if(pile2 in piles){
                    return pile2;
                } else {
                    return valid;
                };
            
            case '3':
                if (pile3 in piles){
                    return pile3;
                } else {
                    return valid;
                };
            
            default: return valid;
    
            };
    }

    // validator
    pile = pile(ele)
    if (pile){
        pile--;
        if (pile < 1){
            piles.splice(piles.indexOf[pile], 1)
        } // deletes from list if less than 1
        let pileE = (pile) => {
            switch (pile){
                case pile == pile1: return pile1E;
                case pile == pile2: return pile2E;
                case pile == pile3: return pile3E;
            };
        };

        pileE(pile).innerHTMl=pile;

        gameOrder.push('user');
        let endgame = () => {
            if (piles = []){
                switch (gameOrder.pop()){
                    case 'user':
                        return "User";
                    case "bot":
                        return "Bot";
                }
            } else {
                return false;
            };
        };

        // lines 60 thru lines 70 always returns true
        // should return false

        if (endgame()){
            console.log('The winner is ' + endgame)
            return true;
        }

        // line 77 thru line 80 logs the function instead of 'bot' or 'user'
        
        setTimeout(foo(), 3000);

        if (endgame()){
            console.log('The winner is ' + endgame)
            return true;
        }
    }
}
// monster
function foo(){
    // Chooses random pile from piles list. This avoids the need to check the pile, because
    // everything in the list is at least 1. Checkpile is only used after, so it can modify
    // the list.
    let randpile = pile[Math.floor(Math.random()*pile.length)];

    // Identifies what element is currently being used
    let pileE = (randpile) => {
        switch (randpile){
            case randpile == pile1: return pile1E;
            case randpile == pile2: return pile2E;
            case randpile == pile3: return pile3E;
        };
    };
    randpile--;
    pileE(randpile).innerHTMl=randpile;
    checkPile(randpile);
    gameOrder.push("bot");
};

// sees who went last, and declare that person the loser
function endgame(){
    if (piles == []){
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
    if (pile == 0) {
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