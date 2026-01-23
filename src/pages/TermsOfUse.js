import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import PageHeader from '../components/PageHeader'
import PrivacyPolicyComp from "../components/About/home-one/PrivacyPolicyComp";
import TermsOfUseComp from "../components/About/home-one/TermsOfUseComp";


const TermsOfUse = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>NBM | Terms Of Use</title>
              <meta
                name="description"
                content="Global business"
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
                    title="Terms of Use" 
                />

                <TermsOfUseComp /> 
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default TermsOfUse;   