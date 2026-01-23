import React from 'react';
import SlickSlider from '../../UI/Carousel/slick'
import ServicesData from '../../../data/Services/service-one.json'  
import ServiceItem from "./ServiceItem";
import SectionTitle from "../../SectionTitles/SectionTitle";

  
const Service = () => {  

    const settings = {
        dots: true,
        arrows:true,
        infinite: true, 
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
          // Responsive breakpoints
          responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              } 
 
            ]
      };

 
        return (

        <section className="service_section" id="agenda">
            <div className="container"> 
                <p style={{fontSize: '25px', color: 'black'}}>“Moving together to shape the world”</p>
                <p style={{fontSize: '17px', color: 'black'}}>NBM International Ltd.  (NBM International Ltd.) is a leading organization in Environmental, Social and Governance (ESG), sustainability and supply chain services. We deliver one stop services that consists of <span style={{color: 'green', fontWeight: 'bold' }}>Audit</span>, <span style={{color: 'green', fontWeight: 'bold'}}>Verification</span> ,  <span style={{color: 'green', fontWeight: 'bold'}}>Sustainability Reporting</span> and  <span style={{color: 'green', fontWeight: 'bold'}}>Management System Certification and Training</span>  that drive positive impact. </p>

                {/* Heading */}
                <SectionTitle
                    title="Our Services" 
                />
                {/* End: Heading */}

                <div className="row" id="service"> 
                    <div className="col"> 
                        <SlickSlider settings={settings}>
                            {
                                ServicesData.map(service => (
                                    <div key={service.id}>
                                        <ServiceItem 
                                        key={service.id} 
                                        id={service.id} 
                                        title={service.title} 
                                        shortDesc={service.shortDesc} 
                                        thumb={service.thumb}  
                                        icon={service.icon}  
                                        btnText={service.btnText} 
                                        link={service.link}
                                        />
                                    </div> 
                                ))
                            }
                        </SlickSlider>
                    </div> 
                </div> 
            </div> 
        </section>    
        );
    }
;

export default Service;