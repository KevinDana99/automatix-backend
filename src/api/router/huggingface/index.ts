import { HuggingFaceInference } from "@langchain/community/llms/hf";
import express, { Request, Response } from "express";

const router = express.Router();
router.get("/", async (req: Request, res: Response) => {
  try {
    res.json({ response: "ok" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    console.log({ prompt, key: process.env.HUGGINGFACE_API_KEY_TWO });
    const model = new HuggingFaceInference({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      apiKey: process.env.HUGGINGFACE_API_KEY_TWO,
      temperature: 0.7,
      maxTokens: 50,
    });
    const response = await model.invoke(prompt);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;
