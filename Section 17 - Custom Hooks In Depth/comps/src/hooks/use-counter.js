import {useState, useEffect} from 'react'

function useCounter(init) {
    const [count, setCount] = useState(init)

    useEffect(() => {
        console.log(count);
    },[count])

    const increment = () => {
        setCount(count+1)
    }
    
    return {
        count,
        increment
    }
}

export default useCounter