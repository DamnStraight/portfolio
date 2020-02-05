import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import styled from "styled-components";

type StyledDivProps = {
  visible: boolean;
};

const FadeInWrapper = styled.div<StyledDivProps>`
  transition: transform 0.6s, opacity 0.6s ease-out;
  transform: translateY(${props => (props.visible ? "0px" : "-10%")});
  opacity: ${props => (props.visible ? "1" : "0")};
`;

type Props = {
  children: React.ReactNode;
  /**
   * Delay in ms before firing the fade in effect. Delay begins after the visibility threshold is met.
   */
  delay?: number;
  /**
   * Percentage of visibility before firing the fade in effect, default is 40%
   */
  threshold?: number;
};

/**
 * Creates a fade in from top effect on its children
 */
const FadeIn: React.FC<Props> = ({ children, delay = 0, threshold = 0.4 }) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= threshold) {
            setTimeout(() => setVisible(entry.isIntersecting), delay);
          }
        }
      });
    }, { threshold:  [threshold] });
    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <FadeInWrapper ref={ref} visible={isVisible}>
      {children}
    </FadeInWrapper>);
};

export default FadeIn;