import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import About from '../components/About/home-one'
import Skill from '../components/Skill'; 
import Team from '../components/Team/home-one'; 


const Aboutpage = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>NBM International Ltd | About</title>
              <meta
                name="description"
                content="Global business"
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
                    title="About Us" 
                />

                <About /> 
                <Skill /> 
                <Team /> 
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default Aboutpage;   