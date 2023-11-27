import * as React from "react";
import { Fragment, useEffect } from 'react';
import YourLogo from "../../your-logo.png";
import "../../App.css";
import {
  AppLayout,
  SpaceBetween,
  BreadcrumbGroup,
  TextContent,
	Input
} from "@cloudscape-design/components";
import TopNavigation from "../../components/TopNavigation/TopNav.jsx";
import SideNavigation from "../../components/SideNavigation/SideNav.jsx";
import ContentLayout from "../../components/ContentLayout.jsx";
import ConfigPanel from "../../components/ConfigPanel";
import {
  pageHeader,
  pageDescription,
  breadcrumbGroup,
  searchPlaceholder,
  backgroundText
} from "./chatbot-config.jsx";
import {
  sideNavHeader,
  sideNavPages
} from "../../components/SideNavigation/sidenav-config.jsx";
import { topNavHeader, topNavMenu } from "../../components/TopNavigation/topnav-config.jsx";
import PromptContainer from "../../components/Containers/PromptContainer";
import ResponseContainer from "../../components/Containers/ResponseContainer";
import { handleSubmit } from "../../services/postAPI.js";

// Styles
import "@cloudscape-design/global-styles/index.css"

function Chatbot() {

	const [inputPrompt, setInputPrompt] = React.useState("");
  const [showBackground, setShowBackground] = React.useState(true);
	const [prompts, setPrompts] = React.useState([]);
  const [showResponseContainer, setShowResponseContainer] = React.useState(false);
  const [responseData, setResponseData] = React.useState(null);
  const [configPanelOpen, setConfigPanelOpen] = React.useState(true)

	useEffect(() => {
    if (responseData) {
    }
  }, [responseData]);
  
	const handleKeyDown = (event) => {
		setInputPrompt(inputPrompt);
    if (event.detail.keyCode === 13) { // when user hits ENTER/RETURN
			setPrompts(prev => [...prev, inputPrompt]); // append new prompt

      // Define API request
      const handleLocalSubmit = async () => {
        // Get the prompt from the input field
        // Then call the handleSubmit function from the shared file
        try {
          const response = await handleSubmit(inputPrompt);
          console.log("yum")
          console.log("response is " + response)
          setResponseData(response);
        } catch (error) {
          // Handle errors
        }
      };

      // Send the API request
      handleLocalSubmit();

      // Show placeholder response, clear the input field, and remove background
      setInputPrompt(""); // reset Input component
      setShowBackground(false); // remove background with logo

      // Delay the appearance of the ResponseContainer by 2 seconds
    setTimeout(() => {
      // Show the ResponseContainer after 2 seconds
      setShowResponseContainer(true);
    }, 2000); // 2000 milliseconds (2 seconds) delay

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
      breadcrumbs={<BreadcrumbGroup
        items={breadcrumbGroup} />}
      navigation={<SideNavigation
        sideNavHeader={sideNavHeader}
        sideNavPages={sideNavPages}/>}
      content={
      <div>
      <SpaceBetween size="l">
      <ContentLayout
        pageDescription={pageDescription}
        pageHeader={pageHeader}
        shouldRenderContainer={false} // default container that is part of the ContentLayout component
        />
				{prompts.map((inputPrompt, index) => (
					<Fragment key={index}>
						<PromptContainer prompt={inputPrompt}></PromptContainer>
						{showResponseContainer && <ResponseContainer promptResponse="This is the default response"></ResponseContainer>}
          </Fragment>
				)) }
        <SpaceBetween size="xxs">
        {showBackground && (
          <>
            <div style={{height: 75}}/>
            <SpaceBetween>
            <img src={YourLogo} alt="Company logo" width="100px" height="100px" style={{ display: 'block', margin: '0 auto' }} />
            <div style={{height: 10}}></div>
            <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'Amazon Ember', fontSize: '20px'}}>{backgroundText}</div>
            <div style={{height: 30}}></div>
          </SpaceBetween>
          </>
        )}
          <Input
						onChange={({ detail }) => setInputPrompt(detail.value)}
						onKeyDown={handleKeyDown}
						value={inputPrompt}
						placeholder={searchPlaceholder}
          />
          <TextContent>
            <small>
              Press enter to send
            </small>
          </TextContent>
        </SpaceBetween>
      </SpaceBetween>
      </div>
      }
    />
    </div>
  );
}

export default Chatbot;
