import { Routes, Route } from "react-router-dom";
import Search from './pages/Search';
import Home from './pages/Home';
import About from './pages/About';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  )
};

export default Router;
