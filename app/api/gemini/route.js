import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    
    // 確保環境變數 GEMINI_API_KEY 已在 Vercel 設定
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "API 內部錯誤" }, { status: 500 });
  }
}
