import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful, friendly-professional UX writing assistant for a B2B SaaS product (TalentLMS). Use clear, concise language. Follow accessibility and UX best practices.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const result = chatCompletion.choices?.[0]?.message?.content?.trim();
    return res.status(200).json({ result });
  } catch (error) {
    console.error('AI generation error:', error);
    return res.status(500).json({ error: 'Failed to generate UX copy' });
  }
}
