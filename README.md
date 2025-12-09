
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
    <title>Gemini AI 萬用版</title>
    <style>
        body { font-family: "Microsoft JhengHei", sans-serif; background: #f0f2f5; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .container { width: 400px; background: white; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); overflow: hidden; display: flex; flex-direction: column; height: 85vh; }
        
        /* 設定區域 */
        #setup-panel { padding: 20px; background: #fff; z-index: 10; border-bottom: 1px solid #ddd; }
        #api-input { width: 100%; padding: 10px; border: 2px solid #4285F4; border-radius: 8px; margin-bottom: 10px; box-sizing: border-box; }
        #save-btn { width: 100%; padding: 10px; background: #4285F4; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
        #save-btn:hover { background: #3367D6; }
        .error-msg { color: red; font-size: 12px; margin-top: 5px; display: none; }

        /* 聊天區域 */
        #chat-interface { display: flex; flex-direction: column; flex-grow: 1; opacity: 0.3; pointer-events: none; transition: 0.3s; }
        .active-chat { opacity: 1 !important; pointer-events: all !important; }
        
        .header { background: #4285F4; color: white; padding: 15px; text-align: center; font-weight: bold; }
        #chat-box { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f9f9f9; }
        .message { margin-bottom: 12px; padding: 10px 14px; border-radius: 18px; max-width: 80%; line-height: 1.5; word-wrap: break-word; font-size: 14px; }
        .user { background: #d2e3fc; margin-left: auto; color: #333; }
        .ai { background: #ffffff; margin-right: auto; border: 1px solid #e0e0e0; color: #333; }
        .input-area { padding: 10px; background: white; border-top: 1px solid #eee; display: flex; }
        #user-msg { flex-grow: 1; padding: 10px; border: 1px solid #ddd; border-radius: 20px; outline: none; }
        #send-btn { margin-left: 10px; padding: 10px 20px; background: #4285F4; color: white; border: none; border-radius: 20px; cursor: pointer; }
        
        #loading { font-size: 12px; color: #666; text-align: center; padding: 5px; display: none; }
    </style>
</head>
<body>

<div class="container">
    <div id="setup-panel">
        <div style="font-weight:bold; margin-bottom:5px;">第一步：請貼上 API Key</div>
        <input type="text" id="api-input" placeholder="貼上 AIza 開頭的金鑰..." value="">
        <button id="save-btn">驗證並開始聊天</button>
        <div id="status-msg" class="error-msg"></div>
    </div>

    <div id="chat-interface">
        <div class="header" id="model-display">Gemini AI</div>
        <div id="chat-box">
            <div class="message ai">請先在上方貼上金鑰，我才能開始工作喔！</div>
        </div>
        <div id="loading">思考中...</div>
        <div class="input-area">
            <input type="text" id="user-msg" placeholder="輸入訊息...">
            <button id="send-btn">發送</button>
        </div>
    </div>
</div>

<script>
    let currentKey = "";
    let validModel = "gemini-1.5-flash"; // 預設模型

    const setupPanel = document.getElementById('setup-panel');
    const apiInput = document.getElementById('api-input');
    const saveBtn = document.getElementById('save-btn');
    const statusMsg = document.getElementById('status-msg');
    const chatInterface = document.getElementById('chat-interface');
    const modelDisplay = document.getElementById('model-display');
    const chatBox = document.getElementById('chat-box');
    const userMsg = document.getElementById('user-msg');
    const sendBtn = document.getElementById('send-btn');
    const loading = document.getElementById('loading');

    // 自動填入您上次截圖的金鑰 (方便您測試，不對也可以直接改)
    apiInput.value = "AIzaSyB0wul19Y9gFbjlliZorSLmY_HiGl5izN4";

    function showStatus(msg, isError = true) {
        statusMsg.style.display = 'block';
        statusMsg.style.color = isError ? 'red' : 'green';
        statusMsg.textContent = msg;
    }

    function addMsg(text, type) {
        const div = document.createElement('div');
        div.className = `message ${type}`;
        div.innerHTML = text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // 驗證金鑰與自動尋找可用模型
    async function validateKey() {
        const key = apiInput.value.trim();
        if (!key) return showStatus("請輸入金鑰！");
        
        saveBtn.disabled = true;
        saveBtn.textContent = "正在測試連線...";
        statusMsg.style.display = 'none';

        // 測試的模型列表 (優先試 Flash，不行試 Pro)
        const modelsToTry = ["gemini-1.5-flash", "gemini-pro", "gemini-1.0-pro"];
        
        for (let model of modelsToTry) {
            try {
                console.log(`Trying model: ${model}`);
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ contents: [{ parts: [{ text: "Hi" }] }] })
                });

                const data = await res.json();

                if (res.ok) {
                    // 成功了！
                    currentKey = key;
                    validModel = model;
                    
                    showStatus(`✅ 成功！已連接模型：${model}`, false);
                    setTimeout(() => {
                        setupPanel.style.display = 'none'; // 隱藏設定區
                        chatInterface.classList.add('active-chat');
                        modelDisplay.textContent = `Gemini AI (${model})`;
                        addMsg("你好！連線成功，我現在可以回答你的問題了！", "ai");
                    }, 1000);
                    return;
                } else {
                    // 如果是 404 (找不到模型)，就換下一個模型試試
                    if (res.status !== 404) {
                        throw new Error(data.error?.message || "Key Error");
                    }
                }
            } catch (e) {
                console.error(e);
                if (model === modelsToTry[modelsToTry.length - 1]) {
                    showStatus("❌ 連線失敗：" + (e.message.includes("API key not valid") ? "金鑰無效 (請檢查有無空格)" : e.message));
                }
            }
        }
        saveBtn.disabled = false;
        saveBtn.textContent = "驗證並開始聊天";
    }

    async function sendMessage() {
        const text = userMsg.value.trim();
        if (!text) return;
        
        addMsg(text, "user");
        userMsg.value = '';
        loading.style.display = 'block';
        sendBtn.disabled = true;

        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${validModel}:generateContent?key=${currentKey}`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ contents: [{ parts: [{ text: text }] }] })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error?.message || "Error");
            
            const reply = data.candidates[0].content.parts[0].text;
            addMsg(reply, "ai");
        } catch (e) {
            addMsg("發生錯誤：" + e.message, "ai");
        } finally {
            loading.style.display = 'none';
            sendBtn.disabled = false;
            userMsg.focus();
        }
    }

    saveBtn.addEventListener('click', validateKey);
    sendBtn.addEventListener('click', sendMessage);
    userMsg.addEventListener('keypress', (e) => { if(e.key === 'Enter') sendMessage(); });
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

