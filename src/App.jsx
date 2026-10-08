import Header from './components/layout/Header/Header';
import Hero from './components/home/Hero/Hero'; 
import Categories from './components/home/Catagories/Categories';
import FeaturedProducts from './components/home/FeaturedProducts/FeaturedProducts';
import FeaturedCollection from './components/home/FeaturedCollection/FeaturedCollection';
import DiscoverMore from './components/home/DiscoverMore/DiscoverMore';

function App() {
  
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FeaturedCollection />
      <DiscoverMore />
      <h1>Runda</h1>
    </>
  )
}

export default App
