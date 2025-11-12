import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not defined in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function explainCode(code: string, language?: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

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
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to generate code explanation. Please try again.');
  }
}
