import {createContext, useState } from 'react'
import axios from 'axios'

const BooksContext = createContext();

function Provider({children}){
    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data);
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        const updateBook = [...books, response.data]
        setBooks(updateBook);
    }

    const deleteBookByID = async (id) => {
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

    const valueToShare = {
        books, createBook, editBookByID, deleteBookByID, fetchBooks 
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider}
export default BooksContext