import Images from '../components/Images';
import Nav from '../components/Nav';
import Searchbar from '../components/Searchbar';

const Home = () => {
  return (
    <>
      <Nav>
        <Searchbar />
      </Nav>
      <Images />
    </>
  )
}

export default Home;