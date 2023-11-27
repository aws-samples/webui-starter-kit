// Table Header
export const tableHeader = "This is the table view header"

// Table Filter Placeholder
export const filterPlaceholder = "This is the filtering placeholder"

// Column Definitions
export const columnDefinitions = [
    {
      id: "variable",
      header: "Variable name",
      cell: e => e.name,
      sortingField: "name",
      isRowHeader: true
    },
    {
      id: "value",
      header: "Text value",
      cell: e => e.alt,
      sortingField: "alt"
    },
    { id: "type", header: "Type", cell: e => e.type },
    {
      id: "description",
      header: "Description",
      cell: e => e.description
    }
  ];

// Column Display
export const columnDisplay=[
  { id: "variable", visible: true },
  { id: "value", visible: true },
  { id: "type", visible: true },
  { id: "description", visible: true }
]

// Table Items
export const columnItems=[
  {
    name: "Item 1",
    alt: "First",
    description: "This is the first item",
    type: "1A",
    size: "Small"
  },
  {
    name: "Item 2",
    alt: "Second",
    description: "This is the second item",
    type: "1B",
    size: "Large"
  },
  {
    name: "Item 3",
    alt: "Third",
    description: "-",
    type: "1A",
    size: "Large"
  },
  {
    name: "Item 4",
    alt: "Fourth",
    description: "This is the fourth item",
    type: "2A",
    size: "Small"
  },
  {
    name: "Item 5",
    alt: "-",
    description:
      "This is the fifth item with a longer description",
    type: "2A",
    size: "Large"
  },
  {
    name: "Item 6",
    alt: "Sixth",
    description: "This is the sixth item",
    type: "1A",
    size: "Small"
  }
]

// Button Label
export const buttonLabel = "Button Label"

// Button Options
export const buttonOptions = [
    { text: "View", id: "vw", disabled: false },
    { text: "Delete", id: "rm", disabled: false },
    { text: "Rename", id: "rn", disabled: true },
  ]

export const breadcrumbGroup = [
  { text: "Homepage", href: "/" },
  { text: "Table View", href: "#/tableview" }
]