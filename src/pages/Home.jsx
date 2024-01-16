import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import {MdOutlineAddBox ,MdOutlineDelete} from 'react-icons/md'
import Table from '../components/Table'
import Books from '../components/Books'


const Home = () => {


const [mode , setMode] = useState('cards')
const [books ,setBooks ] = useState([]);
const [loading , setLoading] = useState(false);


// fetching data use useEffect and axios

useEffect(() => {
  setLoading(true);
  axios.get('http://localhost:5555/books/')
    .then((res) => {
      console.log(res);
      setBooks(res?.data?.data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);



  return (
    <div className='p-4 '>
      <div className='flex gap-3 items-center justify-center '>
        <button className='w-auto p-2 rounded-md text-white h-auto bg-green-600 font-semibold ' onClick={()=>setMode('table')}>mode Table</button>
        <button className='w-auto p-2 rounded-md text-white h-auto bg-green-600 font-semibold ' onClick={()=>setMode('cards')}>mode cards</button>
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 border-b-2 border-sky-600 pb-2'>Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className='text-sky-800 text-4xl'/>
        </Link>
      </div>
      {
        loading ? (
          <Spinner/>
        ): (
        
          mode ==  'table'  ? <Table books={books}/> : <Books books={books} /> 
        )
      }
    </div>
  )
}

export default Home;