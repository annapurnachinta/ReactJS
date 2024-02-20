import {createSlice } from '@reduxjs/toolkit'
import { reset } from '../action'

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        // 'song' + / + 'addSong' = 'songaddSong
        addSong(state, action){
            // console.log(state.length, 'addSong function');
            // STATE IS NOT THE BIG STATE OBJECT
            // IN THE STORE
            // IT IS THE PEACE OF STATE MANAGED
            // BY THIS REDUCERS
            state.push(action.payload)
        },
        // 'song' + / + 'removeSong' = 'songremoveSong
        removeSong(state, action){
            // action.payload = string, the song we want to remove
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },
        // reset(state, action){
        //     return []
        // }
    },
    // extraReducers(builder) {
    //     builder.addCase(movieSlice.actions.reset, (state, action)=>{
    //         return []
    //     })
    // }

    extraReducers(builder) {
        builder.addCase(reset, (state, action)=>{
            return []
        })
    }
})

export const {addSong, removeSong } = songsSlice.actions
export const songsReducer = songsSlice.reducer