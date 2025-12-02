
// Serverless Function for Vercel (Node.js)

// 載入 Google Gen AI SDK
import { GoogleGenAI } from '@google/genai';
// 1. 初始化 GoogleGenAI 客戶端
// Vercel 會自動從環境變數 GEMINI_API_KEY 獲取金鑰，非常安全！
const ai = new GoogleGenAI({});

// 2. 設定模型的聊天會話
// 我們設定了一個簡短的角色提示 (System Instruction)
// 確保您使用 gemini-2.5-flash 模型來進行高效的對話
const chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: '你是一個熱心且友善的 AI 聊天助手，請使用繁體中文回答問題。',
  },
});

// 3. Vercel Serverless Function 的主要處理函式
export default async function handler(request, response) {
  // 檢查是否為 POST 請求
  if (request.method !== 'POST') {
    response.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const { message } = request.body; // 從前端接收訊息

    if (!message) {
      response.status(400).send('Message body is required');
      return;
    }

    // 發送訊息給 Gemini API
    const result = await chat.sendMessage({ message });
    
    // 返回 AI 的回覆給前端
    response.status(200).json({ 
      reply: result.text 
    });

  } catch (error) {
    console.error('Gemini API 呼叫失敗:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
