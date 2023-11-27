import '../../App.css';
import {
  AppLayout,
  BreadcrumbGroup
 } from "@cloudscape-design/components"
import TopNavigation from "../../components/TopNavigation/TopNav";
import SideNavigation from "../../components/SideNavigation/SideNav";
import {
  tableHeader,
  filterPlaceholder,
  columnDefinitions,
  columnDisplay,
  columnItems,
  buttonLabel,
  buttonOptions,
  breadcrumbGroup
} from "./tableview-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config"
import Table from "../../components/Table/Table";


// Styles
import "@cloudscape-design/global-styles/index.css"

function TableView() {
  return (
    <div>
    <TopNavigation
      topNavHeader={topNavHeader}
      topNavMenu={topNavMenu}/>
    <AppLayout
      toolsHide="true"
      breadcrumbs={<BreadcrumbGroup
        items={breadcrumbGroup} />}
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={<Table
          variant="full-page"
          tableHeader={tableHeader}
          filterPlaceholder={filterPlaceholder}
          columnDefinitions={columnDefinitions}
          columnDisplay={columnDisplay}
          columnItems={columnItems}
          buttonLabel={buttonLabel}
          buttonOptions={buttonOptions}
      />}
    />
    </div>
  );
}

export default TableView;
