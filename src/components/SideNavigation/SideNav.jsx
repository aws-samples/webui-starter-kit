import * as React from "react";
import SideNavigation from "@cloudscape-design/components/side-navigation";
import { useNavigate, useLocation } from 'react-router-dom';

export default ({sideNavHeader, sideNavPages}) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <SideNavigation
      header={sideNavHeader}
      activeHref={location.pathname}
      onFollow={event => {
        if (!event.detail.external) {
          event.preventDefault();
          navigate(event.detail.href)
        }
      }}
      items={sideNavPages}
    />
  );
}