import express from "express";

const route = express.Router();

route.post("/", async (req, res) => {
  const { prompt } = req.body;
  try {
    console.log({ message: prompt });
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama2",
        prompt: `Responde solo en español. Usuario: ${prompt}`,
        stream: false,
        max_tokens: 50,
        temperature: 0.3,
        stop: ["\n", "Usuario:", "Asistente:"],
      }),
    });

    const data = await response.json();
    const cleanedResponse = data.response.trim();
    console.log({ data });
    res.json({ response: cleanedResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ollama error" });
  }
});

export default route;
