import React from 'react'; 
import {Link} from "react-router-dom"; 
 

function ServiceItem(props) {
    const serviceURL = `/service/${props.title.split(' ').join('-').toLowerCase()}?id=${props.id}&type='main'`
    return ( 
 
    <div className="col-sm-12"> 
        <div className="service_list"> 
            <Link to={(process.env.PUBLIC_URL + props.link)}> 
                <div className="service_img"> 
                    <img src={(process.env.PUBLIC_URL + '/assets/images/' + props.thumb)} alt="service" />
                </div>
            </Link>
            <div className="service_para"> 
                <Link to={(process.env.PUBLIC_URL + props.link)}><i className={`${props.icon}`}></i>
                    <h5>{props.title}</h5>
                </Link> 
                <p>{props.shortDesc}</p> 
                {/* <Link to={`${process.env.PUBLIC_URL + serviceURL}`} className="serv_read">{props.btnText} <span className="fa fa-angle-double-right"></span></Link> */}
            </div> 
        </div> 
    </div> 

    );
}

export default ServiceItem;

 