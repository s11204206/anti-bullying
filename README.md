# anti-bullying
<!--
Repository template: "anti-bullying-site"
Files included below. Copy each file into your repo and push to GitHub.

Files:
- index.html
- styles.css
- script.js
- README.md
- CNAME (optional)
- images/ (folder with placeholder images)
-->

<!-- index.html -->
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
        <a href="#contact">聯絡</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section id="about" class="card">
      <h2>關於反霸凌</h2>
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
/* 優雅簡潔的樣式，放到 styles.css */
:root{
  --bg:#f7f9fb;
  --card:#fff;
  --accent:#2b8cff;
  --muted:#6b7280;
}
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

/* script.js */
// 處理表單與簡單的表單驗證
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

  // 示範：將資料送到伺服器（此範本不包含後端），你可以連到 Firebase Function / Google Form / Zapier 等
  try{
    // 範例：POST 到 /api/report
    // const resp = await fetch('/api/report', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)});
    // const j = await resp.json();

    // 這裡使用 mock 成功回應
    resultEl.textContent = '已收到通報，感謝你提供資訊。我們會盡快處理。';
    form.reset();
  }catch(err){
    resultEl.textContent = '送出失敗，請稍後再試。';
  }
});

/* README.md */
# 反霸凌資源網站（GitHub Pages 範本）

這是一個靜態網站範本，可直接部署到 GitHub Pages。包含：

- `index.html` — 首頁
- `styles.css` — 樣式
- `script.js` — 前端互動（匿名通報表單行為示範）

## 使用說明
1. 在 GitHub 建立一個新的 repository（例如 `anti-bullying-site`）。
2. 把檔案放進 repo 根目錄並 commit。
3. 在 GitHub 上開啟 `Settings` → `Pages`，選擇 `Branch: main` 與 `root`，儲存。網址會以 `https://<username>.github.io/<repo>/` 提供。

### 想要自動部署（更進階）
可使用 GitHub Actions 將 main 分支自動部署到 GitHub Pages（範例 workflow 可另提供）。

## 延伸功能建議
- 把通報表單連到 Firebase 或 Google Forms，儲存到 Firestore 或 Google Sheet。
- 加入多語系支援（繁體/簡體/英文）。
- 加入情緒偵測或危機分級：如描述包含自傷文字，自動顯示緊急求助資訊。
- 導入 WCAG 無障礙最佳實作。

---

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
