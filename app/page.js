"use client";
import { useState, useEffect, useRef } from 'react';

export default function AntiBullyingPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  // 初始化歡迎訊息
  useEffect(() => {
    setMessages([{ role: 'ai', text: '您好！我是您的 AI 助手。無論是遇到霸凌問題需要傾訴，或是想了解相關資訊，我都在這裡聽你說。' }]);
  }, []);

  // 自動捲動到底部
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.reply || data.error }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: '系統錯誤，請檢查網路連線。' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#4A90E2', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>反霸凌資源中心</h1>
        <p style={{ opacity: 0.9 }}>關心每一個學生的安全與尊嚴</p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {/* 關於我們 */}
        <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h2 style={{ color: '#4A90E2' }}>關於反霸凌</h2>
          <p>霸凌會對身心造成長期影響。我們的目標是提供受害者、目擊者與教育工作者實用資訊與即時支援。</p>
          <div style={{ padding: '15px', borderLeft: '4px solid red', backgroundColor: '#fff5f5' }}>
            <h3 style={{ color: 'red', margin: '0 0 10px 0' }}>請記住一件事：</h3>
            <p style={{ fontWeight: 'bold' }}>這個世界需要你這樣的人。你值得被尊重、被看見、被珍惜。願你永遠不要懷疑自己的光。</p>
          </div>
        </section>

        {/* 聊天機器人區域 */}
        <section id="chat" style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 28px rgba(0,0,0,0.12)', marginBottom: '30px' }}>
          <div style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)', color: 'white', padding: '20px' }}>
            <strong>Gemini 智慧助手</strong>
            <span style={{ float: 'right', fontSize: '12px', background: '#28a745', padding: '2px 8px', borderRadius: '10px' }}>● 線上</span>
          </div>
          
          <div ref={chatBoxRef} style={{ height: '400px', overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', background: '#fcfcfc' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.role === 'user' ? '#4A90E2' : '#f1f3f5',
                color: msg.role === 'user' ? 'white' : '#333',
                padding: '12px 16px', borderRadius: '18px', maxWidth: '80%', lineHeight: '1.5'
              }}>
                {msg.text}
              </div>
            ))}
            {loading && <div style={{ fontSize: '12px', color: '#999' }}>AI 正在輸入中...</div>}
          </div>

          <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
            <input 
              style={{ flex: 1, padding: '12px', borderRadius: '25px', border: '1px solid #ddd', outline: 'none' }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="請輸入訊息..."
            />
            <button onClick={handleSend} style={{ background: '#4A90E2', color: 'white', border: 'none', padding: '0 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>發送</button>
          </div>
        </section>

        {/* 聯絡資訊 */}
        <footer style={{ textAlign: 'center', padding: '20px', color: '#888', fontSize: '14px' }}>
          <p>Email: anti.bullying.phone1999@gmail.com</p>
          <p>由 Gemini AI 提供技術支持</p>
        </footer>
      </main>
    </div>
  );
}
}
