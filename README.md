
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
    <title>Gemini AI 聊天小工具</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; }
        .chat-container { width: 400px; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; max-height: 80vh; }
        .chat-header { padding: 15px; background-color: #4A90E2; color: white; border-top-left-radius: 8px; border-top-right-radius: 8px; font-weight: bold; }
        #chat-box { flex-grow: 1; padding: 15px; overflow-y: auto; border-bottom: 1px solid #eee; }
        .message { margin-bottom: 10px; padding: 8px 12px; border-radius: 18px; max-width: 80%; }
        .user-message { background-color: #D6EAF8; margin-left: auto; text-align: right; }
        .ai-message { background-color: #EAECEE; margin-right: auto; text-align: left; }
        .input-area { display: flex; padding: 10px; border-top: 1px solid #eee; }
        #user-input { flex-grow: 1; padding: 10px; border: 1px solid #ccc; border-radius: 20px; margin-right: 10px; }
        #send-button { padding: 10px 15px; background-color: #4A90E2; color: white; border: none; border-radius: 20px; cursor: pointer; transition: background-color 0.3s; }
        #send-button:hover:not(:disabled) { background-color: #357ABD; }
        #send-button:disabled { background-color: #AAB7B8; cursor: not-allowed; }
    </style>
</head>
<body>

<div class="chat-container">
    <div class="chat-header">Gemini AI 聊天室</div>
    <div id="chat-box">
        <div class="message ai-message">哈囉！我是您的 AI 助手，請問有什麼可以為您服務的嗎？</div>
    </div>
    <div class="input-area">
        <input type="text" id="user-input" placeholder="請輸入您的訊息..." autofocus>
        <button id="send-button">發送</button>
    </div>
</div>

<script>
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // **這是您的 Vercel Serverless Function 的 URL**
    // 部署後，它的 URL 會是：https://您的Vercel網域/api/chat
    const API_ENDPOINT = '/api/chat'; 

    // 新增訊息到聊天框
    function addMessage(text, sender) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
        msgElement.textContent = text;
        chatBox.appendChild(msgElement);
        // 保持捲動到底部
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // 發送訊息給後端 Serverless Function
    async function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        addMessage(message, 'user');
        userInput.value = '';
        sendButton.disabled = true; // 發送時禁用按鈕
        API_ENDPOINT = 'https://anti-bullying-azsd.vercel.app/api/chat';
        try {
            // 呼叫 Vercel Serverless Function
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            });

            if (!response.ok) {
                throw new Error(`HTTP 錯誤: ${response.status}`);
            }

            const data = await response.json();
            
            // 顯示 AI 回覆
            addMessage(data.reply || '抱歉，AI 似乎沒有回覆。', 'ai');

        } catch (error) {
            console.error('發送訊息失敗:', error);
            addMessage('連線錯誤：無法聯繫 AI 服務。', 'ai');
        } finally {
            sendButton.disabled = false; // 啟用按鈕
            userInput.focus();
        }
    }

    // 綁定事件
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !sendButton.disabled) {
            sendMessage();
        }
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

