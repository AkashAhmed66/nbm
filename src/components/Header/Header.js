import React from 'react';
import {Link} from 'react-router-dom';
 

const Header = () => {
	return (
 
    <div className="header_top_area">
        <div className="container">
            <div className="row">
                {/* Address / Phone / Email*/}
                <div className="colm">
                    <div className="header_wrapper_1">
                        <ul>
                            <li><i className="icon_phone"></i> +8801716 403090 </li>
                            <li> <i className="icon_mail_alt"></i>info@nbm-intl.com</li>
                        </ul>
                    </div>
                </div>

                {/* SOCIAL ICON */}
                <div className="colm">
                    <div className="header_social"> 
                        <a target='_blank' href="https://www.facebook.com/nbminternationalltd">
                            <i className="fa fa-facebook"></i>
                        </a> 
                        <a target='_blank' href="https://twitter.com/nbminternationalltd">
                            <i className="fa fa-twitter"></i>
                        </a> 
                        <a target='_blank' href="https://www.linkedin.com/company/nbminternationalltd/?viewAsMember=true">
                            <i className="fa fa-linkedin"></i>
                        </a> 
                        {/* <a target='_blank' href="https://www.linkedin.com/company/nbm-international-ltd">
                            <i className="fa fa-linkedin"></i>
                        </a>  */}
                       
                    </div>
                </div>

                {/* Quote button */}
                <div className="colm">
                    <div className="header_button text-right">
                        <Link to="brochure">Brochure</Link>
                    </div>
                </div>
                 {/* End: Quote button */}
                 
            </div>
        </div>
    </div>
 
	)
}


export default Header;