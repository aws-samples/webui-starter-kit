import * as React from "react";
import {
    Container,
    Grid,
    Icon
} from "@cloudscape-design/components";

export default ({ prompt }) => {
  return (
    <Grid
      gridDefinition={[{ colspan: 1 }, { colspan: 10 }, { colspan: 1 }]}
    >
      <Icon
        name="user-profile"
        size="large"
        variant="inverted"
      />
      <Container>
        {prompt}
      </Container>
      <Icon
        name="user-profile"
        size="large"
        variant="normal"/>
    </Grid>
  );
}