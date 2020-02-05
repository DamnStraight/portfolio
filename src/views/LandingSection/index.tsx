import React, { useEffect } from "react";

import styles from "./LandingSection.module.scss";

const LandingSection: React.FC = () => {
  useEffect(() => {
    const element = document.querySelector("#name");
    element?.classList.add(styles.fadeinState);
  }, []);

  return (
    <section className="h-screen">
      <div
        className={`h-full pt-12 pb-12 ${styles.bgGradient} flex flex-col items-center justify-center`}
      >
        <div className="container mx-auto font-roboto text-white text-center md:text-left">
          <p className="text-4xl leading-tight mb-0 text-shadow-lg">
            Hello, I'm{" "}
          </p>
          <p
            id="name"
            className={`font-bold text-5xl md:text-9xl leading-tight mb-0 ${styles.defaultState} text-shadow-lg`}
          >{`Steven Labelle`}</p>
          <p className="text-2xl leading-normal mb-0 text-shadow-lg">
            I'm a Software Engineer.
          </p>
          <p className="text-2xl leading-normal mb-0 text-shadow-lg">
            I'm a Full Stack Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
