import React from 'react';

const CanadaOffice = () => {

    return (
        <div className="row">
            {/* <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_pin_alt"></i>
                <h6 style={{'margin-top': '0px'}}>Canada Office</h6>
                <address>20 Olive Avenue, North York, Ontario, Toronto, ON M2N 7G5, Canada</address>
            </div> */}
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_pin_alt"></i>
                <p>Canada Office: </p>
                <h6>20 Olive Avenue, North York, Ontario, Toronto, ON M2N 7G5, Canada</h6>
            </div>
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_phone"></i>
                {/*<h5>Cell Number</h5>*/}
                <h6>+1 (416) 829-3412</h6>
            </div>
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_chat"></i>
                {/*<h5>Email</h5>*/}
                <h6>info@nbm-intl.com</h6>
            </div>
            <div className="bottom_contact col-sm-3 col-xs-12"><i className="icon_clock_alt"></i>
                {/*<h5>Opening Hours</h5>*/}
                <h6>Mon-Fri 9am - 6pm</h6>
            </div>
        </div>
    );
}

export default CanadaOffice;