
<!--
Repository template: "anti-bullying-site"
Updated: 增加前端聊天機器人 (Chat Widget)

Files included below. Copy each file into your repo and push to GitHub.

Files:
- index.html
- styles.css
- script.js
- README.md
- backend/server.js (示範 Node.js/Express 伺服器，用來安全代理 OpenAI API)
- .github/workflows/deploy-pages.yml (選用：自動部署到 GitHub Pages)
- images/ (folder with placeholder images)
-->


<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>反霸凌資源中心</title>
  <link rel="stylesheet" href="styles.css">
  <meta name="description" content="反霸凌資訊、通報、支援與教育資源。">
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1>反霸凌資源中心</h1>
      <p class="tagline">關心每一個學生的安全與尊嚴</p>
      <nav>
        <a href="#about">關於我們</a>
        <a href="#resources">資源</a>
        <a href="#report">通報</a>
        <a href="#chat">聊天機器人</a>
        <a href="#contact">聯絡</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section id="about" class="card">
      <h1>關於反霸凌</h1>
      <p>霸凌會對身心造成長期影響。我們的目標是提供受害者、目擊者與教育工作者實用資訊與即時支援。</p>
      <ul>
        <li>定義霸凌：身體、語言、網路、社交排擠等行為。</li>
        <li>如何幫助被害者：傾聽、紀錄、協助通知家長/學校。</li>
        <li>為教育者提供介入步驟與防治計畫範本。</li>
      </ul>
    </section>

    <section id="resources" class="card">
      <h2>實用資源</h2>
      <div class="grid">
        <article>
          <h3>立即求助</h3>
          <p>若遇到緊急危險，請立即撥打當地緊急電話。</p>
        </article>
        <article>
          <h3>社工與諮商</h3>
          <p>尋求學校或社區諮商資源，必要時請家長或老師協助聯絡。</p>
        </article>
        <article>
          <h3>教育素材</h3>
          <p>教師可下載的課堂活動、投影片與討論題綱範本。</p>
        </article>
      </div>
    </section>

    <section id="report" class="card">
      <h2>匿名通報</h2>
      <p>你可以匿名通報霸凌事件，我們會轉交合適的學校或輔導單位跟進。</p>

      <form id="report-form">
        <label>你要通報的學校/單位（選填）<input type="text" name="school" placeholder="例如：某某國中"></label>
        <label>地點（選填）<input type="text" name="location" placeholder="例如：操場、社群平台"></label>
        <label>事件描述<textarea name="desc" placeholder="請簡述發生的事（建議寫下時間、地點、當事人、目擊者）"></textarea></label>
        <label>是否願意提供聯絡方式？
          <select name="contactPref">
            <option value="no">不願意（匿名）</option>
            <option value="yes">願意（可提供Email或電話）</option>
          </select>
        </label>
        <button type="submit">送出通報</button>
        <p id="report-result" class="muted"></p>
      </form>
    </section>

    <!-- Chatbot Section -->
    <section id="chat" class="card">
      <h2>線上支援聊天機器人</h2>
      <p>跟我們的 AI 聊天機器人聊聊你的困擾（提示：不要在對話中提供個人敏感資料）。</p>

      <div id="chat-widget">
        <div id="messages" aria-live="polite"></div>
        <div id="input-area">
          <input id="chat-input" type="text" placeholder="輸入訊息，例如：我在學校被欺負了..." />
          <button id="send-btn">送出</button>
        </div>
        <p class="muted small">提示：此版範本採用後端代理呼叫 AI 服務以保護 API Key。請部署後端到 Cloud Run / Vercel / Firebase Functions。</p>
      </div>
    </section>

    <section id="contact" class="card">
      <h2>聯絡我們</h2>
      <p>若需要協助或想合作，請透過以下方式聯絡。</p>
      <ul>
        <li>Email: <a href="mailto:help@example.org">help@example.org</a></li>
        <li>社群媒體：<a href="#">Facebook</a> / <a href="#">Instagram</a></li>
      </ul>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© <span id="year"></span> 反霸凌資源中心 · 版權所有</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

/* styles.css */
:root{
  --bg:#f7f9fb;
  --card:#fff;
  --accent:#2b8cff;
  --muted:#6b7280;
}
<input type="text" id="message" placeholder="輸入訊息…">
<button onclick="sendMessage()">送出</button>

<div id="reply"></div>

<script>
async function sendMessage() {
const userMessage = document.getElementById("message").value;

const response = await fetch("https://bullying-bot.onrender.com/reply", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ message: userMessage })
});

const data = await response.json();
document.getElementById("reply").innerText = data.reply;
}
</script>
*{box-sizing:border-box}
body{font-family:Inter, system-ui, -apple-system, 'Noto Sans TC', 'Microsoft JhengHei', Arial, sans-serif; margin:0; background:var(--bg); color:#111}
.container{max-width:980px;margin:0 auto;padding:24px}
.site-header{background:linear-gradient(90deg, #0f172a 0%, #1e293b 100%); color:#fff; padding:28px 0}
.site-header h1{margin:0;font-size:28px}
.site-header .tagline{margin-top:6px; opacity:0.9}
.site-header nav{margin-top:12px}
.site-header nav a{color:#cfe8ff;margin-right:12px;text-decoration:none}
.card{background:var(--card); padding:18px; border-radius:10px; box-shadow:0 6px 18px rgba(16,24,40,0.06); margin:18px 0}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}
button{background:var(--accent);color:white;border:none;padding:10px 14px;border-radius:8px;cursor:pointer}
input,textarea,select{width:100%;padding:8px;margin-top:6px;margin-bottom:12px;border-radius:8px;border:1px solid #e6eef8}
.muted{color:var(--muted)}
.site-footer{padding:18px 0;text-align:center;color:var(--muted)}

/* Chat widget styles */
#chat-widget{max-width:700px;margin-top:12px}
#messages{height:280px; overflow:auto; border:1px solid #eef6ff; background:white; padding:12px; border-radius:8px}
.message{padding:8px 10px; margin-bottom:8px; border-radius:8px; max-width:80%}
.message.user{background:#e6f0ff; align-self:flex-end}
.message.bot{background:#f1f5f9}
#input-area{display:flex; gap:8px; margin-top:12px}
#chat-input{flex:1}
.small{font-size:12px}

/* script.js */
// 處理表單與聊天邏輯
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('report-form');
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const payload = {
    school: data.get('school') || null,
    location: data.get('location') || null,
    desc: data.get('desc') || '',
    contactPref: data.get('contactPref') || 'no'
  };
  const resultEl = document.getElementById('report-result');
  if(!payload.desc.trim()){
    resultEl.textContent = '請提供事件描述以協助後續處理。';
    return;
  }
  try{
    resultEl.textContent = '已收到通報，感謝你提供資訊。我們會盡快處理。';
    form.reset();
  }catch(err){
    resultEl.textContent = '送出失敗，請稍後再試。';
  }
});

// Chat widget behavior
const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(text, who='bot'){
  const div = document.createElement('div');
  div.className = 'message ' + (who==='user'?'user':'bot');
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

async function sendMessage(){
  const text = inputEl.value.trim();
  if(!text) return;
  appendMessage(text, 'user');
  inputEl.value = '';
  appendMessage('系統回覆中…', 'bot');

  try{
    // 為了安全，不要把 API Key 放前端。請在後端建立一個 /api/chat 代理端點。
    // 下面示範呼叫這個後端端點
    const resp = await fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ message: text })
    });

    if(!resp.ok){
      throw new Error('伺服器回應錯誤');
    }
    const j = await resp.json();
    // 移除最後一則「系統回覆中…」
    const last = messagesEl.querySelector('.message.bot:last-child');
    if(last && last.textContent === '系統回覆中…') last.remove();

    appendMessage(j.reply || '抱歉，我暫時無法回答。', 'bot');
  }catch(err){
    const last = messagesEl.querySelector('.message.bot:last-child');
    if(last && last.textContent === '系統回覆中…') last.remove();
    appendMessage('發生錯誤，請稍後再試。', 'bot');
  }
}

sendBtn.addEventListener('click', sendMessage);
inputEl.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') sendMessage(); });


/* README.md */
# 反霸凌資源網站（含 Chatbot 範本）

這個專案是靜態網站範本（可部署到 GitHub Pages），並包含一個簡單的聊天機器人前端（chat widget）。

> 注意：為了保護你的 API Key，本範本將 **前端** 的聊天請求發送到 `/api/chat`，你需要部署一個小型後端來代理呼叫 OpenAI（或其他 LLM 服務）。後端範例在 `backend/server.js`。

## 主要檔案
- `index.html` — 首頁與聊天 widget
- `styles.css` — 樣式
- `script.js` — 前端邏輯（含聊天 UI）
- `backend/server.js` — Node.js + Express 範例（安全代理 OpenAI）

## 快速部署步驟（建議）

### 1) 把此 repo push 到 GitHub
1. 建立 repository（例如 `anti-bullying-site`）
2. 把檔案 commit 並 push

### 2) 部署後端（建議選項）
你可以使用任一雲端平台部署 `backend/server.js`：Vercel、Render、Google Cloud Run、Heroku、Firebase Functions 等。

後端示範（Node.js / Express，參考 `backend/server.js`）:

```js
// server.js (示範)
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if(!message) return res.status(400).json({error:'no message'});

  // 呼叫 OpenAI（請把 API_KEY 存在環境變數）
  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{role:'user', content: message}],
      max_tokens: 400
    })
  });

  const data = await r.json();
  const reply = data?.choices?.[0]?.message?.content || '抱歉，無回應';
  res.json({reply});
});

app.listen(process.env.PORT || 3000, ()=>console.log('Server running'));
```

部署到 Vercel 的步驟（簡短）：
1. 安裝 Vercel CLI 或連 GitHub 帳號
2. 建立新專案，選 `backend` 資料夾作為 serverless function（或直接放在專案根目錄）
3. 在 Vercel 設定中加入 `OPENAI_API_KEY` 環境變數
4. 佈署後會取得一個 URL，例如 `https://your-backend.vercel.app`，把該 URL 設定為 GitHub Pages 的同源或在前端修改 fetch 的目標。

### 3) 前端（GitHub Pages）
把 `index.html`、`styles.css`、`script.js` 放到 repo，並使用 GitHub Pages 部署（Settings → Pages → Branch: main / Folder: root）。

> 如果你把後端部署在另一個 domain（例如 Vercel），請在 `script.js` 中把 fetch('/api/chat') 改成完整後端 URL（例如 `https://your-backend.vercel.app/api/chat`）。

## 額外建議
- **不要**把你的 OpenAI API key 放在前端。務必透過後端環境變數管理。
- 可加入簡單的內容過濾（moderation）或情緒偵測，若發現自傷/攻擊等高風險文字請提示提供緊急協助資訊或升級人工處理。


/* backend/server.js */
// 請把這個檔案放到 backend/server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try{
    const { message } = req.body;
    if(!message) return res.status(400).json({error:'no message'});

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{role:'user', content: message}],
        max_tokens: 400
      })
    });

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content || '抱歉，無回應';
    res.json({reply});
  }catch(err){
    console.error(err);
    res.status(500).json({error:'server error'});
  }
});

app.listen(process.env.PORT || 3000, ()=>console.log('Server running'));

/* .github/workflows/deploy-pages.yml (optional)
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
*/

/* LICENSE */
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

