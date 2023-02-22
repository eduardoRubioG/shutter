import React from "react";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";

interface SEOComponentProps {
  pathname?: string;
}

const SEO = (props: SEOComponentProps) => {
  const { pathname } = props;
  const { title, description, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || "",
    description: description || "",
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  );
};

export default SEO;
