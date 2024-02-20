import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../action'

const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        // 'movie' + / + 'addSong' = 'songaddSong
        addMovie(state, action){
            // console.log(state.length, 'addMovie function');
            state.push(action.payload)
        },
        // 'movie' + / + 'removeSong' = 'songremoveSong
        removeMovie(state, action){
            // action.payload = string, the song we want to remove
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action)=>{
            return []
        })
    }
})

export const {addMovie, removeMovie } = movieSlice.actions
export const moviesReducer = movieSlice.reducer