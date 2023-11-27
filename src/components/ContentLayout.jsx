import {
  ContentLayout,
  Container,
  Header,
  SpaceBetween,
  Link,
  Button,
  Alert
} from "@cloudscape-design/components";

export default ({
  pageDescription,
  pageHeader,
  alert,
  containerHeader,
  containerDescription,
  containerContent,
  shouldRenderContainer = true // determines Container rendering - renders as default
}) => {
  return (
    <ContentLayout
      header={
        <SpaceBetween size="m">
          <Header
            variant="h1"
            description={pageDescription}
          >
            {pageHeader}
          </Header>

          {alert && <Alert header={alert} />}
        </SpaceBetween>
      }
      >
      {!shouldRenderContainer ? null : ( // Conditionally render Container component
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
      )}
    </ContentLayout>
  );
}