
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

// ... (程式碼開頭)
import { GoogleGenAI } from '@google/genai';

// 從 Vercel 環境變數讀取安全設定
const USERNAME = process.env.AUTH_USERNAME;
const PASSWORD = process.env.AUTH_PASSWORD;

// Vercel Serverless Function 的主要處理函式
export default async function handler(request, response) {
    // 檢查 Basic Auth 標頭
    const authHeader = request.headers.authorization;

    if (!authHeader || authHeader.indexOf('Basic ') === -1) {
        // 如果沒有授權標頭，要求瀏覽器彈出登入框
        response.status(401).setHeader('WWW-Authenticate', 'Basic realm="Secure Area"').send('Unauthorized');
        return;
    }

    // 解析 Base64 編碼的帳號密碼
    const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString();
    const [user, pass] = credentials.split(':');

    // 驗證帳號密碼
    if (user !== USERNAME || pass !== PASSWORD) {
        response.status(401).setHeader('WWW-Authenticate', 'Basic realm="Secure Area"').send('Invalid Credentials');
        return;
    }

    // ... (如果驗證通過，執行原有的 Gemini 聊天邏輯)
    // 您的原有 Gemini 程式碼從這裡開始：
    if (request.method !== 'POST') {
        response.status(405).send('Method Not Allowed');
        return;
    }
    // ...
}
