import React from 'react';
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";


const TermsOfUseComp = () => {
    const paragraphStyle = { textAlign: 'justify' };
    return (

        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 about_bottom_warp">
                        <div className="about_list" style={{textAlign: 'justify'}}>
                            {/* Start: Heading */}
                            <SectionTitle title=" Terms of Use "/>
                            <p>
                                By accessing and using this website you shall be deemed to have accepted these terms and conditions in full. If you do not accept these terms and conditions in full you must leave this website immediately.
                            </p>
                            <p><strong>Services Offered</strong></p>
                            <p>
                                NBM INTERNATIONAL LTD (NBM) provides audit, consultancy, and advisory services across various sectors (the "Services"). The content provided on this Site is for informational purposes only and does not constitute professional advice or an offer of service. Contact us directly for tailored consultancy or audit services.
                            </p>
                            <p><strong>Use of the Site</strong></p>
                            <p>
                                You agree to use the Site only for lawful purposes. You are prohibited from using the Site in any manner that could harm, disable, or impair the Site or interfere with any other party’s use of the Site. You agree not to attempt to gain unauthorized access to any part of the Site or systems connected to the Site.
                            </p>
                            <p><strong>Intellectual Property</strong></p>
                            <p>
                                All content, trademarks, logos, and other intellectual property displayed on this Site are owned by NBM or its licensors. You may not reproduce, distribute, modify, or create derivative works from the content on this Site without prior written permission from NBM International Ltd.
                            </p>
                            <p><strong>No Warranty</strong></p>
                            <p>
                                The Site and its content are provided "as is" without any warranties, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. NBM does not warrant that the Site will be error-free or uninterrupted.
                            </p>
                            <p><strong>Limitation of Liability</strong></p>
                            <p>
                                To the fullest extent permitted by applicable law, NBM shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use of or inability to use the Site, including damages for loss of profits, data, or other intangibles.
                            </p>
                            <p><strong>Third-Party Links</strong></p>
                            <p>
                                The Site may contain links to third-party websites that are not under the control of NBM. These links are provided for convenience only, and NBM is not responsible for the content or practices of these third-party websites.
                            </p>
                            <p><strong>Changes to the Terms of Use</strong></p>
                            <p>
                                NBM reserves the right to modify these Terms of Use at any time without prior notice. Any changes will be posted on this page, and it is your responsibility to review these Terms regularly. Your continued use of the Site constitutes acceptance of the modified Terms.
                            </p>
                            <p><strong>Privacy</strong></p>
                            <p>
                                Your use of the Site is also governed by our Privacy Policy, which is incorporated by reference into these Terms of Use.
                            </p>
                            <p><strong>Governing Law</strong></p>
                            <p>
                                These Terms of Use shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law principles.
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

export default TermsOfUseComp;
