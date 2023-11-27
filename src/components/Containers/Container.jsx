import * as React from "react";
import {
    ColumnLayout,
    Box,
    StatusIndicator,
    Container,
    Header
} from "@cloudscape-design/components";

export default ({
  containerDescription,
  containerHeader,
  containerContent
}) => {
  return (
    <Container
    header={
      <Header
        variant="h2"
        description={containerDescription}
      >
        {containerHeader}
      </Header>
    }
  >
    {containerContent}
  </Container>
  );
}