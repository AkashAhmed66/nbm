import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import GalleryDetails from "../templates/GalleryDetails/index";

const galleryPage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>NBM International Ltd | Galary</title>
		  <meta
			name="description"
			content="Global business"
		  />
		</MetaTags> 
		<LayoutOne>

		    <GalleryDetails />

		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default galleryPage;



