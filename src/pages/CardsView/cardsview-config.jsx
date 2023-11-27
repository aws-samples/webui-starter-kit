import {
  Container,
  Header,
  ColumnLayout,
  Box,
  StatusIndicator
} from "@cloudscape-design/components"

// Page Header
export const pageHeader = "This is the cards view header"

// Description
export const pageDescription = "This is the cards view description"

// Column Container Header
export const containerHeader = "Selected items"

// Container Content
export const containerContent = "Content"

// Breadcrumb Group
export const breadcrumbGroup = [
  { text: "Homepage", href: "/" },
  { text: "Cards View", href: "#/cardsview"}
]

// Card Definition
export const cardDefinition = { header:e=>e.name,
  sections:[ { id:"description",
      header:"Description",
      content:e=>e.description },
    { id:"type",
      header:"Type",
      content:e=>e.type },
    { id:"size",
      header:"Size",
      content:e=>e.size } ] }

// Card Items
export const cardItems = [
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
    description: "This is the third item",
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
    alt: "Fifth",
    description: "This is the fifth item",
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

// Filtering Placeholder
export const filteringPlaceholder = "This is the filtering placeholder"