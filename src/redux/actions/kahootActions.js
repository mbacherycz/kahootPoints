export function addPoint(type) {
    return {
        type: 'ADD_POINT',
        payload: type
    }
}

export function newGame() {
    return {
        type: 'NEW_GAME'
    }
}