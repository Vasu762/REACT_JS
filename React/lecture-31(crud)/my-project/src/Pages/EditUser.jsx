import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditUser = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    age: '',
    profession: '',
    number: ''
  })

  const loadUserWithId = async () => {
    await axios.get(`http://localhost:3000/User/${id}`)
    .then((r)=>{
      setUser(r.data)
    })
  }
  useEffect(() => {
    loadUserWithId();
  },[])

  const onSubmitEditUser =  (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/User/${id}`, user).then((e) => {
      navigate('/')
    })
  }

  


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm" onSubmit={onSubmitEditUser}>
        <h1 className="text-2xl font-bold mb-4 text-center">Edit User</h1>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={user.firstname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({...user, firstname:e.target.value})}
          />
          {/* {...formik.getFieldProps('firstname')} */}
          {/* {formik.touched.firstname && formik.errors.firstname ? (
            <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
          ) : null} */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name='lastname'
            value={user.lastname}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, lastname:e.target.value })}
          />
          {/* {...formik.getFieldProps('lastname')} */}
          {/* {formik.touched.lastname && formik.errors.lastname ? (
            <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
          ) : null} */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={user.age}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, age:e.target.value })}
          />
          {/* {...formik.getFieldProps('age')} */}
          {/* {formik.touched.age && formik.errors.age ? (
            <div className="text-red-500 text-sm">{formik.errors.age}</div>
          ) : null} */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profession">
            Profession
          </label>
          <input
            type="text"
            id="profession"
            value={user.profession}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, profession:e.target.value })}
          />
          {/* {...formik.getFieldProps('profession')} */}
          {/* {formik.touched.profession && formik.errors.profession ? (
            <div className="text-red-500 text-sm">{formik.errors.profession}</div>
          ) : null} */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            type="tel"
            value={user.number}
            id="mobile"
            name='number'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setUser({ ...user, number:e.target.value })}
          />
          {/* {...formik.getFieldProps('mobile')} */}
          {/* {formik.touched.mobile && formik.errors.mobile ? (
            <div className="text-red-500 text-sm">{formik.errors.mobile}</div>
          ) : null} */}
        </div>
        <div className='mb-4'>
          <label htmlFor="image" className="text-base font-medium text-gray-900">Image</label>
          <div className="mt-2">
            <input
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="file"
              placeholder="image"
              id="image"
              name='image'
              // value={user.image}
              // onChange={handleImageChange  }
            />
          </div>
        </div>

        <button
          type="submit"
          className=" bg-gray-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Edit User
        </button>

        <Link to='/'>
          <button
            type="submit"
            className=" bg-gray-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
          >
            back To Home
          </button>
        </Link>


      </form>
    </div>
  );
};

export default EditUser;
