import React, { useContext, useState } from 'react';
import { ImageContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const { fetchData, setSearchImage } = useContext(ImageContext);
  const navigate = useNavigate();

  const setLocalStorage = searchValue => {
    const searches = JSON.parse(localStorage.getItem('search') || '[]');
    searches.unshift(searchValue);
    searches.splice(3);
    localStorage.setItem('search', JSON.stringify(searches));
  };
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?${e.target.value}`);
  };
  const handleEnterSearch = (e) => {
    if(e.key === 'Enter') {
      fetchData(`/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchImage(searchValue);
      setSearchValue('')
      setLocalStorage();
    }
  };
  const handleBtnSearch = () => {
    fetchData(`/search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchValue('');
      setSearchImage(searchValue);
      setLocalStorage();
  };

  console.log(searchValue)

  return (
      <div className='flex'>
        <input
        className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500'
        placeholder='Search for an image'
        type='search'
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
        <button
        className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-neutral-400 cursor-pointer'
        onClick={handleBtnSearch}
        disabled={!searchValue}>
          <i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
  )
};

export default Searchbar;

