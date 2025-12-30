"use client"; // 必須加上這一行，因為聊天機器人需要瀏覽器互動功能

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  // 定義訊息清單與輸入框狀態
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: '您好！我是您的 AI 助手，請問有什麼我可以幫您的嗎？', sender: 'ai' }
  ]);
  const chatBoxRef = useRef(null);

  // 自動捲動聊天視窗到底部
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // 發送訊息的函數
  const sendMessage = async () => {
    if (!input.trim()) return;

    // 1. 加入使用者訊息
    const userMsg = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    try {
      // 2. 呼叫後端 API (對應您的 app/api/gemini/route.js)
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput })
      });

      const data = await res.json();

      // 3. 處理 AI 回應
      if (data.reply) {
        setMessages(prev => [...prev, { text: data.reply, sender: 'ai' }]);
      } else {
        setMessages(prev => [...prev, { text: `❌ 錯誤: ${data.error || '未知錯誤'}`, sender: 'ai' }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, { text: '❌ 連線失敗，請檢查 Vercel 環境變數設定', sender: 'ai' }]);
    }
  };

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <section id="chat" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>線上支援聊天機器人</h2>
        
        <div style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', background: '#f9f9f9' }}>
          {/* 標題欄 */}
          <div style={{ background: '#4A90E2', color: 'white', padding: '10px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
            <span>Gemini 智慧助手</span>
            <span style={{ fontSize: '12px' }}>● 線上</span>
          </div>

          {/* 訊息顯示區 */}
          <div 
            ref={chatBoxRef}
            style={{ height: '400px', overflowY: 'auto', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', background: 'white' }}
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                style={{
                  padding: '8px 12px',
                  borderRadius: '15px',
                  maxWidth: '80%',
                  lineHeight: '1.5',
                  fontSize: '14px',
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.sender === 'user' ? '#D6EAF8' : '#EAECEE',
                  color: '#333'
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* 輸入區 */}
          <div style={{ padding: '10px', display: 'flex', gap: '5px', borderTop: '1px solid #eee' }}>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="請輸入訊息..." 
              style={{ flexGrow: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd', outline: 'none' }}
            />
            <button 
              onClick={sendMessage}
              style={{ background: '#4A90E2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}
            >
              發送
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
