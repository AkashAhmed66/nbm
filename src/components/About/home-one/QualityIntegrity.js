import React from 'react';
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";


const QualityAndIntegrity = () => {

    return (

        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 about_bottom_warp" style={{textAlign: 'justify'}}>
                        <div className="about_list">
                            {/* Start: Heading */}
                            <SectionTitle
                                title=" Welcome to NBM International Ltd. "
                            />


                            <p>NBM International Ltd. is at the forefront of driving integrity and quality within the industry. It underpins everything we do and everything we stand for.</p>
                            <p>We deliver professional opinions and advice, we assess compliance, and we use this knowledge as the basis for recommending improvements that benefit our customers and workers.</p>
                            <p>Each member of our team is a signatory to our NBM International Ltd. code of Ethics.</p>

                            <b>Impartiality :</b>
                            <p>NBM International Ltd. is fully committed to impartiality when carrying out services and providing professional opinions. We avoid conflicts of interest to ensure our business activities are conducted in an impartial and nondiscriminatory manner.</p>

                            <b>Reporting of unethical behavior :</b>
                            <p>Out EthicsPoints hotline is a confidential, reporting tool, available to anyone—including employees and customers—to report any perceived illegal, unethical or improper conduct involving NBM International Ltd..</p>
                            <p>Reporting is carried out through a secure website. We are committed to protecting the anonymity of anyone who brings forward a claim.</p>
                            <p>All allegations are taken with the utmost sincerity and reviewed using a defined internal process to create consistency across our global operations in how we handle and address all issues.</p>



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

export default QualityAndIntegrity;
