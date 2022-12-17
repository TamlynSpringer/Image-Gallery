import React, { useContext } from 'react';
import { ImageContext } from '../App';
import Image from './Image';
import Starter from './Starter';

const Images = () => {
  const { response, isLoading, searchImage, page, setPage } = useContext(ImageContext);

  return (
    <>
      <h2 className='text-center mt-6 text-white underline text-xl'>Search results for {searchImage || 'city'}</h2>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 my-10 max-w-7.5xl mx-auto px-3'>
        {isLoading ? <Starter item={10} /> : response.map((data) => <Image key={data.id} data={data} />)}
      </main>
      <div className='flex content-evenly justify-center'>
        <button
        name='prev'
        className='bg-neutral-400 px-6 py-2.5 text-white rounded'
        disabled={page === 1}
        onClick={() => setPage((prevState) => prevState - 1)}>
          Prev
        </button>
        <p className='px-6 text-white py-2.5'>{page}</p>
        <button
        name='next'
        className='bg-neutral-400 px-6 py-2.5 text-white rounded'
        onClick={() => setPage((prevState) => prevState + 1)}>
          Next
        </button>
      </div>
    </>
  )
};

export default Images;