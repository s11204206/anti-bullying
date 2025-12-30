幫我全改成Javascript<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>反霸凌資源中心</title>
  <link rel="stylesheet" href="styles.css">
  <meta name="description" content="反霸凌資訊、通報、支援與教育資源。">

        <style>
        /* 聊天介面樣式 - 🌟 已優化 🌟 */
        #chat-widget { 
            border: 1px solid #ccc; 
            border-radius: 8px; 
            overflow: hidden; 
            max-width: 100%; /* 確保滿版 */
            display: flex; 
            flex-direction: column; 
            margin-top: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.05); /* 增加陰影 */
        }
        .chat-header { 
            padding: 15px; 
            background-color: #4A90E2; 
            color: white; 
            font-weight: bold; 
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 18px;
        }
        
        /* 關鍵修改：固定高度並啟用滾動 */
        #chat-box { 
            flex-grow: 1; 
            padding: 15px; 
            overflow-y: auto; /* 啟用垂直滾動條 */
            border-bottom: 1px solid #eee; 
            background-color: #ffffff; /* 聊天背景色 */
            height: 380px; /* 設定固定高度 */
            display: flex;
            flex-direction: column;
        }
        
        /* 訊息氣泡優化 */
        .message { 
            margin-bottom: 10px; 
            padding: 10px 14px; /* 增加內邊距 */
            border-radius: 18px; /* 更加圓潤 */
            max-width: 85%; /* 增加最大寬度 */
            line-height: 1.5;
            word-wrap: break-word;
        }
        .user-message { 
            background-color: #D6EAF8; 
            margin-left: auto; 
            text-align: left; /* 讓文字左對齊 */
            border-bottom-right-radius: 5px; /* 右下角微調 */
        }
        .ai-message { 
            background-color: #EAECEE; 
            margin-right: auto; 
            text-align: left; 
            border-bottom-left-radius: 5px; /* 左下角微調 */
        }
        .input-area { display: flex; padding: 10px; border-top: 1px solid #eee; background-color: #fff; }
        #user-input { flex-grow: 1; padding: 10px; border: 1px solid #ccc; border-radius: 20px; margin-right: 10px; font-size: 16px; }
        #send-button { padding: 10px 18px; background-color: #4A90E2; color: white; border: none; border-radius: 20px; cursor: pointer; transition: background-color 0.3s; }
        #send-button:hover:not(:disabled) { background-color: #357ABD; }
        #send-button:disabled { background-color: #AAB7B8; cursor: not-allowed; }

        /* 金鑰輸入面板樣式 - 保持不變 */
        #key-config-panel {
            padding: 15px;
            text-align: center;
            background-color: #fff;
        }
        #api-key-input {
            width: 70%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            margin-right: 10px;
        }
        #key-submit-btn {
            padding: 10px 15px;
            background-color: #17A2B8;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
        }
        /* 聊天介面控制 */
        #chat-interface { 
            display: none; 
            flex-direction: column; 
            flex-grow: 1; 
            height: 100%; /* 讓它填滿 #chat-widget */
        }
    </style>
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
      <p>在每一所學校裡，都有許多故事正在發生。有的讓人開心，有的讓人難過，而其中最讓人心痛的，往往不是大事件，
      而是一句輕描淡寫的嘲笑、一個刻意忽視的眼神、一次被排除的小組活動。霸凌不一定會很吵，它可以非常安靜、
      非常日常、甚至安靜到連當事人都開始懷疑：「是不是我不夠好？」但其實——你知道的，你值得被善待。</p>
      <p>人生在這條路上，每個人都有看不見的戰鬥。我們無法選擇自己的家庭、長相、成績，也不能決定別人怎麼看待我們。
      但我們能選擇自己的態度，也能選擇是否成為一個讓世界更溫暖的人。也許你曾經被說過難聽的話、被排擠、被誤會；
      也許你在某些時候真的覺得孤單。但你要知道，孤單不是你的錯，被欺負更不是你的錯。你沒有需要迎合誰，也沒有必要為了某些人的惡意去質疑自己的價值。</p>
      <p>你的價值，從來不是由別人的嘴巴決定，而是由你自己的心決定。</p>
      <p>有時候，霸凌來自無知；有時候，它來自跟風；有時候，它只是一群人為了感覺強大而選擇傷害比他們弱的人。
      但力量不是用來踩人的，真正強大的人是會伸手把別人拉起來的那種人。真正的勇氣不是吼叫，而是選擇不跟著傷害。
      真正的成熟不是冷漠，而是看見別人的痛後能伸出手說：「我在。」</p>
      <p>如果你正在承受傷害，請記得：你不是一個人。世界上有很多人願意站在你這邊，包括老師、朋友、家人，甚至你不認識的那些善良的人們。
      他們願意聽你說、願意陪你走過黑暗。你不需要默默忍耐，也不用裝得沒事。求助不是軟弱，而是保護自己的勇氣。</p>
      <p>如果你曾經在旁邊看見霸凌，卻不知道該怎麼辦，也不要責怪自己。我們每個人都在學習成為更好的人。
      下一次，你可以試著做一件小小的事——挺身而出、告訴老師、或是簡單地陪伴被霸凌的人。你的一個動作，可能就能改變另一個人的世界。</p>
      <p>願所有正在受傷的人，都能被溫柔包圍。<br>
      願每一個感到孤單的心，都能再次被理解與支持照亮。<br>
      願每一個選擇善良的人，都能證明：「善良不是弱，而是力量。」</p>

      <h1 style="color: red;">無論你現在在哪裡，無論你正在經歷什麼，請記住一件事：</h1>
      <h1 style="color: red;">這個世界需要你這樣的人。</h1>
      <h1 style="color: red;">你值得被尊重、被看見、被珍惜。</h1>
      <h1 style="color: red;">願你永遠不要懷疑自己的光。</h1>

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

        <section id="chat" class="card">
      <h2>線上支援聊天機器人</h2>
      <p>跟我們的 AI 聊天機器人聊聊你的困擾（提示：不要在對話中提供個人敏感資料）。</p>
      <h2>
       
 <!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI 心理支持助手</title>
    <style>
        /* 🌟 現代化美化 CSS - 告別醜陋版面 🌟 */
        :root {
            --primary-color: #4A90E2;
            --bg-color: #f0f2f5;
            --chat-bg: #ffffff;
            --user-msg: #007bff;
            --ai-msg: #f1f0f0;
        }

        body { font-family: 'Segoe UI', system-ui, sans-serif; background-color: var(--bg-color); display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }

        #chat-container { 
            width: 100%; max-width: 450px; height: 600px; background: var(--chat-bg); 
            border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); display: flex; flex-direction: column; overflow: hidden;
        }

        .chat-header { 
            background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; 
            padding: 20px; font-weight: bold; font-size: 1.2em; display: flex; justify-content: space-between;
        }

        .status-dot { width: 10px; height: 10px; background: #2ecc71; border-radius: 50%; display: inline-block; margin-right: 5px; }

        #chat-box { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; }

        /* 訊息氣泡美化 */
        .message { padding: 12px 16px; border-radius: 18px; max-width: 80%; line-height: 1.5; font-size: 15px; word-wrap: break-word; }
        .user-message { background-color: var(--user-msg); color: white; align-self: flex-end; border-bottom-right-radius: 4px; }
        .ai-message { background-color: var(--ai-msg); color: #333; align-self: flex-start; border-bottom-left-radius: 4px; }

        .input-area { padding: 15px; background: #fff; border-top: 1px solid #eee; display: flex; gap: 10px; }

        #user-input { 
            flex: 1; border: 1px solid #ddd; padding: 12px 15px; border-radius: 25px; 
            outline: none; transition: 0.3s; font-size: 14px;
        }
        #user-input:focus { border-color: var(--primary-color); box-shadow: 0 0 5px rgba(74,144,226,0.3); }

        #send-button { 
            background: var(--primary-color); color: white; border: none; padding: 0 20px; 
            border-radius: 25px; cursor: pointer; font-weight: bold; transition: 0.3s;
        }
        #send-button:hover { background: #357ABD; transform: scale(1.05); }
        #send-button:disabled { background: #ccc; cursor: not-allowed; }
    </style>
</head>
<body>

<div id="chat-container">
    <div class="chat-header">
        <span>Gemini 智慧助手</span>
        <span style="font-size: 0.8em;"><span class="status-dot"></span>線上</span>
    </div>
    
    <div id="chat-box">
        <div class="message ai-message">你好！我是您的 AI 夥伴，已經準備好聽你說說話了。</div>
    </div>

    <div class="input-area">
        <input type="text" id="user-input" placeholder="傳送訊息...">
        <button id="send-button">發送</button>
    </div>
</div>

<script>
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // 🔑 直接將金鑰放在這裡 (請替換為你的真實 AIza... 金鑰)
    const GEMINI_API_KEY = '在此貼上你的真實金鑰'; 
    const GEMINI_MODEL = 'gemini-1.5-flash';

    function appendMessage(text, sender) {
        const msg = document.createElement('div');
        msg.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
        msg.textContent = text;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function handleSend() {
        const text = userInput.value.trim();
        if (!text || sendButton.disabled) return;

        // 檢查是否忘了改金鑰
        if (GEMINI_API_KEY.includes('在此貼上')) {
            appendMessage('錯誤：你還沒在程式碼中填入正確的 API Key 喔！', 'ai');
            return;
        }

        appendMessage(text, 'user');
        userInput.value = '';
        sendButton.disabled = true;

        try {
            const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: text }] }] })
            });

            const data = await resp.json();
            if (data.error) throw new Error(data.error.message);

            const reply = data.candidates[0].content.parts[0].text;
            appendMessage(reply, 'ai');
        } catch (err) {
            appendMessage('連線失敗：' + err.message, 'ai');
        } finally {
            sendButton.disabled = false;
            userInput.focus();
        }
    }

    sendButton.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleSend(); });
</script>

</body>
</html>

      <ul>

        <li>Email: <a href="mailto:anti.bullying.phone1999@gmail.com">anti.bullying.phone1999@gmail.com</a></li>

        <li>社群媒體：<a href="#">Facebook</a> / <a href="#">Instagram</a></li>

      </ul>
</script>
</body>
</html>
