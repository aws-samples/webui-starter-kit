import * as React from "react";
import {
  Table,
  Box,
  Button,
  TextFilter,
  Header,
  Pagination,
  CollectionPreferences,
  SpaceBetween,
  ButtonDropdown
} from "@cloudscape-design/components";

export default ({
  tableHeader,
  filterPlaceholder,
  columnDefinitions,
  columnDisplay,
  columnItems,
  buttonLabel,
  buttonOptions
  }) => {
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [filteringText, setFilteringText] = React.useState("");
  return (
    <Table
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item) => {
          const isItemSelected = selectedItems.filter(
            i => i.name === item.name
          ).length;
          return `${item.name} is ${
            isItemSelected ? "" : "not"
          } selected`;
        }
      }}
      columnDefinitions={columnDefinitions}
      columnDisplay={columnDisplay}
      items={columnItems}
      loadingText="Loading resources"
      selectionType="single"
      stickyHeader
      variant="full-page"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No resources</b>
          <Box
            padding={{ bottom: "s" }}
            variant="p"
            color="inherit"
          >
            No resources to display.
          </Box>
          <Button>Create resource</Button>
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder={filterPlaceholder}
          filteringText={filteringText}
          onChange={({ detail }) =>
            setFilteringText(detail.filteringText)
          }
        />
      }
      header={
        <Header
          variant="awsui-h1-sticky"
          actions={
            <SpaceBetween
              direction="horizontal"
              size="xs"
            >
              <ButtonDropdown
                items={buttonOptions}
              >
                {buttonLabel}
              </ButtonDropdown>
            </SpaceBetween>
          }
          >
          {tableHeader}
        </Header>
      }
      pagination={
        <Pagination currentPageIndex={1} pagesCount={1} />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 10,
            contentDisplay: [
              { id: "variable", visible: true },
              { id: "value", visible: true },
              { id: "type", visible: true },
              { id: "description", visible: true }
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 10, label: "10 resources" },
              { value: 20, label: "20 resources" }
            ]
          }}
          wrapLinesPreference={{}}
          stripedRowsPreference={{}}
          contentDensityPreference={{}}
          contentDisplayPreference={{
            options: [
              {
                id: "variable",
                label: "Variable name",
                alwaysVisible: true
              },
              { id: "value", label: "Text value" },
              { id: "type", label: "Type" },
              { id: "description", label: "Description" }
            ]
          }}
          stickyColumnsPreference={{
            firstColumns: {
              title: "Stick first column(s)",
              description:
                "Keep the first column(s) visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "First column", value: 1 },
                { label: "First two columns", value: 2 }
              ]
            },
            lastColumns: {
              title: "Stick last column",
              description:
                "Keep the last column visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "Last column", value: 1 }
              ]
            }
          }}
        />
      }
    />
  );
}