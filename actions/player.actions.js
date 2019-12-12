import { playerConstants as mc } from "../constants";

export const playerActions = {
    testPlayer
};

function testPlayer() {
    return { type: mc.PLAYER_TEST }
}
