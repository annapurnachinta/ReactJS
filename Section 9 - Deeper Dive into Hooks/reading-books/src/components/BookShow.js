import {useState} from 'react'
import BookEdit from './BookEdit'
import useBooksContext from '../hooks/use-book-context'


function BookShow({book}) {
    const [showEdit, setShowEdits] = useState(false)
    const { deleteBookByID } = useBooksContext()

    const handleDeleteClick = () => {
        deleteBookByID(book.id)
    }

    const handleEditClick = () => {
        setShowEdits(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdits(false)
    }

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return <div className='book-show'>
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <div>{content}</div>
        <div className="actions">
            <button className='edit' onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>
}

export default BookShow