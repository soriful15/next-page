import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    // console.log(book)
    return (
        <>
         <Link to={`../book/${book.isbn13}`}>
         
         
         <div className='overflow-hidden relative duration-200 transition transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
<img src={book.image} alt="" className='object-cover w-full md:h-64 h-56 xl:h-80' />

<div className='text-gray-300 bg-black px-6 py-4 bg-opacity-75 opacity-0  hover:opacity-100  absolute inset-0 flex flex-col  transition-opacity duration-200'>
    <p>{book.title}</p>
    <br />
    <p>{book.subtitle.substring(0,45)}......</p>
    <br />
    <p className='mt-auto'>{book.price}</p>
</div>
            </div>
         
         
         </Link>
        </>
    );
};

export default Book;