import React from "react";

import LandingSection from "../views/LandingSection";
import Projects from "../views/ProjectSection";
import Layout from "../components/layout";
import Footer from "../views/Footer";

const IndexPage = () => (
  <Layout>
    <LandingSection />
    <Projects />
    <Footer />
  </Layout>
);

export default IndexPage;
