// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import OpenAI from "openai";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// app.post("/api/recipe", async (req, res) => {
//   try {
//     const { ingredients } = req.body;

//     if (!ingredients || ingredients.length === 0) {
//       return res.status(400).json({ error: "No ingredients provided" });
//     }

//     const completion = await client.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a recipe assistant. Suggest a recipe using provided ingredients. Format response in markdown.",
//         },
//         {
//           role: "user",
//           content: `I have ${ingredients.join(", ")}. Suggest a recipe.`,
//         },
//       ],
//     });

//     res.json({
//       recipe: completion.choices[0].message.content,
//     });
//   } catch (err) {
//     console.error("OpenAI Error:", err.message);
//     res.status(500).json({ error: "Failed to generate recipe" });
//   }
// });

// app.listen(5000, () => {
//   console.log("✅ Server running on http://localhost:5000");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is missing from .env!");
  process.exit(1);
}

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // Vite default port
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/recipe", async (req, res) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.length === 0) {
      return res.status(400).json({ error: "No ingredients provided" });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a recipe assistant. Suggest a recipe using the provided ingredients. Format your response in markdown.",
        },
        {
          role: "user",
          content: `I have ${ingredients.join(", ")}. Please suggest a recipe.`,
        },
      ],
      max_tokens: 500,
    });

    res.json({
      recipe: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error("OpenAI Error:", err.message);
    res.status(500).json({ error: "Failed to generate recipe. Please try again." });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});