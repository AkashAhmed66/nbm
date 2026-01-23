import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home";
import Service from "./pages/Service";
import SingleService from "./pages/SingleService";
import Gallery from "./pages/Gallery";
import SingleGallery from "./pages/SingleGallery";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ClientLogin from "./pages/ClientLogin";
import SingleBlog from "./pages/SingleBlog";
import Blog from "./pages/Blog";
import About from "./pages/About";
import AboutEcotec from "./pages/AboutEcotec";
import QualityIntegrity from "./pages/QualityIntegrity";
import WhoWeWorkWith from "./pages/WhoWeWorkWith";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import ImpartialityStatement from "./pages/ImpartialityStatement";
import Sustainability from "./pages/Sustainability";
import Brochure from "./pages/Brochure";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />          
          <Route
            path={`${process.env.PUBLIC_URL + "/about-ecotec"}`}
            component={AboutEcotec}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-ecotec"}`}
            component={AboutEcotec}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/quality-integrity"}`}
            component={QualityIntegrity}
          />
          <Route
          path={`${process.env.PUBLIC_URL + "/who-we-work-with"}`}
          component={WhoWeWorkWith}
        />
          <Route exact path={`${process.env.PUBLIC_URL + '/service'}`}
            component={Service}
          />
          <Route path={`${process.env.PUBLIC_URL + '/service/:serviceIDD'}`}
            component={SingleService}
          />
          <Route path={`${process.env.PUBLIC_URL + '/gallery/:galleryID'}`}
            component={SingleGallery}
          />
          <Route path={`${process.env.PUBLIC_URL + '/blog/:blogID'}`}
            component={SingleBlog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery"}`}
            component={Gallery}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/certificate-check"}`}
            component={ClientLogin}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route
          path={`${process.env.PUBLIC_URL + "/privacy-policy"}`}
          component={PrivacyPolicy}
          />
          <Route
          path={`${process.env.PUBLIC_URL + "/terms-of-use"}`}
          component={TermsOfUse}
          />
          <Route
          path={`${process.env.PUBLIC_URL + "/impartiality-statement"}`}
          component={ImpartialityStatement}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/sustainability"}`}
            component={Sustainability}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/brochure"}`}
            component={Brochure}
          />
          <Route exact component={NotFound} />

        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
