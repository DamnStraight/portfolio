/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([<div key="portal-modal" id="portal-modal" />]);
};

export { onRenderBody };
