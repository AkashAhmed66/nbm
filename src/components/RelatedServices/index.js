import React from 'react';   
import SlickSlider from '../UI/Carousel/slick';
import SectionTitle from "../SectionTitles/SectionTitle";
import {Link} from 'react-router-dom'; 

const RelatedServices = ({serviceList}) => {
    const settings = {
        dots: false,
        arrows:false,
        infinite: true, 
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: Math.min(2, serviceList.length),
        slidesToScroll: 2,
          responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: Math.min(2, serviceList.length),
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: Math.min(2, serviceList.length),
                }
              } 
 
            ]
      };

    return (
    <section className="single_service_s2">
        <div className="container">
            {/* Heading */} 
            <SectionTitle 
                title="What we do for you" 
            />
            {/* End: Heading */ }
            <div className="row">
                {
                <SlickSlider settings={settings}>
                {
                    serviceList.map((service, id) => ( 
                        <div className="col-md-4 col-sm-12" key={id}>
                            <div className="service_list">
                                <div className="service_img"> 
                                    <Link to={`${process.env.PUBLIC_URL + `/service/${service.title.split(' ').join('-').toLowerCase()}?id=${service.id} `}`}>
                                        <img className={serviceList.length <= 1?"service_img_thumb2":"service_img_thumb1"} src={('https://portal.nbm-intl.com/public/' + service.thumb)} alt="service" />
                                    </Link>
                                </div>   
                                <div className="service_para">
                                    <i className="icon_easel"></i> 
                                    <Link to={`${process.env.PUBLIC_URL + `/service/${service.title.split(' ').join('-').toLowerCase()}?id=${service.id} `}`}>
                                        <h5> {service.title} </h5>
                                    </Link>
                                    <p>{service.shortDesc}</p>  
                                    <Link to={`${process.env.PUBLIC_URL + `/service/${service.title.split(' ').join('-').toLowerCase()}?id=${service.id} `}`} className="srvic_read">Read More <span className="fa fa-angle-double-right"></span></Link>
                                </div>
                            </div> 
                        </div>
                    ))
                }
                </SlickSlider>
                
                }
            </div>
        </div>
    </section>
    );
};

export default RelatedServices;