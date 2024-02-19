import { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'
import {produce} from 'immer'

const INCREMENT_COUNT = 'increment'
const HANDLECHANGE = 'handleChange'
const DECREMENT_COUNT = 'decrement'
const HANDLESUBMIT = 'handleSubmit'

const reducer = (state, action) => {
    // without immer
    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count +1
    //         }
    //     case HANDLECHANGE:
    //         return {
    //             ...state,
    //             ValueToAdd: action.payload
    //         }
    //     case DECREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count -1
    //         }
    //     case HANDLESUBMIT:
    //         return {
    //             ...state,
    //             count: state.count + state.ValueToAdd,
    //             ValueToAdd: 0
    //         }
    //     default:
    //         return state
    // }

    // with immer
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1
            return
        case DECREMENT_COUNT:
            state.count = state.count - 1
            return
        case HANDLECHANGE:
            state.ValueToAdd = action.payload
            return
        case HANDLESUBMIT:
            state.count = state.count + state.ValueToAdd
            state.ValueToAdd =0
            return
        default:
            return
    }
}

function CounterPage({initialCount}) {

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        ValueToAdd: 0
    })

    console.log(state);

    const increment = ()=>{
        dispatch({
            type: INCREMENT_COUNT
        })
    }

    const decrement = ()=>{
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleChange = (event) =>{
        const value = parseInt(event.target.value) || 0
        dispatch({
            type: HANDLECHANGE,
            payload: value
        })
    } 
    
    const handleSubmit = (event) =>{
        event.preventDefault()

        dispatch({
            type: HANDLESUBMIT,
        })
    }

    return (<><Panel className='m-3'>
            <h1 className='text-lg'>count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button primary onClick={increment}>Increment</Button>
                <Button primary onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input value={state.ValueToAdd || ''} onChange={handleChange} type='number' className='p-1 m-3 bg-gray-50 border border-gray-300'/>
                <Button>Add it!</Button>
            </form>
    </Panel></>
    )
}

export default CounterPage