import {configureStore} from '@reduxjs/toolkit'
import { usersReducer } from './slice/userSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { albumsApi } from './apis/AlbumsApi'
import { photosApi} from './apis/photosApi'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware)
    }
})

setupListeners(store.dispatch)

export * from './thunks/fetchUsers'
export * from './thunks/addUser'
export * from './thunks/deleteUser'
export { useFetchAlbumsQuery, useAddAlbumMutation, useDeleteAlbumMutation } from './apis/AlbumsApi'
export {useFetchPhotoQuery, useAddPhotoMutation, useDeletePhotoMutation } from './apis/photosApi'