import React from 'react';

const BDOffice = () => {

    return (
        <div className="row">
            {/* <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_pin_alt"></i>
                <h6 style={{'margin-top': '0px'}}>Bangladesh Office</h6>
                <address>House: 36, Road: 13, Sector 11 Uttara Model Town Dhaka-1230, Bangladesh</address>
            </div> */}
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_pin_alt"></i>
                <p>Bangladesh Office: </p>
                <h6>House: 36, Road: 13, Sector 11 Uttara Model Town Dhaka-1230, Bangladesh</h6>
            </div>
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_phone"></i>
                {/*<h5>Cell Number</h5>*/}
                <h6 style={{'margin-top': '0px'}}>+8801716 403090 , +8801616403090, +8801767417009</h6>
            </div>
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_chat"></i>
                {/*<h5>Email</h5>*/}
                <h6 style={{'margin-top': '0px'}}>info@nbm-intl.com</h6>
            </div>
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_clock_alt"></i>
                {/*<h5>Opening Hours</h5>*/}
                <h6 style={{'margin-top': '0px'}}>Sat-Th 9am - 6pm</h6>
            </div>
        </div>
    );
}

export default BDOffice;