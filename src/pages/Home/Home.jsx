import Hero from '../../components/home/Hero/Hero';
import Categories from '../../components/home/Categories/Categories';
import FeaturedProducts from '../../components/home/FeaturedProducts/FeaturedProducts';
import FeaturedCollection from '../../components/home/FeaturedCollection/FeaturedCollection';
import DiscoverMore from '../../components/home/DiscoverMore/DiscoverMore';
import DevModeTeaser from '../../components/home/DevModeTeaser/DevModeTeaser';

function Home() {
      return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <FeaturedCollection />
      <DiscoverMore />
      <DevModeTeaser />
    </>
  )
}

export default Home;