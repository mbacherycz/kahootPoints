
const initialState = {
    bonus: 0,
    points: 0,
    allPoints: 0,

    countA: 0,
    countB: 0,
    countC: 0,
    countD: 0,

    bonusCountA: 0,
    bonusCountB: 0,
    bonusCountC: 0,
    bonusCountD: 0
}

const kahootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POINT':
            //console.log(action.payload)
            var points = state.points;
            var bonus = state.bonus;

            var countA = state.countA;
            var countB = state.countB;
            var countC = state.countC;
            var countD = state.countD;

            var bonusCountA = state.bonusCountA;
            var bonusCountB = state.bonusCountB;
            var bonusCountC = state.bonusCountC;
            var bonusCountD = state.bonusCountD;

            // logic for A
            if (action.payload === 'A') {
                bonusCountA = bonusCountA + 1;
                countA = countA + 1;
                points = points + 50;
                if (bonusCountA % 3 === 0) {
                    bonus = bonus + 100;
                    bonusCountA = 0;
                }
            }
            //for B
            if (action.payload === 'B') {
                bonusCountB = bonusCountB + 1;
                countB = countB + 1;
                points = points + 30;
                if (bonusCountB % 2 === 0) {
                    bonus = bonus + 90;
                    bonusCountB = 0;
                }
            }
            //for C
            if (action.payload === 'C') {
                bonusCountC = bonusCountC + 1;
                countC = countC + 1;
                points = points + 20;
                // + optional bonus
            }
            //for D
            if (action.payload === 'D') {
                bonusCountD = bonusCountD + 1;
                countD = countD + 1;
                points = points + 15;
                // + optional bonus
            }
            return {
                ...state,
                points,
                bonus,
                allPoints: points + bonus,
                bonusCountA,
                bonusCountB,
                bonusCountC,
                bonusCountD,

                countA,
                countB,
                countC,
                countD
            }
        //    
        case 'NEW_GAME':
            return {
                ...state,
                bonus: 0,
                points: 0,
                allPoints: 0,

                countA: 0,
                countB: 0,
                countC: 0,
                countD: 0,

                bonusCountA: 0,
                bonusCountB: 0,
                bonusCountC: 0,
                bonusCountD: 0
            }
        default:
            return state
    }
}

export default kahootReducer;