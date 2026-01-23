import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import PageHeader from "../components/PageHeader";
import { ResponsiveEmbed } from "react-bootstrap";

const Brochure = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>NBM International Ltd | Brochure</title>
        <meta
          name="description"
          content="NBM International Ltd Brochure"
        />
      </MetaTags>

      <LayoutOne>
        <PageHeader
          bgImg={"/assets/images/page_bg.jpg"}
          title="Our Brochure"
        />

        <div className="page-content-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="pdf-viewer-wrapper">

                  {/* PDF VIEWER */}
                  <embed
                    src="/brochure.pdf#toolbar=1&navpanes=0&scrollbar=1"
                    type="application/pdf"
                    title="NBM International Brochure"
                    width="100%"
                    height="1200"
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Brochure;
