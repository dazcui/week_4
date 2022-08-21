import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const UsersForm = ({ getAllUsers, openModal, closeModal, updateInfo, setUpdateInfo,handleCloseForm }) => {

    // if (!openModal) {return null}
    console.log(updateInfo);
    const defaultValue = {
        birthday: "",
        email: "",
        first_name: "",
        last_name: "",
        password: ""
    }

    const createUser = data => {
        const URL = `https://users-crud1.herokuapp.com/users/`
        axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
        reset(defaultValue)
    }

    const { register, reset, handleSubmit } = useForm()


    useEffect(() => {
        if (updateInfo) {
          reset(updateInfo)
        }
    
      }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
            axios.patch(URL, data)
                .then(res => {
                    console.log(res.data)
                    getAllUsers()
                })
                .catch(err => console.log(err))
            reset(defaultValue)
            setUpdateInfo()
        } else {
            createUser(data)
            reset(defaultValue)
        }
    }







    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
                <h2>{updateInfo ? 'Update user' : 'Create user'}</h2>
                <ul className='ul_form'>
                    <li>
                        <label htmlFor="first_name">Name:</label>
                        <input {...register('first_name')} type="text" id='first_name' />
                    </li>
                    <li>
                        <label htmlFor="last_name">Last name:</label>
                        <input {...register('last_name')} type="text" id='last_name' />
                    </li>
                    <li>
                        <label htmlFor="email">email:</label>
                        <input {...register('email')} type="email" id='email' />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input {...register('password')} type="password" id='password' />
                    </li>
                    <li>
                        <label htmlFor="birthday">Birthday:</label>
                        <input {...register('birthday')} type="date" id='birthday' />
                    </li>
                </ul>
                <div >
                    <button className='btn_form' onClick={closeModal} >{updateInfo ? 'Update user' : 'Create user'}</button>
                    <button className='btn_form' onClick={handleCloseForm}>Salir</button>
                </div>

            </form>
        </div>
    )

}

export default UsersForm