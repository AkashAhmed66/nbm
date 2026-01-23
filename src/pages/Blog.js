import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import BlogPageContent from "../templates/Blog/index";
import PageHeader from '../components/PageHeader'

const blogPage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>NBM International Ltd | Blog</title>
		  <meta
			name="description"
			content="Global business"
		  />
		</MetaTags>
		<LayoutOne>
			<PageHeader
				bgImg={(process.env.PUBLIC_URL + '/assets/images/page_bg.jpg')}
				title="Our Blog" 
			/>

			<BlogPageContent />
			
		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default blogPage;



