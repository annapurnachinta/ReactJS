import Button from '../components/Button'
import useCounter from '../hooks/use-counter'

function CounterPage({initialCount}) {
    const {count, increment} = useCounter(initialCount)

    return (
    <><h1>count is {count}</h1><Button primary onClick={increment}>Increment</Button></>
    )
}

export default CounterPage