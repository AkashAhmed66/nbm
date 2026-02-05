import React, { useEffect, useState }  from 'react'
import SectionTitle from '../SectionTitles/SectionTitle'
import axios from 'axios';
import SlickSlider from '../UI/Carousel/slick';

export default function News() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://portal.nbm-intl.com/api/news');
                setData(response.data);
            } catch (err) {
                console.log(err);
            } finally {
                // nothing
            }
        };
        
        fetchData();
    }, []);
    const settings = {
        dots: false,
        arrows:false,
        infinite: (data.length > 3) ? true : false, 
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
          responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                }
              } 
  
            ]
      };
  return (
    <section className="single_service_s2">
        <div className="container">
            {/* Heading */} 
            <SectionTitle title="News & Events"  />

            {/* End: Heading */ }
            <div className="row">
                {
                    <SlickSlider settings={settings}>
                    {
                        data.map((news, id) => ( 
                            <div className="col-md-4 col-sm-12 p-1" key={id}>
                                <div className="service_list">
                                    <div className="report_img"> 
                                        <a target="blank" href={news.link}>
                                            <img className="sust_img" href={news.link} src={('https://portal.nbm-intl.com/' + news.thumb)} alt="news" />
                                        </a>
                                    </div>   
                                    <div className="service_para">
                                        <i className="icon_easel"></i> 
                                        <a target="blank" href={news.link} >
                                            <h5> {news.title} </h5>
                                        </a>
                                        <div className="p-2">
                                          <a target="blank" href={news.link} className="srvic_read">Read More <span className="fa fa-angle-double-right"></span></a>
                                        </div>
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
  )
}
