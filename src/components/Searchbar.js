import React, { useContext, useState } from 'react';
import { ImageContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState('');

  const { fetchData, setSearchImage, page, setPage } = useContext(ImageContext);
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?${e.target.value}`);
  };
  const handleEnterSearch = (e) => {
    if(e.key === 'Enter') {
      fetchData(`/search/photos?page=${page}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchImage(searchValue);
      setSearchValue('')
      setPage(1);
    }
  };
  const handleBtnSearch = () => {
    fetchData(`/search/photos?page=${page}&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearchValue('');
      setPage(1);
      setSearchImage(searchValue);
  };

  return (
      <div className='flex'>
        <input
        className='bg-gray-50 border border-gray-300 text-sm p-1 outline-none focus:border-blue-500'
        placeholder='Search for an image'
        type='search'
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
        <button
        className='bg-blue-600 px-2.5 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-neutral-400 cursor-pointer'
        onClick={handleBtnSearch}
        disabled={!searchValue}>
          <i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
  )
};

export default Searchbar;

