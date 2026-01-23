import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Slider from '../components/Slider/SliderOne'
import About from '../components/About/home-one'
import Services from '../components/Services/home-one'
import WhyChooseUs from '../components/WhyChooseUs'
import Video from '../components/Video'
import Funfact from '../components/FunFact/home-one'
import Gallery from '../components/Gallery/Gallery';
import Team from '../components/Team/home-one';
import PricingTable from '../components/PricingTable/home-one';
import Blog from '../components/Blog/home-one';
import Testimonial from '../components/Testimonials/home-one';
import LogoContainer from '../components/BrandLogo';
import ContactForm from '../components/ContactForm';
import AboutShort from "../components/About/home-one/AboutShort";


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
        <AboutShort />
        {/* <About /> */}
        <Services />
        <WhyChooseUs />
        {/* <Video /> */}
        {/* <Funfact /> */}
        {/* <Gallery /> */}
        {/* <Team /> */}
        {/* <PricingTable /> */}
        {/* <Blog /> */}
        {/* <Testimonial /> */}
        {/* <LogoContainer /> */}
        <ContactForm />

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
