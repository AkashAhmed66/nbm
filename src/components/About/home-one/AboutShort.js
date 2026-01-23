import React from 'react';   
import AboutList from "./AboutList"; 
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";
import { Link } from 'react-router-dom';
 

const AboutShort = () => {
    const serviceURL = `/about-ecotec`
  return (
 
	<section className="about-section" id="about">
        <div className="container"> 
            <div className="row">
                <div className="col-md-6 col-sm-12 about_bottom_warp">
                    <div className="about_list" style={{textAlign: 'justify'}}>
                        {/* Start: Heading */}
                        <SectionTitle 
                        title=" Welcome to NBM International Ltd."  
                        />

                        <p>NBM INTERNATIONAL LTD. (NBM) is an Independent Audit, Inspection and Certification Company in ESG Domain (Environment, Social and Governance). We deliver one stop services that consists of Audit, Training & Capacity Building, Advisory and ESG Reporting that drive positive impact. </p>                     
                        <p>Founded in 2016 and incorporated in 2023, the global assurance provider – NBM International Ltd. has nine years of experience. We are headquartered in Dhaka, Bangladesh and covering South & Southeast Asia. Our team of 20-plus industry experts support clients in more than 7 countries, which includes about 11 corporate clients that work with NBM as a trusted due diligence partner. We are committed to enhancing the ESG (Environmental, Social and Governance) competitiveness for brands and retailers supply chains, as well as to creating a transparent and reliable supply chain for our clients. </p>
                        {/* <p>It is increasingly clear that companies will have to transform their programs to meet a new higher standard of due diligence. This requires a commitment to transparency, visibility and thoughtful management of risk and performance. It requires a commitment to business-driven sustainability. We collaborate, we innovate, we NBM International Ltd.</p> */}
                        <Link to={`${process.env.PUBLIC_URL + serviceURL}`} className="serv_read">Read More <span className="fa fa-angle-double-right"></span></Link>
                     </div>

                    <div className="row about_list_warp"> 

                       
                        
                    </div>
                </div>

                {  /*Start: About Image  */} 
                <div className="col-md-6 col-sm-12"> 

                    { /*  About Right Image  */}
                    <img src={process.env.PUBLIC_URL + '/assets/images/about.png'} alt="" />

                </div> 
                {/*End: About Image  */}
            

            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>


  );
};

export default AboutShort;
