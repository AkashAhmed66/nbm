import React from 'react';
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";


const ImpartialityStatementComp = () => {

    return (

        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 about_bottom_warp">
                        <div className="about_list" style={{textAlign: 'justify'}}> 
                            {/* Start: Heading */}
                            <SectionTitle title=" Statement Of Impartiality "/>
                            <p>
                                <strong>NBM International Ltd.</strong> is committed to upholding <strong>impartiality</strong>,{" "}
                                <strong>integrity</strong>, and <strong>objectivity</strong> in all its compliance audit
                                and advisory services. The following principles guide our impartiality policy:
                            </p>
                            <p>
                                <strong>1. Independence in Operations</strong>
                            </p>
                            <ul>
                                <li>
                                We ensure that all decisions, findings, and recommendations are made without bias or
                                influence from any external parties.
                                </li>
                                <li>
                                Our auditors and consultants maintain independence from clients’ business operations to
                                avoid any conflict of interest.
                                </li>
                            </ul>
                            <p>
                                <strong>2. Conflict of Interest Prevention</strong>
                            </p>
                            <ul>
                                <li>
                                Prior to engaging in any audit or advisory project, we evaluate potential conflicts of
                                interest.
                                </li>
                                <li>
                                Employees and associates are required to disclose any personal, financial, or business
                                relationships that could compromise impartiality.
                                </li>
                                <li>
                                We do not provide audit services to clients for whom we have provided advisory services
                                on the same subject matter within a specific time frame, ensuring neutrality.
                                </li>
                            </ul>
                            <p>
                                <strong>3. Objective Decision-Making</strong>
                            </p>
                            <ul>
                                <li>
                                All assessments, findings, and recommendations are based solely on factual evidence and
                                aligned with applicable legal, regulatory, and industry standards.
                                </li>
                                <li>
                                We maintain a transparent methodology to ensure credibility and reliability in our
                                results.
                                </li>
                            </ul>
                            <p>
                                <strong>4. Confidentiality and Professional Ethics</strong>
                            </p>
                            <ul>
                                <li>
                                We ensure the confidentiality of client information to build trust and prevent misuse of
                                privileged data.
                                </li>
                                <li>
                                Our team adheres to a strict code of ethics, avoiding favoritism, prejudice, or undue
                                influence in all professional interactions.
                                </li>
                            </ul>
                            <p>
                                <strong>5. Continual Monitoring of Impartiality</strong>
                            </p>
                            <ul>
                                <li>
                                An impartiality committee or designated officer periodically reviews our practices to
                                ensure ongoing compliance with this policy.
                                </li>
                                <li>
                                Feedback from clients and stakeholders is encouraged to identify and address any concerns
                                related to impartiality.
                                </li>
                            </ul>
                            <p>
                                <strong>6. Employee Training and Awareness</strong>
                            </p>
                            <ul>
                                <li>
                                All team members are trained regularly on impartiality standards, professional ethics,
                                and conflict of interest management.
                                </li>
                            </ul>
                            <p>
                                By adhering to this policy, <strong>NBM International Ltd.</strong> strives to maintain the highest
                                standards of integrity and professionalism, ensuring trust and confidence in our services.
                            </p>
                        </div>
                        {/* `https://mail.google.com/mail/?view=cm&fs=1&to=info@ecotecglobal.net` */}
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

export default ImpartialityStatementComp;
