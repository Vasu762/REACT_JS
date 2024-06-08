import React, { useState } from 'react'

const Update_Array = () => {
  const [name, setName] = useState('')
  const [profile, setProfile] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [editedName, setEditedName] = useState('')

  const handleAdd = () => {
    if (name.trim() !== '') {
      setProfile([
        ...profile,
        {
          id: profile.length + 1,
          name: name.trim()
        }
      ])
      setName('')
    }
  }

  const handleDelete = (id) => {
    setProfile(profile.filter(item => item.id !== id))
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    setEditedName(profile[index].name)
  }

  const handleUpdate = (id) => {
    setProfile(profile.map(item => {
      if (item.id === id) {
        return {
          ...item, name: editedName.trim()
        }
      }
      return item
    }))
    setEditIndex(null)
    setEditedName('')
  }

  return (
    <div className='m-4'>
      <input
        className='p-2 border-2 border-solid border-black'
        value={name}
        onChange={(e) => setName(e.target.value)
        }
      />
      <button className='btn p-2 m-2  bg-red-800' onClick={handleAdd}>Submit</button>

      <ul>
        {profile.map((data, index) => (
          <li key={data.id}>
            {editIndex === index ? (
              <>
                <input
                  className='p-2 border-2 border-solid border-black'
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)
                  }
                />
                <button className='btn p-2 m-2' onClick={() => handleUpdate(data.id)
                }>Update</button>
              </>
            ) : (
              <>
                {data.name}
                <button className='btn p-2 m-2' onClick={() => handleEdit(index)}>Edit</button>
                <button className='btn p-2 m-2' onClick={() => handleDelete(data.id)
                }>Delete</button>
              </>
            )}
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default Update_Array
