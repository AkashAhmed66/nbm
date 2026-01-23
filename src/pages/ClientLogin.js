import React, { Fragment, useState } from 'react';
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import ContactForm from '../components/ContactForm'
import PageHeader from '../components/PageHeader'
import ServicesData from '../../src/data/Certificate/CertificateServices.json'

const ContactPage = () => {
    const [show, setShow] = useState(false);
    const [certificateType, setCertificateType] = useState('');
    const [certificateNumber, setCertificateNumber] = useState('');

    const handleCertificateTypeChange = (e) => {
        setCertificateType(e.target.value);
    }

    const handleCertificateNumberChange = (e) => {
        setCertificateNumber(e.target.value);
    }

    const showCertificateInfo = () => {
        if (certificateType && certificateNumber) {
            setShow(true);            
        } else {
            setShow(false);
        }
    }
    //certificates/ISO Certificate 100005.pdf
    const certificateUrl = "https://portal.nbm-intl.com/storage/app/public/certificates/" + certificateType + " " + certificateNumber + ".pdf" 
    console.log("🚀 ~ file: ClientLogin.js:29 ~ ContactPage ~ certificateUrl:", certificateUrl)


    return (

        <Fragment>
            <MetaTags>
                <title>NBM International Ltd | Certificate Check</title>
                <meta
                    name="description"
                    content="Global business"
                />
            </MetaTags>

            <LayoutOne>
                <PageHeader
                    bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
                    title="Certificate Check"
                />



                <div className="container mt-3" style={{ padding: '10px' }}>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className="row jumbotron box8">
                            <div className="col-sm-12 mx-t3 mb-4">
                                <h2 className="text-center text-info">Certificate Check</h2>
                            </div>

                            <div className="col-sm-6 form-group">
                                <label htmlFor="sex">Certificate Type</label>
                                <select onChange={handleCertificateTypeChange} id="sex" className="form-control browser-default custom-select">
                                    <option value="">Select Certificate type</option>
                                    <option value="ISO Certificate">ISO Certificate</option>
                                    <option value="Training Certificate">Training Certificate</option>
                                    <option value="C-TPAT Certificate">C-TPAT Certificate</option>
                                </select>
                            </div>

                            <div className="col-sm-6 form-group">
                                <label htmlFor="tel">Certificate Number</label>
                                <input type="tel" onChange={handleCertificateNumberChange} name="phone" className="form-control" id="tel" placeholder="Enter Your Certificate Number." required />
                            </div>

                            <div className="col-sm-12 form-group mb-0">
                                <button onClick={() => showCertificateInfo()} className="btn btn-primary float-right">Submit</button>
                            </div>
                        </div>
                    </form>

                    


                    {show &&
                    <embed allowFullScreen height={"1200px"} width={"100%"} src={certificateUrl} title="description"></embed>

                        // <div id="page-container">
                        //     <div id="pf1" className="pf w0 h0" data-page-no={1}>
                        //         <div className="pc pc1 w0 h0"><img className="bi x0 y0 w0 h0" alt="" src="https://portal.nbm-intl.com/public/singleThumb/certificatebg.png" />
                        //             <div className="t m0 x1 h1 y1 ff1 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x1 h1 y2 ff1 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x2 h2 y3 ff2 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x3 h3 y4 ff2 fs1 fc1 sc0 ls0 ws0">NBM International Ltd. G<span className="_ _0" />lobal<span className="_ _0" /> Limited<span className="_ _0" /> </div>
                        //             <div className="t m0 x4 h4 y5 ff2 fs2 fc0 sc0 ls0 ws0">CERT<span className="_ _0" />IFICATE<span className="_ _1" /><span className="fs0"> </span></div>
                        //             <div className="t m0 x5 h5 y6 ff3 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x6 h6 y7 ff3 fs3 fc0 sc0 ls0 ws0">This is to certif<span className="_ _0" />y that
                        //             </div>
                        //             <div className="t m0 x7 h3 y8 ff2 fs1 fc0 sc0 ls0 ws0">Environmen<span className="_ _0" />tal<span className="_ _0" /> Managem<span className="_ _0" />en<span className="_ _0" />t System<span className="_ _0" /> </div>
                        //             <div className="t m0 x8 h5 y9 ff3 fs0 fc0 sc0 ls0 ws0">of </div>
                        //             <div className="t m0 x9 h7 ya ff2 fs4 fc0 sc0 ls0 ws0">ABC Garm<span className="_ _0" />ents <span className="_ _0" />Li<span className="_ _0" />mited </div>
                        //             <div className="t m0 xa h8 yb ff3 fs5 fc0 sc0 ls0 ws0">Plot # 34, Road <span className="_ _0" /># 34,
                        //                 Sector # 12, CEPZ, Chatt<span className="_ _0" />agram-4204, Bangladesh </div>
                        //             <div className="t m0 x5 h5 yc ff3 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 xb h5 yd ff3 fs0 fc0 sc0 ls0 ws0">has been assessed<span className="_ _2" /> and found
                        //                 to conform to the <span className="_ _2" />requirement of </div>
                        //             <div className="t m0 xc h4 ye ff2 fs2 fc0 sc0 ls0 ws0">I<span className="ff1 fs0"> </span>SO 140<span className="_ _0" />01:<span className="_ _0" /> 2015<span className="_ _0" /> </div>
                        //             <div className="t m0 xd h9 yf ff2 fs6 fc0 sc0 ls0 ws0">Manufact<span className="_ _0" />ure and Exporters
                        //                 of Knit <span className="_ _0" />and Woven Garments </div>
                        //             <div className="t m0 x5 h5 y10 ff3 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x5 h5 y11 ff3 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 xe h8 y12 ff3 fs5 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 xe h8 y13 ff3 fs5 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 xe ha y14 ff3 fs7 fc0 sc0 ls0 ws0">Certificate N<span className="_ _0" />o <span className="_ _3"> </span>:15150177 <span className="_ _4"> </span> <span className="_ _5"> </span> <span className="_ _5"> </span> <span className="_ _5"> </span>1</div>
                        //             <div className="t m0 xf hb y15 ff3 fs8 fc0 sc0 ls0 ws0">st</div>
                        //             <div className="t m0 x10 ha y14 ff3 fs7 fc0 sc0 ls0 ws0"> Sur Due <span className="_ _6"> </span>:06 August
                        //                 2024<span className="_ _0" /> </div>
                        //             <div className="t m0 xe ha y16 ff3 fs7 fc0 sc0 ls0 ws0">Registration D<span className="_ _0" />ate:01 July
                        //                 2023 <span className="_ _3"> </span> <span className="_ _5"> </span> <span className="_ _7"> </span> <span className="_ _5"> </span>2</div>
                        //             <div className="t m0 xf hb y17 ff3 fs8 fc0 sc0 ls0 ws0">nd</div>
                        //             <div className="t m0 x11 ha y16 ff3 fs7 fc0 sc0 ls0 ws0"> Sur Due <span className="_ _8"> </span>:06 Augus<span className="_ _0" />t 2025 </div>
                        //             <div className="t m0 xe ha y18 ff3 fs7 fc0 sc0 ls0 ws0">Issuance D<span className="_ _0" />ate <span className="_ _9"> </span>:07 Augus<span className="_ _0" />t 2023 <span className="_ _5"> </span> <span className="_ _5"> </span> <span className="_ _5"> </span>Date of E<span className="_ _0" />xpiry <span className="_ _a"> </span>:06 August <span className="_ _0" />2026 </div>
                        //             <div className="t m0 x1 h1 y19 ff1 fs0 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x1 h8 y1a ff3 fs5 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x12 hc y1b ff3 fs9 fc0 sc0 ls0 ws0">Certificate Appr<span className="_ _0" />oved
                        //                 B<span className="_ _0" />y </div>
                        //             <div className="t m0 x1 h8 y1c ff3 fs5 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x13 hc y1d ff3 fs9 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x12 hc y1e ff3 fs9 fc0 sc0 ls0 ws0">Managing D<span className="_ _0" />irector </div>
                        //             <div className="t m0 x1 hc y1f ff3 fs9 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x1 hc y20 ff3 fs9 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x1 hc y21 ff3 fs9 fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x1 hd y22 ff3 fsa fc0 sc0 ls0 ws0"> </div>
                        //             <div className="t m0 x14 he y23 ff3 fsb fc0 sc0 ls0 ws0">Registration i<span className="_ _2" />s subject
                        //                 to the <span className="_ _2" />manageme<span className="_ _2" />nt system being<span className="_ _2" /> continually<span className="_ _2" /> maintained<span className="_ _2" />
                        //                 to the abo<span className="_ _2" />ve standard </div>
                        //             <div className="t m0 x15 he y24 ff3 fsb fc0 sc0 ls0 ws0">under regular<span className="_ _2" />
                        //                 surveillan<span className="_ _2" />ce. Should s<span className="_ _2" />urveillance not<span className="_ _2" /> take place w<span className="_ _2" />hen required,<span className="_ _2" /> registration sh<span className="_ _2" />all be </div>
                        //             <div className="t m0 x16 he y25 ff3 fsb fc0 sc0 ls0 ws0">removed. </div>
                        //             <div className="t m0 x17 he y26 ff3 fsb fc0 sc0 ls0 ws0">This certifica<span className="_ _2" />te is the
                        //                 property <span className="_ _2" />of ECOT<span className="_ _2" />EC <span className="_ _2" /> </div>
                        //             <div className="t m0 x14 hf y27 ff3 fsc fc0 sc0 ls0 ws0">Please validat<span className="_ _0" />e the
                        //                 aut<span className="_ _0" />henticity and st<span className="_ _0" />atus of t<span className="_ _0" />his certificat<span className="_ _0" />e at https://<span className="_ _0" />www.ecotecglob<span className="_ _0" />al.net/certifi<span className="_ _0" />cate-check<span className="_ _0" />/ </div>
                        //         </div>
                        //         <div className="pi" data-data="{&quot;ctm&quot;:[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}" />
                        //     </div>
                        // </div>
                    }


                </div>






            </LayoutOne>
        </Fragment>

    );
}



export default ContactPage;   