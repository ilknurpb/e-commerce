import Slider from '../components/Slider';
import EditorsPick from '../components/EditorsPick';  
import BestsellerProducts from "../components/BestsellerProducts";
import ProductSlider from '../components/ProductSlider';
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from '../components/FeaturedPosts';
function HomePage() {

  return (
    <>
      <Slider />
      <EditorsPick />
      <BestsellerProducts />
      <ProductSlider />
      <NeuralUniverse />
      <FeaturedPosts />
    </>

   
  );
};

export default HomePage;