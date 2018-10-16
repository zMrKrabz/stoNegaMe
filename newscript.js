let piles = [3,3,3];
let gameOrder = [];

function initialize(){
    pile1E = document.getElementById('pile1');
    pile2E = document.getElementById('pile2'); 
    pile3E = document.getElementById('pile3');
};

function main(ele){
    let cpile;
    let pile = (ele) => {
        switch(ele){
            case '1': 
                if (piles[0] > 0){
                    piles[0]--;
                    cpile = piles[0];
                    return pile1E;
                } else {
                    return false;
                };

            case '2': 
                if (piles[1] > 0){
                    piles[1]--;
                    cpile = piles[1];
                    return pile2E;
                } else {
                    return false;
                };

            case '3': 
                if (piles[2] > 0){
                    piles[2]--;
                    cpile = piles[2];
                    return pile3E;
                } else {
                    return false;
                };

            default: console.log("I'm broken");
        };
    };

    pile = pile(ele);
    pile.innerHTML = cpile;
    gameOrder.push('user');

    console.log(piles);

    if (testZero()){
        console.log(`the game has ended. ${gameOrder.pop()} has won`)
    };

    urk();

    if (testZero()){
        console.log(`the game has ended. ${gameOrder.pop()} has won`)
    };

};

function urk(){
    // initializes pile. While the chosen pile is 0, it will constantly choose a new pile.
    let pile = piles.indexOf(piles[Math.floor(Math.random() * piles.length)]);
    while (piles[pile] == 0){
        pile = piles.indexOf(piles[Math.floor(Math.random() * piles.length)]);
    };

    let cpile;

    let pileE = (pile) =>{
        switch(pile){
            case 0:
                piles[pile]--;
                cpile = piles[pile];
                return pile1E;

            case 1:
                piles[pile]--;
                cpile = piles[pile];
                return pile2E;

            case 2:
                piles[pile]--;
                cpile = piles[pile];
                return pile3E;
        };
    };

    pileE(pile).innerHTML=cpile;
    gameOrder.push("urk")
};

function testZero(){
    // will say that everything in the list is 0. Then, uses the for loop to 
    // prove that it isn't all 0. If it cannot prove that it is all 0,
    // it will return that all the values are 0.
    let allZero = 1;
    for (i=0;i < piles.length; ++i){
        if (piles[i] !== 0){
            allZero--;
            break;
        };
    };
    return allZero;
};