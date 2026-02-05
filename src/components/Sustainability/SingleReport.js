import React, { useEffect, useState } from 'react';   
import SectionTitle from "../SectionTitles/SectionTitle";
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import SlickSlider from '../UI/Carousel/slick';

export default function SingleReport(props) {

  const settings = {
      dots: false,
      arrows:false,
      infinite: (props.reportCategory.reports.length > 3) ? true : false, 
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
      <div className="row">
          <SlickSlider settings={settings}>
          {
              props.reportCategory.reports.map((report, id) => ( 
                  <div className="col-md-4 col-sm-12 p-1" key={id}>
                      <div className="service_list">
                          <div className="report_img"> 
                              <a target="blank" href={report.link}>
                                  <img className="sust_img" href={report.link} src={('https://portal.nbm-intl.com/' + report.thumb)} alt="report" />
                              </a>
                          </div>   
                          <div className="service_para">
                              <i className="icon_easel"></i> 
                              <a target="blank" href={report.link} >
                                  <h5> {report.title} </h5>
                              </a>
                              <div className="p-2">
                                <a target="blank" href={report.link} className="srvic_read">Read More <span className="fa fa-angle-double-right"></span></a>
                              </div>
                          </div>
                      </div> 
                  </div>
              ))
          }
          </SlickSlider>
        </div>
  )
}
