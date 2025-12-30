import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    // 從 Vercel 環境變數讀取金鑰，避免洩漏
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // 使用正確的模型名稱
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "AI 暫時無法連線" }, { status: 500 });
  }
}
