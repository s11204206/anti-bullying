
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
  
在每一所學校裡，都有許多故事正在發生。有的讓人開心，有的讓人難過，而其中最讓人心痛的，往往不是大事件，
而是一句輕描淡寫的嘲笑、一個刻意忽視的眼神、一次被排除的小組活動。霸凌不一定會很吵，它可以非常安靜、
非常日常、甚至安靜到連當事人都開始懷疑：「是不是我不夠好？」但其實——你知道的，你值得被善待。<br>

人生在這條路上，每個人都有看不見的戰鬥。我們無法選擇自己的家庭、長相、成績，也不能決定別人怎麼看待我們。<br>
但我們能選擇自己的態度，也能選擇是否成為一個讓世界更溫暖的人。也許你曾經被說過難聽的話、被排擠、被誤會；<br>
也許你在某些時候真的覺得孤單。但你要知道，孤單不是你的錯，被欺負更不是你的錯。你沒有需要迎合誰，也沒有必要為了某些人的惡意去質疑自己的價值。<br>

你的價值，從來不是由別人的嘴巴決定，而是由你自己的心決定。<br>

有時候，霸凌來自無知；有時候，它來自跟風；有時候，它只是一群人為了感覺強大而選擇傷害比他們弱的人。<br>
但力量不是用來踩人的，真正強大的人是會伸手把別人拉起來的那種人。真正的勇氣不是吼叫，而是選擇不跟著傷害。<br>
真正的成熟不是冷漠，而是看見別人的痛後能伸出手說：「我在。」<br>

如果你正在承受傷害，請記得：你不是一個人。世界上有很多人願意站在你這邊，包括老師、朋友、家人，甚至你不認識的那些善良的人們。<br>
他們願意聽你說、願意陪你走過黑暗。你不需要默默忍耐，也不用裝得沒事。求助不是軟弱，而是保護自己的勇氣。<br>

如果你曾經在旁邊看見霸凌，卻不知道該怎麼辦，也不要責怪自己。我們每個人都在學習成為更好的人。<br>
下一次，你可以試著做一件小小的事——挺身而出、告訴老師、或是簡單地陪伴被霸凌的人。你的一個動作，可能就能改變另一個人的世界。<br>


願所有正在受傷的人，都能被溫柔包圍。<br>
願每一個感到孤單的心，都能再次被理解與支持照亮。<br>
願每一個選擇善良的人，都能證明：「善良不是弱，而是力量。」<br>

不要忘記，你正在走的路很珍貴，你的存在本身就值得被愛。<br>

<font color = red>
<h1>無論你現在在哪裡，無論你正在經歷什麼，請記住一件事：</h1>

<h1>這個世界需要你這樣的人。</h1>

<h1>你值得被尊重、被看見、被珍惜。</h1>

<h1>願你永遠不要懷疑自己的光。</h1>
<font color = black>

   

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
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gemini AI Chat Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #4285F4;
            --bg-color: #f0f2f5;
            --chat-bg: #ffffff;
            --user-msg-bg: #e3effd;
        }

        body {
            font-family: 'Noto Sans TC', sans-serif;
            background-color: var(--bg-color);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            width: 100%;
            max-width: 480px;
            background: var(--chat-bg);
            border-radius: 16px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 90vh;
            max-height: 800px;
        }

        /* 設定面板樣式 */
        #config-panel {
            padding: 20px;
            background: #fff;
            border-bottom: 1px solid #eee;
            text-align: center;
        }
        
        .api-input-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        input#api-key {
            flex-grow: 1;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 8px;
            outline: none;
            transition: 0.3s;
        }

        input#api-key:focus {
            border-color: var(--primary-color);
        }

        button#start-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        button#start-btn:disabled {
            background: #ccc;
        }

        /* 聊天區域樣式 */
        .header {
            background: var(--primary-color);
            color: white;
            padding: 15px;
            font-weight: bold;
            text-align: center;
            font-size: 1.1em;
        }

        #chat-box {
            flex-grow: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .message {
            max-width: 80%;
            padding: 12px 16px;
            border-radius: 18px;
            line-height: 1.5;
            font-size: 15px;
            word-wrap: break-word;
            animation: fadeIn 0.3s ease;
        }

        .ai-message {
            background: #f1f3f4;
            align-self: flex-start;
            border-bottom-left-radius: 4px;
        }

        .user-message {
            background: var(--user-msg-bg);
            color: #1f1f1f;
            align-self: flex-end;
            border-bottom-right-radius: 4px;
        }

        /* Markdown 樣式簡單處理 */
        .message b { font-weight: 700; }
        .message code { background: #e0e0e0; padding: 2px 4px; border-radius: 4px; font-family: monospace; }

        /* 輸入區域 */
        .input-area {
            padding: 15px;
            border-top: 1px solid #eee;
            display: flex;
            gap: 10px;
            background: #fff;
        }

        #user-input {
            flex-grow: 1;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 24px;
            outline: none;
        }

        #send-btn {
            background: var(--primary-color);
            color: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #loading {
            text-align: center;
            color: #888;
            font-size: 12px;
            margin-bottom: 10px;
            display: none;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* 隱藏聊天室直到 Key 驗證通過 */
        #chat-interface {
            display: none;
            flex-direction: column;
            flex-grow: 1;
        }
    </style>
</head>
<body>

<div class="container">
    <div id="config-panel">
        <h3 style="margin: 0 0 10px 0;">Gemini AI 設定</h3>
        <p style="font-size: 14px; color: #666; margin: 0;">請輸入您的 Google API Key 以開始對話</p>
        <div class="api-input-group">
            <input type="password" id="api-key" placeholder="貼上 AIza 開頭的金鑰..." />
            <button id="start-btn">連線</button>
        </div>
        <p id="status-msg" style="font-size: 12px; margin-top: 8px; color: red;"></p>
    </div>

    <div id="chat-interface">
        <div class="header" id="model-name">Gemini AI</div>
        <div id="chat-box">
            <div class="message ai-message">你好！我已經準備好了，請問今天有什麼我可以幫你的嗎？</div>
        </div>
        <div id="loading">Gemini 正在思考中...</div>
        <div class="input-area">
            <input type="text" id="user-input" placeholder="輸入訊息..." />
            <button id="send-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    </div>
</div>

<script>
    let currentKey = "";
    let currentModel = "gemini-1.5-flash"; // 預設嘗試模型

    const configPanel = document.getElementById('config-panel');
    const chatInterface = document.getElementById('chat-interface');
    const apiKeyInput = document.getElementById('api-key');
    const startBtn = document.getElementById('start-btn');
    const statusMsg = document.getElementById('status-msg');
    
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const loadingIndicator = document.getElementById('loading');
    const modelNameDisplay = document.getElementById('model-name');

    // 1. 驗證金鑰功能
    async function validateAndStart() {
        const key = apiKeyInput.value.trim();
        if (!key) {
            statusMsg.textContent = "請輸入金鑰！";
            return;
        }

        startBtn.disabled = true;
        startBtn.textContent = "驗證中...";
        statusMsg.textContent = "";

        // 測試的模型列表 (解決 404 問題)
        const models = ["gemini-1.5-flash", "gemini-pro", "gemini-1.0-pro"];
        let success = false;

        for (const model of models) {
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ contents: [{ parts: [{ text: "Hi" }] }] })
                });

                if (response.ok) {
                    success = true;
                    currentKey = key;
                    currentModel = model;
                    break; // 找到可用的模型就停止
                }
            } catch (e) {
                console.error(e);
            }
        }

        if (success) {
            configPanel.style.display = "none";
            chatInterface.style.display = "flex";
            modelNameDisplay.textContent = `Gemini AI (${currentModel})`;
        } else {
            statusMsg.textContent = "驗證失敗：金鑰無效或無法連線，請檢查 API Key。";
            startBtn.disabled = false;
            startBtn.textContent = "連線";
        }
    }

    // 2. 顯示訊息功能
    function appendMessage(text, sender) {
        const div = document.createElement('div');
        div.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
        
        // 簡單的 Markdown 處理 (粗體與換行)
        let formattedText = text
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            .replace(/\n/g, '<br>');
            
        div.innerHTML = formattedText;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // 3. 發送訊息功能
    async function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        userInput.value = '';
        loadingIndicator.style.display = 'block';
        sendBtn.disabled = true;

        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${currentModel}:generateContent?key=${currentKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: text }] }] })
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error?.message || "API Error");
            }

            const reply = data.candidates[0].content.parts[0].text;
            appendMessage(reply, 'ai');

        } catch (error) {
            appendMessage(`發生錯誤：${error.message}`, 'ai');
        } finally {
            loadingIndicator.style.display = 'none';
            sendBtn.disabled = false;
            userInput.focus();
        }
    }

    // 事件綁定
    startBtn.addEventListener('click', validateAndStart);
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
</script>

</body>
</html>

   
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

