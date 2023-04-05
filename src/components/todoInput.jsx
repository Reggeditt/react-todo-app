import { useState } from 'react';

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  // ...
  const handleSubmit = (e) => {
    console.log(Boolean(title.trim()))
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Add Todo...'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
        <input type='submit' value='Submit' />
      </form>
      <span>{message}</span>
    </>
  );
};
export default InputTodo;

