import { createSlice } from "@reduxjs/toolkit";
import { GAMES } from "../../GAMES";
import { uuid } from "uuidv4";

const initialState = {
    gamesArray: GAMES
}

const gamesSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        AddGame: (state, action) => {
            const newGame = {
                id: uuid(),
                ...action.payload
            }
            state.gamesArray.push(newGame);
        }
    }
})