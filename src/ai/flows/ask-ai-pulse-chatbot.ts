'use server';
/**
 * @fileOverview Русскоязычный чат-бот для Sergeev Consulting, отвечающий на вопросы об услугах, концепциях AI и процессах консалтинга.
 *
 * - askAIPulseChatbot - Функция обработки AI запросов.
 * - AskAIPulseChatbotInput - Тип входных данных.
 * - AskAIPulseChatbotOutput - Тип выходных данных.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAIPulseChatbotInputSchema = z.object({
  query: z.string().describe("Вопрос пользователя о Sergeev Consulting, концепциях AI или процессах консалтинга."),
});
export type AskAIPulseChatbotInput = z.infer<typeof AskAIPulseChatbotInputSchema>;

const AskAIPulseChatbotOutputSchema = z.object({
  answer: z.string().describe("Ответ AI на вопрос пользователя."),
});
export type AskAIPulseChatbotOutput = z.infer<typeof AskAIPulseChatbotOutputSchema>;

export async function askAIPulseChatbot(input: AskAIPulseChatbotInput): Promise<AskAIPulseChatbotOutput> {
  return askAIPulseChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPulseChatbotPrompt',
  input: {schema: AskAIPulseChatbotInputSchema},
  output: {schema: AskAIPulseChatbotOutputSchema},
  prompt: `Вы — полезный AI-ассистент компании Sergeev Consulting, занимающейся AI-консалтингом. Ваша цель — давать краткие и точные ответы на вопросы потенциальных клиентов.

Отвечайте на вопросы об услугах Sergeev Consulting, общих концепциях AI (таких как LLM, Neural Networks, Computer Vision) и наших процессах консалтинга.
Общайтесь дружелюбно, профессионально и информативно на РУССКОМ языке. Если у вас недостаточно информации для ответа на специфический вопрос о внутренних операциях Sergeev Consulting, вежливо сообщите об этом.

Названия инструментов (Genkit, Gemini и т.д.) и название компании оставляйте в оригинале, если это уместно.

Вопрос: {{{query}}}`,
});

const askAIPulseChatbotFlow = ai.defineFlow(
  {
    name: 'askAIPulseChatbotFlow',
    inputSchema: AskAIPulseChatbotInputSchema,
    outputSchema: AskAIPulseChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
