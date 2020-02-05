import React from "react";

import LandingSection from "../components/LandingSection";
import Projects from "../components/Projects";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <LandingSection />
    <Projects />
  </Layout>
);

export default IndexPage;
