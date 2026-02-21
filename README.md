# 🍽️ AI Recipe Generator

A full-stack web app that suggests recipes based on ingredients you have on hand. Choose between two AI providers — **OpenAI GPT** or **HuggingFace Mistral** — to generate recipe ideas in real time. Recipes are beautifully rendered using **React Markdown**.

---

## ✨ Features

- Add ingredients one at a time via a simple form
- Switch between **two AI backends** — OpenAI (via Express server) or HuggingFace (direct from client)
- Recipes returned and rendered as formatted **Markdown** using `react-markdown`
- Loading state feedback while the AI is thinking
- Clean separation between frontend and backend

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | Node.js + Express |
| AI Provider 1 | OpenAI API — `gpt-3.5-turbo` (server-side) |
| AI Provider 2 | HuggingFace Inference API — `Mistral-7B-Instruct` (client-side) |
| Markdown Rendering | `react-markdown` |

---

## 🤖 AI Integration

This project integrates **two independent AI providers**, demonstrating flexibility in working with different LLM APIs and architectures:

### 1. OpenAI — `gpt-3.5-turbo`
- Runs **server-side** through an Express backend
- API key is kept secure and never exposed to the browser
- Uses the OpenAI Node.js SDK with the `/v1/chat/completions` endpoint
- Responses streamed back to the frontend as JSON

### 2. HuggingFace — `Mistral-7B-Instruct-v0.2`
- Runs **client-side** using the `@huggingface/inference` SDK
- Uses the `chatCompletion` method with a structured message format
- API key stored in a Vite environment variable (`VITE_HF_RECIPE_KEY`)

---

## 📁 Project Structure

```
project-root/
├── server/
│   └── Server.js              # Express server + OpenAI integration
├── src/
│   ├── ai.js                 # OpenAI fetch helper (calls Express backend)
│   ├── ALTai.js              # HuggingFace Mistral client (direct API call)
│   ├── MainPage.jsx          # Main app page — switches between AI providers
│   ├── IngredientsList.jsx   # Renders ingredient list + trigger button
│   └── ClaudeRecipe.jsx      # Renders AI response with react-markdown
├── .env                      # Server-side API key (never commit)
├── .env.local                # Vite client-side env vars (never commit)
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- An [OpenAI API key](https://platform.openai.com/api-keys) with billing enabled
- A [HuggingFace API key](https://huggingface.co/settings/tokens) with Inference API access

### 1. Clone the repository

```bash
git clone https://github.com/Big-Vibes/ReactDynamic-AI_Recipe.git
cd React-Dynamic
```

### 2. Install dependencies

```bash
# Frontend dependencies
npm install

# Backend dependencies
cd Backend
npm install express cors dotenv openai
```

### 3. Set up environment variables

**For the Express server** — create `.env`:
```
OPENAI_API_KEY=sk-your-openai-key-here
```

**For the Vite frontend** — create `.env.local` in the project root:
```
VITE_HF_RECIPE_KEY=hf_your-huggingface-key-here
```

> ⚠️ Both files are gitignored and **never** committed.

### 4. Run the app

```bash
# Terminal 1 — Start the Express backend (for OpenAI)
node server.js

# Terminal 2 — Start the React frontend
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser if using OpenAI.

---

## 🔌 API Reference

### OpenAI Route — `POST /api/recipe`

Handled by the Express server. Keeps your API key secure server-side.

**Request:**
```json
{
  "ingredients": ["chicken", "garlic", "lemon"]
}
```

**Response:**
```json
{
  "recipe": "## Lemon Garlic Chicken\n\n**Ingredients:**\n- ..."
}
```

| Status | Meaning |
|---|---|
| `400` | instance No ingredients provided |
| `500` | instance OpenAI API error |

### HuggingFace — Direct Client Call

Handled by `ALTai.js` in the browser using `@huggingface/inference`:

```js
await hf.chatCompletion({
  model: "mistralai/Mistral-7B-Instruct-v0.2",
  messages: [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: `I have ${ingredientsString}. Please suggest a recipe.` }
  ],
  max_tokens: 1000,
})
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `openai` | OpenAI Node.js SDK for GPT calls |
| `@huggingface/inference` | HuggingFace SDK for Mistral calls |
| `react-markdown` | Renders AI markdown responses in React |
| `express` | Backend server for OpenAI proxy |
| `cors` | Enables cross-origin requests between frontend and backend |
| `dotenv` | Loads environment variables in Node.js |

---

## ⚙️ Configuration

| Variable | File | Description |
|---|---|---|
| `OPENAI_API_KEY` | `server/.env` | OpenAI secret key (server-side only) |
| `VITE_HF_RECIPE_KEY` | `.env.local` | HuggingFace API key (Vite-exposed to client) |
| CORS origin | `server.js` | Set to your Vite port (default: `5173`) |
| `max_tokens` | Both AI files | Max length of AI response |

---

## 🛠️ Troubleshooting

**OpenAI: Server won't start**
- Confirm `OPENAI_API_KEY` exists in Backend `.env`
- Make sure port `5000` isn't already in use

**HuggingFace: `accessToken.startsWith is not a function`**
- Pass the key directly as a string: `new InferenceClient(apiKey)`, not `new InferenceClient({ apiKey })`
- Check the model used in HuggingFace 
- Restart the dev server after editing `.env.local` — Vite doesn't hot-reload env files

**Recipe not rendering correctly**
- Confirm `react-markdown` is installed: `npm install react-markdown`
- Wrap the response in your `<ClaudeRecipe />` component which uses `<ReactMarkdown>`

---

## 📄 License

MIT
