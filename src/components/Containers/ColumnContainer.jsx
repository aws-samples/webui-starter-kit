import * as React from "react";
import {
    ColumnLayout,
    Box,
    StatusIndicator,
    Container,
    Header
} from "@cloudscape-design/components";

export default ({
  columnContainerHeader,
  columnContainerItems
}) => {
  return (
    <Container header={<Header variant="h2">{columnContainerHeader}</Header>}>
    <ColumnLayout columns={4} variant="text-grid">
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
  </Container>
  );
}