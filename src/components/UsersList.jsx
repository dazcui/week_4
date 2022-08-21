import React from 'react'
import axios from 'axios'

const UsersList = ({ user, getAllUsers, setUpdateInfo,handleOpenForm }) => {


  const deleteUser = () => {
    const URL = `https://users-crud1.herokuapp.com/users/${user.id}`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))

  }

  const getInfoUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()
  }



  return (
    <div className='list'>
      
      <div className='list_user'>
        <hr />
        <h2>{user["first_name"]} {user["last_name"]}</h2>
        <p>EMAIL </p>
        <p><b>{user.email}</b></p>
        <p>BIRTHDAY</p>
        <p> <b>{user.birthday}</b></p>
      </div>
      <div className='list_btn'>
        <button onClick={deleteUser}  className='delete_btn'><img src='/delete_FILL0_wght400_GRAD0_opsz48.svg'/></button>
        <button onClick={getInfoUpdate} className='up_btn'><img src='/edit_FILL0_wght400_GRAD0_opsz48.svg'/></button>
      </div>
    </div>
  )
}

export default UsersList