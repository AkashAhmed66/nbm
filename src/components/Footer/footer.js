import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Link } from "react-router-dom";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import DownloadArea from "../Footer/DownloadArea";
import UseFullLinkArea from "../Footer/UseFullLinkArea";

const Footer = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const serviceURL = `/about-ecotec`;

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/*  Start:About  */}
          <div className="col-lg-3 col-sm-12" style={{ textAlign: "justify" }}>
            <Widget title="About us">
              <p>
                NBM INTERNATIONAL LTD. (NBM) is an Independent Audit, Inspection
                and Certification Company in ESG Domain (Environment, Social and
                Governance). We deliver one stop services that consists of
                Audit, Training & Capacity Building, Advisory and ESG Reporting
                that drive positive impact.
                <Link
                  to={`${process.env.PUBLIC_URL + serviceURL}`}
                  className="serv_read"
                >
                  <span className={"text-warning"}>
                    Read More <span className="fa fa-angle-double-right"></span>
                  </span>
                </Link>
              </p>
            </Widget>
          </div>
          {/*  End:About  */}

          {/*  Start:Quick Link  */}
          <div className="col-lg-3 col-sm-12">
            <Widget title="Download Area">
              <DownloadArea />
            </Widget>
          </div>
          {/*  End:Quick Link  */}

          {/*  Start:Latest post   */}
          <div className="col-lg-3 col-sm-12">
            <Widget title="Useful Link">
              <UseFullLinkArea />
            </Widget>
          </div>
          {/*  End:Latest post  */}

          {/*  Start:Newsletter  */}
          <div className="col-lg-3 col-sm-12">
            <Widget title="Subcribe now">
              {/*  Start:Subscribe  */}
              <div className="news_letter_wrp">
                <p>
                  Subscribe our newsletter to get more update & join to NBM
                  International Ltd.{" "}
                </p>
                <form className="footer_subs">
                  <input
                    className="form-input"
                    placeholder="Enter Your Email Address"
                    type="text"
                  />
                  <button type="submit" className="form-button"></button>
                </form>
                {/*  END MAILCHIMP FORM  */}
              </div>
            </Widget>
          </div>
          {/*  End:Start Subscribe  */}

          {/*  Start:Subfooter  */}
          <div className="subfooter">
            <div className="copyright_text">
              {" "}
              &copy; {new Date().getFullYear()} NBM International Ltd.
            </div>
            <div className="copyright_text">
              {" "}
              <Link to={`${process.env.PUBLIC_URL + "/privacy-policy"}`}>
                Privacy Policy<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="copyright_text">
              {" "}
              <Link to={`${process.env.PUBLIC_URL + "/terms-of-use"}`}>
                Terms of Use<i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="copyright_text">
              {" "}
              <Link
                to={`${process.env.PUBLIC_URL + "/impartiality-statement"}`}
              >
                Statement Of Impartiality<i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            {/* SOCIAL ICON */}
            <div className="footer_social">
              <ul className="footer_social_icons">
                {/* <li> <a target="_blank" href="https://www.linkedin.com/company/nbm-international-ltd"><i className="fa fa-linkedin"></i></a> </li> */}
                <li>
                  {" "}
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/nbminternationalltd/?viewAsMember=true"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    target="_blank"
                    href="https://www.facebook.com/nbminternationalltd"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    target="_blank"
                    href="https://twitter.com/nbminternationalltd"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="copyright_text">
            Developed by <a href="https://sourceexpert.net/" target="_blank"><strong>SourceExpert</strong></a>
            </div>

            <button
              className={`scrollup ${scroll > top ? "show" : ""}`}
              onClick={() => scrollToTop()}
            >
              <span className="arrow_triangle-up"></span>
            </button>
          </div>
          {/* End:Subfooter  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
