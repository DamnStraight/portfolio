import React from "react";

import LandingSection from "../views/LandingSection";
import Projects from "../views/Projects";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <LandingSection />
    <Projects />
  </Layout>
);

export default IndexPage;
