# Configuration
Configuration options for `Chatbot.jsx` are in multiple files. Read the section below to find the desired parameter.

## Configuration for static data
Configurable props for `Chatbot.jsx` include:
- `pageHeader`
- `pageDescription`
- `breadcrumbGroup`
- `searchPlaceholder`
- `backgroundText`

These props are imported from `src/pages/Chatbot/chatbot-config.md`. To modify them, open `chatbot-config.md` and update the desired value. Default values are labeled with the name of the prop so that you can easily find the correct prop to update.

## Configuration for logo
To update the logo that initially renders in `Chatbot.jsx`, save your logo in the `src` directory and update the name of the path below in `src/pages/Chatbot/chatbot-config.md`.
- `import YourLogo from "../../your-logo.png";`

## Configuration for `responseContainer`
When a prompt is passed via the input component, the default response value is the hardcoded value `This is the default response`, stored in the `promptResponse` prop of `ResponseContainer` of `Chtbot.jsx`.

This page is set up to allow a request to be made to API Gateway, which is then passed to a Lambda function, which can then be sent to a Large Language Model (e.g., via Amazon Bedrock, OpenAI API, etc.) and then render the response returned - for example:

![Reference architecture example](../../resources/images/Chatbot-ref-architecture.png)

The POST API request is executed via the `handleSubmit` function in `Chatbot.jsx`, which is imported from `src/services/postAPI.js`. The `postAPI.js` file imports the API Gateway URL as `POST_URL` from `src/config.js`.
<br>

In order to configure the Chatbot for dynamic prompt responses:

1. Create a POST API in [Amazon API Gateway](https://aws.amazon.com/api-gateway/) and update the `POST_URL` in `src/config.js`.
> Note: You may want to add `config.js ` to `.gitignore` to prevent unintended access to the invoke URL. <br>

2. Create a function in [AWS Lambda](https://aws.amazon.com/lambda/) and set the API you just created as a trigger for the function. The Lambda function should expect the following parameters:
- `inputPrompt`
- `modelName`

The response from the Lambda function should be stored as `response` in order to be passed back to `promptResponse` and rendered in the `ResponseContainer`.

`inputPrompt` is the input passed to Chatbot UI via the input text area, and `modelName` is the name of the model selected on the side panel. The response received should be stored as `response`.

> Note: You will likely need to update the timeout of the Lambda function in order to allow sufficient time to call the LLM and receive a response. It will also need permission to call the model (i.e., Bedrock, SageMaker), if using an AWS service.
<br>

3. Update `promptResponse` in `src/pages/Chatbot/Chatbot.jsx` as follows:
```
{showResponseContainer && <ResponseContainer promptResponse={responseData}></ResponseContainer>}
```

The `responseData` prop will allow the value returned by the Lambda function to be rendered via the `promptResponse` prop of `ResponseContainer`.