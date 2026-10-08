import Header from './components/layout/Header/Header';
import Hero from './components/home/Hero/Hero'; 
import Categories from './components/home/Catagories/Categories';
import FeaturedProducts from './components/home/FeaturedProducts/FeaturedProducts';
import FeaturedCollection from './components/home/FeaturedCollection/FeaturedCollection';

function App() {
  
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FeaturedCollection />
      <h1>Runda</h1>
    </>
  )
}

export default App
