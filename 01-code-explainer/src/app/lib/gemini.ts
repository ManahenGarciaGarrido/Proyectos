import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not defined in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

// Helper function to wait for a specified time
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function explainCode(code: string, language?: string): Promise<string> {
  const maxRetries = 3;
  let lastError: any;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const prompt = `You are an expert code explainer. Analyze the following ${language || 'code'} and provide a clear, detailed explanation:

1. What does this code do? (High-level overview)
2. How does it work? (Step-by-step explanation)
3. Key concepts used
4. Potential improvements or concerns (if any)

Code to explain:
\`\`\`${language || ''}
${code}
\`\`\`

Provide a well-structured explanation that is easy to understand for developers.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return text;
    } catch (error: any) {
      lastError = error;
      console.error(`Error calling Gemini API (attempt ${attempt + 1}/${maxRetries}):`, error);

      // Check if it's a 503 or rate limit error and retry
      const is503Error = error.message?.includes('503') || error.message?.includes('overloaded');
      const isRateLimitError = error.message?.includes('429') || error.message?.includes('quota');

      if ((is503Error || isRateLimitError) && attempt < maxRetries - 1) {
        // Exponential backoff: 2s, 4s, 8s
        const waitTime = Math.pow(2, attempt + 1) * 1000;
        console.log(`Waiting ${waitTime}ms before retry...`);
        await wait(waitTime);
        continue;
      }

      // If it's the last attempt or not a retryable error, throw
      if (attempt === maxRetries - 1) {
        break;
      }
    }
  }

  // Handle specific error types
  if (lastError.message?.includes('503') || lastError.message?.includes('overloaded')) {
    throw new Error('Google Gemini is currently overloaded. Please try again in a few moments.');
  }
  if (lastError.message?.includes('429') || lastError.message?.includes('quota')) {
    throw new Error('API rate limit exceeded. Please wait a moment and try again.');
  }
  if (lastError.message?.includes('400')) {
    throw new Error('Invalid request. Your code might be too long or contain unsupported characters.');
  }

  throw new Error('Failed to generate code explanation. Please try again later.');
}
