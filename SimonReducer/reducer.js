import { ActionSheetIOS } from "react-native";
import { combineReducers } from 'redux';

const defaultState = {
    gameObjects: [
        { color: 'green', index: 0, sound: 'sound' },
        { color: 'red', index: 1, sound: 'sound' },
        { color: 'yellow', index: 2, sound: 'sound' },
        { color: 'blue', index: 3, sound: 'sound' }],
    computerColors: [],
    currentIndex: 0
};
const colorReducer = (state = defaultState, action) => {
    console.log("start",action)
    switch (action.type) {
        // Add color to the computer colors array
        // Check if user colors are even the computer colors
        case 'RESET_GAME':
            return {
                ...state,
                computerColors: [],
                currentIndex: 0
            }
        case 'TURN_OVER':
            return {
                ...state,
                computerColors: [...state.computerColors, action.payload],
                currentIndex: 0
            }
        
        case 'INCREMENT_INDEX':
            return {
                ...state,
                currentIndex: state.currentIndex + 1
            }
        
        case 'RESET_INDEX':
            return {
                ...state,
                currentIndex: 0
            }
        case 'RESET_COLORS':
            return {
                ...state,
                computerColors: []
            }
        case 'UPDATE_COLOR':
            const updateGameObjects = gameObjects.map(t => {
                if (t.index === action.payload.index)
                    return { ...t, color: action.payload.color };
                return t;
            })
            return {
                ...state,
                gameObjects: updateGameObjects
            }
        case 'NEW_GAME':
            return {
                ...state,
                computerColors: [action.payload]
            }
        default:
            return state;
    }
}

export default colorReducer;