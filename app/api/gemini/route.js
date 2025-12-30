import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 從環境變數讀取金鑰，避免在 GitHub 外洩
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req) {
  try {
    const { message } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 設定系統指令，讓 AI 更有同理心
    const prompt = `你是一位專業的反霸凌顧問。使用者說：${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return NextResponse.json({ reply: response.text() });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "連線失敗，請檢查 API Key 設定" }, { status: 500 });
  }
}
