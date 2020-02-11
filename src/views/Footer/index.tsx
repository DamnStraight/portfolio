import React from "react";
import { Link } from "gatsby";

import GithubSvg from "./../../assets/github.inline.svg";

const Footer = () => {
  return (
    <section className="bg-gray-900">
      <div className="py-12 flex">
        <div className="container mx-auto text-white text-center flex items-center justify-center flex-col">
          <div>
            <Link to="/#landing">Back to top</Link>
          </div>
          {/* <div className="text-gray-500">Check me out on github</div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
