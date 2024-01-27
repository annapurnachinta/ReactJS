import { useState } from 'react';

function BookEdit({ book, onSubmit, onEdit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title)
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title}/>
      <button className="button is-primary" onChange={handleChange} >Save</button>
    </form>
  );
}

export default BookEdit;
