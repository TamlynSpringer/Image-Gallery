import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <section className='text-center'>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </section>
  )
};

export default Loader;