import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ data }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.siteTitle}</title>
      <link rel="icon" href={data.fav} />
      <meta name="description" content={data.siteDescription} />
    </Helmet>
  );
};

export default Meta;
