# UX Copy Assistant (Next.js)

This is a self-contained Next.js app for generating consistent, accessible UX copy for a B2B SaaS product like TalentLMS.

## 🧰 Features

- Friendly UI with clear structured prompts
- AI-generated UX copy using OpenAI's GPT-4
- Accessible and inclusive design patterns
- Easily extendable

## 🚀 Getting Started

1. **Clone this repository**  
2. **Install dependencies**  
```bash
npm install
```

3. **Add your OpenAI API key**

Create a `.env.local` file in the root:
```
OPENAI_API_KEY=your-openai-api-key
```

4. **Run the app**
```bash
npm run dev
```

Visit: `http://localhost:3000`

## 📁 File Structure
- `pages/api/generate-ux-copy.js`: API route to OpenAI
- `components/ui`: UI component placeholders (Textarea, Input, Button, Card)
- `pages/index.js`: The UX Copy Assistant interface

