import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import ServiceDetails from "../templates/ServiceDetails/index";

const servicePage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>NBM International Ltd | Home</title>
		  <meta
			name="description"
			content="Global business"
		  />
		</MetaTags> 
		<LayoutOne>

		    <ServiceDetails mainservice={'main'} />

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default servicePage;



