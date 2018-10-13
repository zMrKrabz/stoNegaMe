let pile1 = 3;
let pile2 = 3;
let pile3 = 3;

piles = [pile1, pile2, pile3];
namesOfPiles = ['pile1', 'pile2', 'pile3'];
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
                if (piles.indexOf(pile1) != -1){
                    return pile1;
                } else {
                    return valid;
                };
            
            case '2':
                if(piles.indexOf(pile2) != -1){
                    return pile2;
                } else {
                    return valid;
                };
            
            case '3':
                if (piles.indexOf(pile3) != -1){
                    console.log(ele);
                    console.log(pile3);
                    return pile3;
                } else {
                    return valid;
                };
            
            default: 
                console.log(ele);
                return valid;
    
            };
    }

    

    // validator
    pile = pile(ele);
    if (pile){
        let pileE = (pile) => {
            console.log(pile)
            // doesn't work past this line
            switch (ele){
                case '1': return pile1E;
                case '2': return pile2E;
                case '3': return pile3E;
                default: return "hey";
            };
        };

        // switch statement return undefined, doesn't seem cases are working
        pileEL = pileE(ele)
        pile--;
        if (pile < 1){
            piles.splice(piles.indexOf[pile], 1);
        }; // deletes from list if less than 1

        pileEL.innerHTMl=pile;

        gameOrder.push('user');
        let endgame = () => {
            if (piles == []){
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

        if (endgame()){
            console.log('The winner is ' + endgame())
            return true;
        };

        // line 77 thru line 80 logs the function instead of 'bot' or 'user'
        
        setTimeout(foo(), 3000);
        console.log(gameOrder);

        if (endgame()){
            console.log('The winner is ' + endgame())
            return true;
        }
    }
}
// monster
function foo(){
    // Chooses random pile from piles list. This avoids the need to check the pile, because
    // everything in the list is at least 1. Checkpile is only used after, so it can modify
    // the list.
    let randpile = namesOfPiles[Math.floor(Math.random()*namesOfPiles.length)];

    // Identifies what element is currently being used
    let pileE = (randpile) => {
        switch (randpile){
            case 'pile1': return pile1E;
            case 'pile2': return pile2E;
            case 'pile3': return pile3E;
        };
    };

    let pile = (randpile) => {
        switch (randpile){
            case 'pile1': return pile1;
            case 'pile2': return pile2;
            case 'pile3': return pile3;
        };
    };

    pile = pile(randpile);
    pileE = pileE(randpile);
    checkPile(pile);
    pile--;
    pileE.innerHTMl=pile;
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