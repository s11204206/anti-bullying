import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 這裡會自動去 Vercel 的環境變數抓取您剛剛設定的 GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req) {
  try {
    const { message } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const response = await result.response;
    return NextResponse.json({ reply: response.text() });
  } catch (error) {
    return NextResponse.json({ error: "AI 連線失敗，請檢查金鑰設定" }, { status: 500 });
  }
}
