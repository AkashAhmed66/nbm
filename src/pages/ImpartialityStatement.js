import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import PrivacyPolicyComp from "../components/About/home-one/PrivacyPolicyComp";
import ImpartialityStatementComp from "../components/About/home-one/ImpartialityStatementComp";


const ImpartialityStatement = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>NBM | About</title>
              <meta
                name="description"
                content="Global business"
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
                    title="Statement Of Impartiality" 
                />

                <ImpartialityStatementComp /> 
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default ImpartialityStatement;   