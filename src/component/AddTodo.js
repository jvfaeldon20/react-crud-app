import React,{useState, useEffect, useRef} from 'react'

function AddTodo({onAdd}) {
const [title, setTitle] = useState('')
const inputRef = useRef(null)

const handleAdd = () => {
    onAdd(title)
    setTitle('')
}

useEffect(() => {
  inputRef.current.focus()
},[])

  return (
    <div className="add-todo-container">
        <input 
          className="form-input" 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title} 
          ref={inputRef} 
        />
        <button className='btn-add' onClick={handleAdd}>Add Todo</button>
    </div>
  )
}

export default AddTodo