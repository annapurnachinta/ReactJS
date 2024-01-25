import { useState } from 'react'
import './SearchBar.css'

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => { 
        event.preventDefault()
        onSubmit(term)
    }

    const handleChange = (event) => {
        // setTerm(event.target.value.replace(/[a-z]/, ''))
        setTerm(event.target.value)

    }

    return <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            {/* confirm your search: {term}  */}
            {/* <br /> */}
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange} />
            {/* <p>{term.length < 3 && 'Term should be longer'}</p> */}
        </form>
    </div>
}

export default SearchBar