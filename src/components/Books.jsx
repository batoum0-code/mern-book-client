import React from 'react'
import Card from './Card'

const Books = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-4'>
        {
            books?.map( (book , index)=>{
                return (
                    <Card key={book._id}  book={book} index={index}/>
                )
            })
        }
    </div>
  )
}

export default Books