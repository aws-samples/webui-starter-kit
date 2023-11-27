import * as React from "react";
import Cards from "@cloudscape-design/components/cards";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

export default ({
  containerHeader,
  cardDefinition,
  cardItems,
  filteringPlaceholder
}) => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [filteringText, setFilteringText] = React.useState("");
  return (
    <Cards
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      ariaLabels={{
        itemSelectionLabel: (e, n) => `select ${n.name}`,
        selectionGroupLabel: "Item selection"
      }}
      cardDefinition={cardDefinition}
      cardsPerRow={[
        { cards: 1 },
        { minWidth: 500, cards: 3 }
      ]}
      items={cardItems}
      loadingText="Loading resources"
      selectionType="multi"
      trackBy="name"
      visibleSections={["description", "type", "size"]}
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
          filteringPlaceholder={filteringPlaceholder}
          filteringText={filteringText}
          onChange={({ detail }) =>
            setFilteringText(detail.filteringText)
          }
        />
      }
      header={
        <Header
          counter={
            selectedItems.length
              ? "(" + selectedItems.length + "/10)"
              : "(10)"
          }
        >
          {containerHeader}
        </Header>
      }
      pagination={
        <Pagination currentPageIndex={1} pagesCount={2} />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 6,
            visibleContent: [
              "description",
              "type",
              "size"
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 6, label: "6 resources" },
              { value: 12, label: "12 resources" }
            ]
          }}
          visibleContentPreference={{
            title: "Select visible content",
            options: [
              {
                label: "Main distribution properties",
                options: [
                  {
                    id: "description",
                    label: "Description"
                  },
                  { id: "type", label: "Type" },
                  { id: "size", label: "Size" }
                ]
              }
            ]
          }}
        />
      }
    />
  );
}