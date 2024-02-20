import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'

// Reset functionlity usinf createAction
export const reset = createAction('app/reset')

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

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: movieSlice.reducer
    }
})

export {store}
export const {addSong, removeSong } = songsSlice.actions
// export const {addMovie, removeMovie, reset } = movieSlice.actions
export const {addMovie, removeMovie } = movieSlice.actions

// const startingState = store.getState()
// console.log(JSON.stringify(startingState));

// store.dispatch({
//     // type name matches up reducers function
//     type: 'song/addSong',
//     payload: 'New Song!'
// })

// const finalState = store.getState()
// console.log(JSON.stringify(finalState));
