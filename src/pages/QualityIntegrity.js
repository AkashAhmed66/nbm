import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import Skill from '../components/Skill'; 
import Team from '../components/Team/home-one'; 
import QualityIntegrityComponent from "../components/About/home-one/QualityIntegrity";


const QualityIntegrity = () => {
 
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
                    title="Quality And Integrity" 
                />

                <QualityIntegrityComponent /> 
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default QualityIntegrity;   