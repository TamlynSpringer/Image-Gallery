import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { ImageContext } from '../App';

const Nav = ({ children }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { setSearchImage, setPage } = useContext(ImageContext);

  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-neutral-500 mb-3'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
     
          { children }
          <button
            className="inline-flex items-center px-3 py-1 ml-3 text-white cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        <div
          className={
            "lg:block items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item px-4 mx-auto flex items-center text-s font-bold  text-white hover:opacity-75">
              <Link to='/' 
              onClick={() => {
                setSearchImage('Stockholm')
                setPage(1)
              }}>
              <i className="fa-solid fa-house text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
              </Link>               
            </li>
            <li className="nav-item x-4 mx-auto flex items-center text-s font-bold text-white hover:opacity-75">
              <Link to='/about'>
                <i className="fa-solid fa-circle-info text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav


