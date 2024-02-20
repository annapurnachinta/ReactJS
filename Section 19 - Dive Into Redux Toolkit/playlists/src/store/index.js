import { configureStore } from '@reduxjs/toolkit'
import {songsReducer, addSong, removeSong } from './slices/songsSlice'
import {moviesReducer, addMovie, removeMovie} from './slices/moviesSlice'

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
})

export {store}
export { addMovie, removeMovie, addSong, removeSong  }

// const startingState = store.getState()
// console.log(JSON.stringify(startingState));

// store.dispatch({
//     // type name matches up reducers function
//     type: 'song/addSong',
//     payload: 'New Song!'
// })

// const finalState = store.getState()
// console.log(JSON.stringify(finalState));
