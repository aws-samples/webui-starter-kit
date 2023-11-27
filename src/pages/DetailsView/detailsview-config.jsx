import {
  Container,
  Header,
  ColumnLayout,
  Box,
  StatusIndicator
} from "@cloudscape-design/components"

// Page Header
export const pageHeader = "This is the details view header"

// Description
export const pageDescription = "This is the details view description"

// Column Container Definitions
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

// Column Container Items
export const columnItems =[
  {
    name: "Item 1",
    description: "This is the first item"
  },
  {
    name: "Item 2",
    description: "This is the second item"
  },
  {
    name: "Item 3",
    description: "This is the third item"
  },
  {
    name: "Item 4",
    description: "This is the fourth item"
  }
]

// Tabs Content
export const tabsContent = [
  {
    label: "First tab label",
    id: "first",
    content: "First tab content area"
  },
  {
    label: "Second tab label",
    id: "second",
    content: "Second tab content area"
  },
  {
    label: "Third tab label",
    id: "third",
    content: "Third tab content area",
    disabled: true
  }
]

// Breadcrumb Group
export const breadcrumbGroup = [
  { text: "Homepage", href: "/" },
  { text: "Details View", href: "#/detailsview"}
]

// Container Header
export const containerHeader = "This is the details view container header"

// Container content
export const containerDescription = "This is the details view container description"

export const containerContent = <ColumnLayout columns={4} variant="text-grid">
<div>
  <Box variant="awsui-key-label">Engine</Box>
  <div>Oracle Enterprise Edition 12.1.0.2.v7</div>
</div>
<div>
  <Box variant="awsui-key-label">DB instance class</Box>
  <div>db.t2.large</div>
</div>
<div>
  <Box variant="awsui-key-label">DB instance status</Box>
  <StatusIndicator type="success">Available</StatusIndicator>
</div>
<div>
  <Box variant="awsui-key-label">Pending maintenance</Box>
  <div>None</div>
</div>
</ColumnLayout>