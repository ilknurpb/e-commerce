import Slider from '../components/Slider';
import EditorsPick from '../components/EditorsPick';  
import BestsellerProducts from "../components/BestsellerProducts";
import ProductSlider from '../components/ProductSlider';
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from '../components/FeaturedPosts';
import { Link } from "react-router-dom";
import TopCategories from "../components/TopCategories";

function HomePage() {

  return (
    <>
      <Slider />
      <TopCategories />
      <EditorsPick />
      <BestsellerProducts />
      <ProductSlider />
      <NeuralUniverse />
      <FeaturedPosts />
    </>

   
  );
};

export default HomePage;