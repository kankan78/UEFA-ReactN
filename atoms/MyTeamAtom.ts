import { atom, selector } from 'recoil';

export const myPlayersState = atom({
    key: "myPlayersState",
    default: [] 
});

export const myFormationState = atom({
    key: "myFormationState",
    default: {
        "FWD": 3, "MID": 3, "DEF": 4, "GCK":1
    } 
});


const positions = ["FWD", "MID", "DEF", "GCK"] as string[];
export const myPlayersPosition = selector({
    key: "myPlayersPosition",
    get: ({ get }) => {
        const players = get(myPlayersState);

        const groupedPositions = {};

        positions.forEach(position => { 
            groupedPositions[position] = players.filter((player) => player.position === position) 
        });

        return groupedPositions;
    }
})
