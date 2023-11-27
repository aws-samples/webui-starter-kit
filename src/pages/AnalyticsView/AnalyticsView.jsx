import React, { useEffect } from "react";
import '../../App.css';
import {
  AppLayout,
  SpaceBetween,
  FormField,
  Select,
  Tabs,
  Spinner,
  TextContent,
  Input
} from "@cloudscape-design/components"
import TopNavigation from "../../components/TopNavigation/TopNav.jsx";
import SideNavigation from "../../components/SideNavigation/SideNav.jsx";
import ContentLayout from "../../components/ContentLayout.jsx";
import ConfigPanel from "../../components/ConfigPanel.jsx";
import {
  pageHeader,
  pageDescription,
  alert,
  containerHeader,
  containerDescription,
  placeholder,
  sampleContentOptions,
  dropdownInstruction,
  searchInstruction
} from "./analyticsview-config.jsx";
import { handleSubmit } from "../../services/postAPI.js";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config.jsx";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config.jsx"

// Styles
import "@cloudscape-design/global-styles/index.css"


function AnalyticsView() {
    const [sampleContent, setSampleContent] = React.useState(null);
    const [inputPrompt, setInputPrompt] = React.useState("");
    const [prompts, setPrompts] = React.useState([]);
    const [responseData, setResponseData] = React.useState(null);
    const [configPanelOpen, setConfigPanelOpen] = React.useState(true);
    const [loadOutput, setLoadOutput] = React.useState(false);
    const [showOutput, setShowOutput] = React.useState(false);
    
    useEffect(() => {
      if (responseData) {
        setLoadOutput(false)
      }
    }, [responseData]);

    const handleKeyDown = (event) => {
      setInputPrompt(inputPrompt);
      if (event.detail.keyCode === 13) { // when user hits ENTER/RETURN
        setPrompts(prev => [...prev, inputPrompt]); // append new prompt
        setLoadOutput(true); // show Spinner to indicate results are loading
        setShowOutput(false); // remove previous Output while new results are loading
  
        // Define API request
        const handleLocalSubmit = async () => {
          // Get the prompt from the input field
          // Then call the handleSubmit function from the shared file
          try {
            const response = await handleSubmit(inputPrompt);
            console.log("response is " + response)
            setResponseData(response);
            setLoadOutput(false); // hide Spinner once response has been received
            setShowOutput(true); // show Output once response has been received
          } catch (error) {
            // Handle errors
          }
        };
  
        // Send the API request
        handleLocalSubmit();
        
        // Clear the input field
        setInputPrompt(""); // reset Input component
  
        return inputPrompt;
      }
    }
    
    
  return (
    <div>
    <TopNavigation
      topNavHeader={topNavHeader}
      topNavMenu={topNavMenu}/>
    <AppLayout
      tools={<ConfigPanel/>}
      onToolsChange={({ detail }) => setConfigPanelOpen(detail.open)}
      toolsOpen={configPanelOpen}
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={
        <div>
        <SpaceBetween size="xl">
        <ContentLayout
          pageDescription={pageDescription}
          pageHeader={pageHeader}
          alert={alert}
          containerHeader={containerHeader}
          containerDescription={containerDescription}
          containerContent={
            <div>
              {/* Removed <Form> component */}
                <SpaceBetween direction="vertical" size="m">
                <SpaceBetween direction="vertical" size="xxs">
                    <FormField
                      label={dropdownInstruction}
                      description="Select a file from the list below"
                    />
                    <Select
                      selectedOption={sampleContent}
                      onChange={({ detail }) => setSampleContent(detail.selectedOption)}
                      options={sampleContentOptions}
                      placeholder="Select file..."
                    />
                  </SpaceBetween>
                  <SpaceBetween direction="vertical" size="xxs">
                    <FormField
                      label={searchInstruction}
                    />
                    <Input
                      onChange={({ detail }) => setInputPrompt(detail.value)}
                      onKeyDown={handleKeyDown}
                      value={inputPrompt}
                      placeholder={placeholder}
                    />
                    <TextContent>
                      <small>
                        Press enter to send
                      </small>
                    </TextContent>
                  </SpaceBetween>
                </SpaceBetween>
              <SpaceBetween
                alignItems="center">
              {loadOutput && <Spinner size="large"/>}
              </SpaceBetween>
              {showOutput && <Tabs
                tabs={[
                  {
                    label: "Output 1",
                    id: "output-1",
                    content: (<>This is the text for Output 1</>)
                  },
                  {
                    label: "Output 2",
                    id: "output-2",
                    content: (<>This is the text for Output 2</>)
                  },
                  {
                    label: "Output-3",
                    id: "output-3",
                    content: (<>This is the text for Output 3</>)
                  }
                ]}
              />}
            </div>
        }
        />
          </SpaceBetween>
        </div>
      }
    />

    </div>
  );
}

export default AnalyticsView;