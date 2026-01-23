import React from 'react';
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";


const AboutEcotec = () => {

    return (

        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 about_bottom_warp">
                    <div className="about_list" style={{ textAlign: 'justify' }}>
                        {/* Start: Heading */}
                        <SectionTitle title="Welcome to NBM International Ltd." />
                        <p>
                            At <b>NBM International Ltd</b>., we are dedicated to delivering world-class assessment and certification services to help businesses align with global compliance standards and sustainability practices. We specialize in <b>assessment, certification, advisory services, sustainability solutions, and training</b> to help organizations meet global standards and achieve their sustainability goals. With a commitment to excellence, innovation, and integrity, we empower organizations to foster sustainable growth while meeting the demands of regulatory frameworks and international best practices.
                        </p>
                        <p>
                            Our team of experts specializes in evaluating and certifying businesses across industries, ensuring they adhere to social, environmental, and ethical standards. By bridging the gap between compliance requirements and sustainable solutions, we help our clients build trust, enhance reputation, and unlock opportunities in a rapidly evolving global marketplace.
                        </p>
                        <p>
                            Founded in 2016 and incorporated in 2023 (<b>C-190176/2023</b>), the global assurance provider - NBM International Ltd. has 10 years of experience. We are headquartered in Dhaka, Bangladesh and covering South & Southeast Asia. Our team of 30-plus industry experts support clients in more than 7 countries, which includes about 11 corporate clients that work with NBM as a trusted due diligence partner.
                        </p>
                        <p>
                            At NBM International Ltd., we believe that compliance and sustainability are the foundations of responsible business practices, and we are committed to enabling our clients to lead the way in building a better future.
                        </p>
                        <p>
                            We offer a comprehensive range of services, but not limited to, to meet the specific needs of our clients:
                        </p>
                        <ul>
                            <li><b>Assessment and Certification</b></li>
                            <li><b>Advisory</b></li>
                            <li><b>Environmental Sustainability</b></li>
                            <li><b>Training & Capacity Building</b></li>
                            <li><b>Digital Transformation</b></li>
                            <li><b>Account, Fin and Corporate Services</b></li>
                            <li><b>Investment Management</b></li>
                        </ul>
                        <p>
                            Our motto is <b>“Be Responsible, Be Sustainable!”</b>
                        </p>
                        <p><b>Vision</b></p>
                        <p>
                            To be the leading global provider of compliance, sustainability, and advisory solutions, inspiring businesses to create a sustainable and prosperous world.
                        </p>
                        <p><b>Mission</b></p>
                        <ul>
                            <li>To deliver innovative and tailored assessment, certification, and advisory services that promote compliance and sustainability.</li>
                            <li>To empower organizations with knowledge and skills through impactful training programs.</li>
                            <li>To drive sustainable development by fostering ethical, social, and environmental responsibility across industries.</li>
                            <li>To build lasting partnerships based on integrity, excellence, and shared commitment to progress.</li>
                        </ul>
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

export default AboutEcotec;
