import {useState} from 'react'

function BookCreate({ onSubmit }) {
    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(title)
        setTitle('')
    }

    return <div className='book-create'>
        <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input value={title} onChange={handleChange} className='input' required/>
            <button className='button'>Create!</button>
        </form>
    </div>
}

export default BookCreate