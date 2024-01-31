import {useState, useEffect} from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'

function App() {
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        const updateBook = [...books, response.data]
        setBooks(updateBook);
    }

    const DeleteBookByID = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const deleteBook = books.filter((book) => { return book.id !== id })
        setBooks(deleteBook);
    }

    const editBookByID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })
        const editBook = books.map((book) => { 
            if(book.id === id){
                return {...book, ...response.data}
            }
            return book
        })
        setBooks(editBook);
    }

    return <div className='app'>
        <BookList books={books} onDelete={DeleteBookByID} onEdit={editBookByID}/>
        <BookCreate onSubmit={createBook} />
    </div>
}

export default App