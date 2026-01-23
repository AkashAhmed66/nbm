import React, { Fragment, useEffect, useState } from "react";
import PageHeader from '../../components/PageHeader'
import PageWrapper from "../../components/PageWrapper";
import Reports from "./Reports";
import News from "./News";


export default function PageTemplate() {
  return (
    <Fragment>

        <PageHeader
            bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
            title={"Sustainablity"}
        />
        
        <Reports />
        <News />

    </Fragment>
  )
}
