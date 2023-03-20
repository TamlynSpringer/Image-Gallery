import { useState } from 'react';

const Image = ({ data }) => {
  const [flip, setFlip] = useState(false);
  return (
      <article key={data.id} onClick={() => setFlip(!flip)} className='cursor-pointer' >
        <div className={flip ? 'hidden' : 'front'}>
          <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
        </div>
        <div className={flip ? 'back h-72 w-full object-cover rounded-lg shadow-md p-10 bg-neutral-300' : 'hidden'} >
          <h3><i className="fa-solid fa-user"></i> {data.user.name}</h3>
          <p className="truncate"><i className="fa-solid fa-image"></i> {data.description}</p>
          <a href={data.urls.full} target='_blank' rel='noreferrer'><i className='fa-solid fa-arrow-up-right-from-square'></i> Open image</a>
          <p><i className="fa-solid fa-heart"></i> {data.likes}</p>
          <a href={data.user.portfolio_url} target='_blank' rel='noreferrer'><i className="fa-solid fa-house"></i> Portfolio site</a>
          <p><i className="fa-brands fa-instagram"></i> {data.user.instagram_username}</p>
        </div>    
      </article>
  )
};

export default Image;