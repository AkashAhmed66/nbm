import React, { Fragment }from 'react'
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import ServiceDetails from "../templates/ServiceDetails/index";
import PageTemplate from '../components/Sustainability/PageTemplate';

export default function Sustainability() {
    return (
        <Fragment>
          <MetaTags>
            <title>NBM International Ltd. | Sustainability</title>
            <meta
              name="description"
              content="Global business"
            />
          </MetaTags> 
          <LayoutOne>
              <PageTemplate />
          </LayoutOne>
        </Fragment>
      );
}
