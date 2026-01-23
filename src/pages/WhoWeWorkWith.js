import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import About from '../components/About/home-one'
import Skill from '../components/Skill'; 
import Team from '../components/Team/home-one'; 
import WhoWeWorkWith from "../components/About/home-one/WhoWeWorkWith";


const AboutEcotec = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>NBM International Lt | About</title>
              <meta
                name="description"
                content="Global business"
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
                    title="Who We Work With" 
                />

                <WhoWeWorkWith /> 
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default AboutEcotec;   