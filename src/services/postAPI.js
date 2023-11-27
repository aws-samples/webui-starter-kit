import { POST_URL } from "../config.js";

// Send inputs to API Gateway
const handleSubmit = async (inputPrompt, modelName) => {
    try {
        const prompt = inputPrompt
        const model_name = modelName
        console.log(prompt)
        
        const response = await fetch(POST_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt,
            model_name
        })
        });
    
        if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
        }
    
    const data = await response.json();

    return data; // Return the response data
    } catch (error) {
        // Handle the error
        console.error('Error:', error.message);
    }
};

export { handleSubmit };