import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import { extractTextFromPDF } from "./extractText.js";
import { askGemini } from "./geminiClient.js";

dotenv.config();

// Setup for serving static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// 1. ✅ SERVE THE REACT APP (The "Website")
// This tells Express to look in the 'dist' folder for your site
app.use(express.static(path.join(__dirname, 'dist')));

let storedPDFText = "";

// 2. API Routes (The "Backend Logic")
app.post("/extract", async (req, res) => {
  console.log("📥 Receiving PDF upload...");
  try {
    const pdfBase64 = req.body.pdf;
    if (!pdfBase64) return res.status(400).json({ error: "PDF not provided" });

    const buffer = Buffer.from(pdfBase64, "base64");
    storedPDFText = await extractTextFromPDF(buffer);

    console.log(`✅ Success! Extracted ${storedPDFText.length} characters.`);
    res.json({ message: "PDF extracted successfully" });
  } catch (error) {
    console.error("💥 Extraction Failed:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post("/ask", async (req, res) => {
  console.log("📝 User Question:", req.body.question);
  try {
    if (!storedPDFText) {
      return res.status(400).json({ error: "No PDF uploaded yet" });
    }
    const { question } = req.body;
    const answer = await askGemini(storedPDFText, question);
    
    console.log("🤖 AI Replied.");
    res.json({ answer });
  } catch (error) {
    console.error("💥 AI Error:", error.message);
    res.status(500).json({ answer: "Error connecting to AI." });
  }
});

// 3. CATCH-ALL ROUTE (The "Safety Net")
// If the user requests a page that isn't an API, send them the React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// OLD: const PORT = 5000;
// NEW: (Use the cloud port, or 5000 if on laptop)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on Port ${PORT}`);
});