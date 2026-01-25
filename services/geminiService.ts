import { GoogleGenAI } from "@google/genai";
import { PROJECTS, BIO_TEXT, PORTFOLIO_OWNER } from '../constants';

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${PORTFOLIO_OWNER}'s portfolio website. 
Your persona is professional, minimalist, and insightful, matching the aesthetic of the website.
Answer questions about Hyunjun's work, skills, and background based on the provided context.
Keep answers concise (under 3 sentences usually) and elegant.

Context:
Bio: ${BIO_TEXT}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.year}): ${p.description}. Tech: ${p.tags.join(', ')}`).join('\n')}

If asked about something not in the context, politely mention you are focused on Hyunjun's professional work.
Do not invent facts.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // Only initialize if API key exists. The UI handles the missing key case gently.
    if (process.env.API_KEY) {
        aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  const client = getClient();
  
  if (!client) {
    return "I'm currently offline (API Key missing). Please contact Hyunjun directly via email.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    
    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong while thinking. Please try again.";
  }
};