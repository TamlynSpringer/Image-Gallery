import { createContext, useState } from 'react';
import './App.css';
import useAxios from './hooks/useAxios';
import Router from './Router';

export const ImageContext = createContext();

const api_key = process.env.REACT_APP_ACCESS_KEY;

const App = () => {
  const [searchImage, setSearchImage] = useState('Stockholm');
  const [page, setPage] = useState(1);

  const { response, isLoading, error, fetchData } = useAxios(`/search/photos?page=${page}&query=${searchImage}&client_id=${api_key}`)
  const value = {
    response,
    isLoading,
    error, 
    fetchData,
    searchImage,
    setSearchImage,
    page, 
    setPage
  }
  return (
    <ImageContext.Provider value={value}>
      <Router />
    </ImageContext.Provider>
  );
}

export default App;

