import React from 'react';
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";


const WhoWeWorkWith = () => {

    return (

        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 about_bottom_warp">
                        <div className="about_list">
                            {/* Start: Heading */}
                            <SectionTitle
                                title=" Welcome to NBM International Ltd. "
                            />



                            <p style={{textAlign: "justify"}}>We emphasize strong collaboration with all of our clients and partners in the value chain to achieve impact in sustainability and supply chain solutions.</p>

                            <b>Brands and retailers: social responsibility</b>

                            <p style={{textAlign: "justify"}}>NBM International Ltd. social responsibility programs are customized to meet the unique characteristics of each retailer or brand’s supply chain. Factory portfolios vary in terms of influence of the buyer, factory sophistication, country and category risk, and financial and management capacity. We can segment the portfolio and build a program from a blend of our tools and services ranging from audit and eLearning to key performance indicator monitoring and in-depth capacity building. As a result, our layered program creates increased ROI.</p>

                            <b>Suppliers: ownership</b>

                            <p style={{textAlign: "justify"}}>One of the critical missing pieces in social compliance has been supplier ownership. Too few suppliers have established proactive programs to drive social performance. Instead, they are forced to respond to poor audit results in a series of unplanned fire drills, wasting their own time and creating dissatisfaction among their customers. Our Supplier Ownership program helps suppliers develop a more intimate understanding of their factory portfolio and the potential return on their social compliance investment, while instituting a series of actions that will promote improvement. The result is that progressive suppliers will differentiate themselves from their competitors, while also reducing cost and increasing sales.</p>

                            <b>Factories: improvement</b>

                            <p style={{textAlign: "justify"}}>For those factories that are particularly important to a customer and have struggled to improve their social compliance audit results, a six or twelve month, in-depth factory improvement program can bring about major changes in performance. During a factory improvement engagement, NBM International Ltd. will conduct a business review, develop a workplan with factory management aimed at addressing root cause business issues, introduce key performance indicators (KPIs) and visit the factory at least once a month to create an environment for continuous improvement and drive real change. It is this blend of training, consulting and coaching that allows factories to reposition their businesses to meet the social and environmental requirements of global retailers and brands.</p>

                            <b>Workers: engagement</b>

                            <p style={{textAlign: "justify"}}>Helping factory management realize that workers are an asset and not a commodity is critical to improving workplace practices and communication. However, the workers must be given a voice and a means to have concerns addressed. Management will not be able to improve worker well-being and retention if they do not understand why workers leave. Combining training, surveys, worker-management dialogue, new technology and more, NBM International Ltd. designs, develops and implements worker engagement and communication programs that drive impact.</p>



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

export default WhoWeWorkWith;
