
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>反霸凌通報及AI聊天系統之中心</title>
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
    <script>
document.addEventListener('DOMContentLoaded', (event) => {
    const contactChoice = document.getElementById('contact_choice');
    const contactInfoFields = document.getElementById('contact_info_fields');
    const emailInput = document.getElementById('email_input');
    const phoneInput = document.getElementById('phone_input');
    
    // 定義 Formspree 提交時會用到的欄位名稱
    const EMAIL_FIELD_NAME = '通報者Email';
    const PHONE_FIELD_NAME = '通報者電話';

    // 負責處理切換邏輯的函式
    function toggleContactFields() {
        if (contactChoice.value === 'yes') {
            // 選擇「願意」：顯示欄位，並加上 name 屬性讓 Formspree 接收
            contactInfoFields.style.display = 'block';
            emailInput.name = EMAIL_FIELD_NAME;
            phoneInput.name = PHONE_FIELD_NAME;
        } else {
            // 選擇「不願意/匿名」：隱藏欄位，清空值，並移除 name 屬性
            contactInfoFields.style.display = 'none';

            // 清空值：確保即使欄位隱藏，使用者上次填的值也不會被送出
            emailInput.value = '';
            phoneInput.value = '';

            // 關鍵步驟：移除 name 屬性。
            // 這樣在送出表單時，這些資料就不會被包含在 Formspree 的 payload 中。
            emailInput.removeAttribute('name');
            phoneInput.removeAttribute('name');
        }
    }

    // 監聽選擇欄位的變化，一旦改變就執行切換邏輯
    contactChoice.addEventListener('change', toggleContactFields);

    // 頁面載入時先執行一次，確保初始狀態 (預設為匿名) 正確
    toggleContactFields();
});
</script>
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1>霸凌通報及AI聊天系統之中心</h1>
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

      <form
id="report-form"
action="  https://formspree.io/f/mojvvjvl "
method="POST"
>
<label>你要通報的學校/單位（選填）
<input type="text" name="school" placeholder="例如：某某國中">
</label>

<label>地點（選填）
<input type="text" name="location" placeholder="例如：操場、社群平台">
</label>

<label>事件描述
<textarea name="desc" placeholder="請簡述發生的事（建議寫下時間、地點、當事人、目擊者）"></textarea>
</label>

<label>是否願意提供聯絡方式？
        <select name="contactPref" id="contact_choice"> <option value="no">不願意（匿名）</option>
            <option value="yes">願意（可提供Email或電話）</option>
        </select>
    </label>

    <div id="contact_info_fields" style="display: none;">
        <label>您的 Email
            <input type="email" id="email_input" placeholder="選填您的 Email">
        </label>
        <label>您的電話
            <input type="tel" id="phone_input" placeholder="選填您的電話">
        </label>
    </div>

<button type="submit">送出通報</button>
<p id="report-result" class="muted"></p>
</form>
    </section>

        <section id="chat" class="card">
      <h2>線上支援聊天機器人</h2>
      <p>跟我們的 AI 聊天機器人聊聊你的困擾（提示：不要在對話中提供個人敏感資料）。</p>
        
        <div id="chat-widget">
            <div id="key-config-panel">
                <h3 style="margin-top: 0;">連線 Gemini AI</h3>
                <p style="font-size: 14px; color: #666;">請輸入您的 Google Gemini API Key 以開始對話。</p>
                <input type="password" id="api-key-input" placeholder="貼上 AIzaSy... 開頭的金鑰">
                <button id="key-submit-btn">連線</button>
                <p id="status-message" style="color: red; font-size: 12px; margin-top: 10px;"></p>
            </div>

            <div id="chat-interface">
                                <div class="chat-header">
                    <span>Gemini 智慧助手</span>
                    <span style="font-size: 12px; background-color: #28a745; padding: 2px 8px; border-radius: 10px;">線上</span>
                </div>
                
                <div id="chat-box">
                    <div class="message ai-message">請點擊上方 **連線** 按鈕並輸入金鑰，即可啟動 AI 支援。</div>
                </div>
                <div class="input-area">
                    <input type="text" id="user-input" placeholder="請輸入您的訊息..." disabled>
                    <button id="send-button" disabled>發送</button>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="card">
      <h2>聯絡我們</h2>
      <p>若需要協助或想合作，請透過以下方式聯絡。</p>
      <ul>

        <li>Email: <a href="mailto:anti.bullying.phone1999@gmail.com">anti.bullying.phone1999@gmail.com</a></li>

        <li>社群媒體：<a href="#">Facebook</a> / <a href="#">Instagram</a></li>

      </ul>
       
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© <span id="year"></span> 霸凌通報及AI聊天系統之中心 · 版權所有</p>
        </div>
  </footer>

  <script src="script.js"></script>
  <script>
    // 專案所需的元素
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // 金鑰設定所需的元素
    const keyConfigPanel = document.getElementById('key-config-panel');
    const apiKeyInput = document.getElementById('api-key-input');
    const keySubmitBtn = document.getElementById('key-submit-btn');
    const statusMessage = document.getElementById('status-message');
    const chatInterface = document.getElementById('chat-interface');
    
    // 全域變數來儲存金鑰
    let GEMINI_API_KEY = '';
    // 建議使用 gemini-2.5-flash 作為快速聊天模型
    const GEMINI_MODEL = 'gemini-2.5-flash'; 

    // --- 輔助函式 ---

    // 新增訊息到聊天框
    function addMessage(text, sender) {
        const msgElement = document.createElement('div');
        msgElement.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
        msgElement.textContent = text;
        chatBox.appendChild(msgElement);
        // 保持捲動到底部
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // --- 核心邏輯 ---

    // 1. 驗證金鑰並啟動聊天
    async function activateChat() {
        const key = apiKeyInput.value.trim();
        if (!key) {
            statusMessage.textContent = '請貼入您的 Gemini API Key！';
            return;
        }

        keySubmitBtn.disabled = true;
        statusMessage.textContent = '驗證中...';

        // 簡單測試金鑰是否有效 (透過呼叫 models API)
        try {
            // 嘗試呼叫 API 檢查金鑰有效性
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
            
            if (response.ok) {
                // 驗證成功
                GEMINI_API_KEY = key;
                statusMessage.textContent = '連線成功！您可以開始聊天了。';
                
                // 隱藏設定面板，顯示聊天介面
                keyConfigPanel.style.display = 'none';
                chatInterface.style.display = 'flex';
                userInput.disabled = false;
                sendButton.disabled = false;
                userInput.focus();
                
                // 清除初始訊息並發送歡迎語
                chatBox.innerHTML = '';
                addMessage('哈囉！我是您的 AI 助手，請問有什麼可以為您服務的嗎？', 'ai');

            } else {
                // 驗證失敗 (例如 400 Bad Request, 401 Unauthorized)
                const data = await response.json();
                throw new Error(data.error?.message || `API Key 無效或連線錯誤 (${response.status})`);
            }
        } catch (error) {
            statusMessage.textContent = `連線失敗: ${error.message}`;
            keySubmitBtn.disabled = false;
        }
    }

    // 2. 發送訊息給 Gemini API
    async function sendMessage() {
        const message = userInput.value.trim();
        if (message === '' || !GEMINI_API_KEY) return;

        addMessage(message, 'user');
        userInput.value = '';
        sendButton.disabled = true; 
        userInput.disabled = true;

        try {
            // 直接呼叫 Google Gemini API
            // 由於這是一個新的對話，我們將使用 generateContent 而非 Chat Service (除非您自行實作 history 記憶)
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    contents: [{ parts: [{ text: message }] }] 
                })
            });

            const data = await response.json();
            
            if (!response.ok) {
                // 處理 API 錯誤
                throw new Error(data.error?.message || `HTTP 錯誤: ${response.status}`);
            }
            
            // 從回應中提取文字
            const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
            
            // 顯示 AI 回覆
            addMessage(reply || '抱歉，AI 似乎沒有回覆。', 'ai');

        } catch (error) {
            console.error('發送訊息失敗:', error);
            addMessage(`連線錯誤：無法聯繫 AI 服務。詳細錯誤: ${error.message}`, 'ai');
        } finally {
            sendButton.disabled = false; 
            userInput.disabled = false;
            userInput.focus();
        }
    }

    // --- 事件綁定 ---

    // 金鑰連線按鈕
    keySubmitBtn.addEventListener('click', activateChat);
    apiKeyInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') activateChat();
    });

    // 聊天發送按鈕
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !sendButton.disabled) {
            sendMessage();
        }
    });

    // 設置年份
    document.getElementById('year').textContent = new Date().getFullYear();


     
</script>
</body>
</html>
