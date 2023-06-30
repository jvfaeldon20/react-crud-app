import React,{useState} from 'react'
function TableRow({todo, onDelete, onEdit, index}) {
const [isEditing, setIsEditing] = useState(false)
const [editedTitle, setEditedTitle] = useState(todo.title)

const handleDelete = (id) => {
    onDelete(id)
}

const handleSave = () => {
    onEdit(todo.id, {title: editedTitle})
    setIsEditing(false)
}

  return (
    <tr>
        <td>{index+1}</td>
        <td>
            {
                isEditing ? (
                    <input className="form-input" type = "text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
                ) : (
                    todo.title
                )
            }
        </td>
        <td>{todo.completed ? 'Yes': 'No'}</td>
        <td>
            {
                isEditing ? (
                    <button className='btn-save' onClick={handleSave}>Save</button>
                ) : (
                    <button className='btn-edit' onClick={() => setIsEditing(true)}>Edit</button>
                )
            }
        </td>
        <td>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </td>
    </tr>
  )
}

export default TableRow