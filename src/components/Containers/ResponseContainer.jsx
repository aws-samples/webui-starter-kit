import * as React from "react";
import {
    Container,
    Grid,
    Icon
} from "@cloudscape-design/components";

export default ({ promptResponse }) => {

  return (
    <Grid
      gridDefinition={[{ colspan: 1 }, { colspan: 10 }, { colspan: 1 }]}
    >
      <Icon
        name="contact"
        size="large"
        variant="normal"/>
      <Container>
        {promptResponse}
      </Container>
      <Icon
        name="contact"
        size="large"
        variant="inverted"/>
    </Grid>
    );
}