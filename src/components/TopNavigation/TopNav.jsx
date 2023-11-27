import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";

export default ({topNavHeader, topNavMenu}) => {
  return (
    <TopNavigation
      identity={topNavHeader}
      utilities={topNavMenu}
      i18nStrings={{
        searchIconAriaLabel: "Search",
        searchDismissIconAriaLabel: "Close search",
        overflowMenuTriggerText: "More",
        overflowMenuTitleText: "All",
        overflowMenuBackIconAriaLabel: "Back",
        overflowMenuDismissIconAriaLabel: "Close menu"
      }}
    />
  );
}