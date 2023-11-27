import * as React from "react";
import { languageOptions, modelNameOptions } from "../pages/Chatbot/chatbot-config.jsx";
import {
    HelpPanel,
    Select,
    SpaceBetween
} from "@cloudscape-design/components";

export default () => {
    const [modelName, setModelName] = React.useState(modelNameOptions[0]);
      const [language, setLanguage] = React.useState(languageOptions[0]);
  return (
    <HelpPanel
      header={<h2>Configuration</h2>}
    >
      <div>
        <p>
          Select a language:
        </p>
      </div>
      <SpaceBetween size="m">
      <Select
        selectedOption={language}
        onChange={({ detail }) => setLanguage(detail.selectedOption)}
        options={languageOptions}
        />
        <div>
        <p>
          Select a Foundational Model:
        </p>
      </div>
      </SpaceBetween>
      <Select
      selectedOption={modelName}
      onChange={({ detail }) =>
        setModelName(detail.selectedOption)
      }
      options={modelNameOptions}
      >
    </Select>
    </HelpPanel>
  );
}
