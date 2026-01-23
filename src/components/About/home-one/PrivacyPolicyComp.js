import React from 'react';
import AboutList from "./AboutList";
import SectionTitle from "../../SectionTitles/SectionTitle";
import AboutData from "../../../data/About/about-one";


const PrivacyPolicy = () => {

    return (

        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 about_bottom_warp">
                        <div className="about_list" style={{textAlign: 'justify'}}> 
                            {/* Start: Heading */}
                            <SectionTitle title=" Privacy Policy "/>
                            <p>
                                At NBM INTERNATIONAL LTD (“the Firm”), we recognize the importance of protecting personal and sensitive information. This Privacy Policy outlines how we collect, use, store, and protect data in relation to our audit, consulting, and IT application services. We are committed to maintaining the highest levels of data security and transparency, in compliance with applicable data protection laws.
                            </p>
                            <p><strong>1. Scope of the Policy</strong></p>
                            <p>This Privacy Policy applies to personal data collected by the Firm in the course of providing:</p>
                            <ul>
                                <li>Audit Services: Compliance audits, financial audits and internal audit support.</li>
                                <li>Consulting Services: Business strategy, risk management, and advisory services.</li>
                                <li>IT Application Services: IT system development, deployment, and ongoing support.</li>
                            </ul>
                            <p>
                                This policy governs data collected through our website, digital platforms, client interactions, and service delivery processes.
                            </p>
                            <p><strong>2. Information We Collect</strong></p>
                            <p>We may collect and process the following categories of personal data:</p>
                            <ul>
                                <li>Personal Identifiable Information (PII): Name, contact information (email address, phone number), job title, and company details.</li>
                                <li>Audit-related Information: Financial records, business documents, compliance data, and other sensitive information required for conducting audits.</li>
                                <li>IT System Data: Technical details, including system logs, application data, and usage statistics, collected during the development and support of IT applications.</li>
                                <li>Device and Technical Information: IP addresses, browser types, operating systems, and cookies from interactions with our website or IT services.</li>
                            </ul>
                            <p><strong>3. How We Use Your Information</strong></p>
                            <p>We collect personal information for legitimate business purposes, including:</p>
                            <ul>
                                <li>Service Delivery: To provide audit, consulting, and IT services as requested by our clients.</li>
                                <li>Audit and Compliance: To perform financial, operational, or regulatory audits in accordance with legal and professional standards.</li>
                                <li>Consulting and IT Support: To analyze business performance, offer strategic advice, and implement or support IT applications.</li>
                                <li>Communication: To manage ongoing relationships with clients, provide updates, and share information relevant to the services provided.</li>
                                <li>System Development and Monitoring: To improve the performance and security of our IT applications and ensure compliance with service agreements.</li>
                            </ul>
                            <p><strong>4. Data Sharing and Disclosure</strong></p>
                            <p>We take data privacy seriously and will not share or disclose your personal information without your consent, except under the following circumstances:</p>
                            <ul>
                                <li>
                                Service Providers: We may share data with third-party service providers, including IT infrastructure providers, cloud hosting services, and external consultants, solely for the purpose of delivering services. All third-party partners are bound by confidentiality agreements and data protection obligations.
                                </li>
                                <li>
                                Legal Requirements: We may disclose information when required by law, such as in response to subpoenas, regulatory investigations, or to enforce our legal rights.
                                </li>
                                <li>
                                Audit Reporting: During audits, we may disclose certain financial or operational information as required by professional auditing standards or regulatory bodies. All such disclosures are handled with strict confidentiality.
                                </li>
                            </ul>
                            <p><strong>5. Data Security</strong></p>
                            <p>We are committed to safeguarding your information. Our security measures include:</p>
                            <ul>
                                <li>Encryption: All personal data is encrypted during transmission and while stored in our systems.</li>
                                <li>Access Control: Access to sensitive information is restricted to authorized personnel who require it to perform their job functions.</li>
                                <li>Security Audits: Regular security audits and assessments are conducted to maintain the integrity and confidentiality of data.</li>
                            </ul>
                            <p><strong>6. Data Retention</strong></p>
                            <p>
                                We will retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. Audit records and related documentation may be stored in accordance with industry regulations and professional standards for audit retention. Upon request, we will securely delete or anonymize your personal information, provided it is no longer needed for legal, contractual, or compliance purposes.
                            </p>
                            <p><strong>7. Your Rights</strong></p>
                            <p>You have the following rights regarding your personal data:</p>
                            <ul>
                                <li>Access: Request access to the personal information we hold about you.</li>
                                <li>Correction: Request that we correct any inaccurate or incomplete data.</li>
                                <li>Deletion: Request that we delete your personal data, subject to legal and regulatory retention requirements.</li>
                                <li>Data Portability: Request the transfer of your data to another service provider, where applicable.</li>
                                <li>Withdraw Consent: You may withdraw your consent for specific uses of your data at any time.</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us at <a href="mailto:info@nbm-intl.com">info@nbm-intl.com</a>.
                            </p>
                            <p><strong>8. Cookies and Tracking Technologies</strong></p>
                            <p>
                                We use cookies and similar tracking technologies on our website to enhance user experience and gather analytical data. You may manage cookie preferences through your browser settings, though disabling cookies may affect the functionality of our site.
                            </p>
                            <p><strong>9. International Data Transfers</strong></p>
                            <p>
                                If we transfer your personal data to countries outside your jurisdiction, we will ensure that the data is adequately protected, consistent with applicable data protection laws, including the General Data Protection Regulation (GDPR) or other local requirements.
                            </p>
                            <p><strong>10. Confidentiality in Audit Services</strong></p>
                            <p>
                                We understand the highly sensitive nature of the data we handle during audit engagements. As such, we adhere to strict confidentiality obligations and ensure that no client information is shared outside the scope of the audit without prior consent, except where required by law or professional standards.
                            </p>
                            <p><strong>11. Changes to the Privacy Policy</strong></p>
                            <p>
                                We reserve the right to update this Privacy Policy as necessary to reflect changes in our practices or to comply with legal and regulatory obligations. Any significant changes will be communicated via our website or directly to affected clients.
                            </p>
                            <p><strong>12. Contact Information</strong></p>
                            <p>
                                For any inquiries or concerns regarding this Privacy Policy or our data practices, please contact us at NBM INTERNATIONAL LTD.
                            </p>
                            <p style={{ textAlign: 'justify' }}>
                                <b> Email: </b><a href="mailto:info@nbm-intl.com">info@nbm-intl.com</a>
                            </p>
                            
                            <p style={{ textAlign: 'justify' }}>
                                <b> Phone: </b>  +8801716 403090
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

export default PrivacyPolicy;
