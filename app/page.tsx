"use client";
import { useState } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: '您好！我是您的 AI 助手。無論遇到什麼困擾，我都在這裡聽你說。' }]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', text: data.reply || data.error }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: '連線錯誤，請稍後再試。' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '450px', backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', height: '600px' }}>
        <div style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)', color: 'white', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong style={{ fontSize: '1.2em' }}>Gemini 智慧助手</strong>
            <span style={{ backgroundColor: '#28a745', fontSize: '12px', padding: '2px 8px', borderRadius: '10px' }}>線上</span>
          </div>
          <div style={{ fontSize: '0.8em', opacity: 0.9 }}>隨時為您提供支援</div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', backgroundColor: msg.role === 'user' ? '#4A90E2' : '#f1f3f5', color: msg.role === 'user' ? 'white' : '#333', padding: '12px 16px', borderRadius: '15px', maxWidth: '80%' }}>
              {msg.text}
            </div>
          ))}
          {loading && <div style={{ color: '#888', fontSize: '12px' }}>AI 正在思考中...</div>}
        </div>
        <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="請輸入訊息..." style={{ flex: 1, border: '1px solid #ddd', padding: '10px 15px', borderRadius: '20px', outline: 'none' }} />
          <button onClick={handleSend} style={{ backgroundColor: '#4A90E2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}>發送</button>
        </div>
      </div>
    </div>
  );
}
