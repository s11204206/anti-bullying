// app/api/gemini/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { message } = await req.json();
    // 使用環境變數讀取金鑰，避免再次洩漏
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(message);
    return NextResponse.json({ reply: result.response.text() });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "API 內部錯誤" }, { status: 500 });
  }
}
