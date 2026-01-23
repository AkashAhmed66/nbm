import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import Slider from '../components/Slider/SliderThree' 
import Gallery from '../components/Gallery/GalleryThree';  
import LogoContainer from '../components/BrandLogo';     

 
const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>NBM International Ltd | Home</title>
        <meta
          name="description"
          content="Global business"
        />
      </MetaTags>
      <LayoutOne>
   
        <Slider />   
        <Gallery />  
        <LogoContainer />  
 
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
