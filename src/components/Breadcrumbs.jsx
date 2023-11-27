import * as React from "react";
import BreadcrumbGroup from "@cloudscape-design/components";

export default ({breadcrumbGroup}) => {
  return (
    <BreadcrumbGroup
      items={{breadcrumbGroup}}
      ariaLabel="Breadcrumbs"
    />
  );
}