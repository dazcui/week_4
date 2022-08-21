import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [openModal, setOpenModal] = useState(false)



  const getAllUsers = () => {
    const URL = `https://users-crud1.herokuapp.com/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }




  useEffect(() => {
    const URL = `https://users-crud1.herokuapp.com/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleOpenForm=()=>{
    setOpenModal(true)
  }
const handleCloseForm = ()=>{
  setOpenModal(false)
}




  return (
    <div className="App">
      <div className='App_title'>
        <div>
          <h2>Users</h2>
        </div>
        <div>
          <button onClick={handleOpenForm} >+ Create a new form </button>
        </div>
      </div>

      <div className='App_list'>
        <div className={openModal?'App_list_opem':'App_list_none'}>
          <UsersForm
            getAllUsers={getAllUsers}
            openModal={openModal}
            closeModal={() => setOpenModal(false)}
            updateInfo={updateInfo}
            setUpdateInfo={setUpdateInfo}
            handleCloseForm={handleCloseForm}

          />
        </div>

        <div className='App_users'>
          {
            users?.map((user) => (
              <UsersList
                user={user}
                key={user.id}
                getAllUsers={getAllUsers}
                setUpdateInfo={setUpdateInfo}
                handleOpenForm={handleOpenForm}
              />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default App
