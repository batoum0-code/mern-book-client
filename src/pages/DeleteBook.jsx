import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const DeleteBook = () => {

const [laoding , setLoading] = useState(false);


const navigate = useNavigate();
const {id} = useParams();
  // delete book function 

  const handleDeleteBook = () => {

    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(
      res=>{console.log(`book deleted success fully : ${res.data}`);
    setLoading(false);
    navigate('/');
    }
    ).catch((err)=>{
      console.log(`problem with deleting this item : ${err.message}`);
    })
  }


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {
        laoding ? <Spinner/> : ''
      }
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl "> Are You Sure You want to delete this book ?</h3>
        <button
        onClick={handleDeleteBook}
        className="p-4 bg-red-600 text-white m-8 w-full ">
          Yes , I Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook