import {createSlice, nanoid} from '@reduxjs/toolkit'

const CarsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        list: []
    },
    reducers: {
        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            // Assumption:
            // action.payload === {name: 'abc', cost: 120}
            state.list.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        removeCar(state, action){
            // Assumption:
            // action.payload === the id of the car we want to remove
            const updated = state.list.filter((car)=>{
                return car.id !== action.payload
            })
            state.list = updated
        }
    }
})

export const { changeSearchTerm, addCar, removeCar} = CarsSlice.actions
export const carsReducer = CarsSlice.reducer 