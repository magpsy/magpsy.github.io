# 個人學術網站

網站使用 React 和 Vite。進入有 package.json 的資料夾後，使用 Node.js 24 和 pnpm 11 執行：

```sh
pnpm install
pnpm dev
```

開啟終端機顯示的網址即可預覽，存檔後會自動更新。

| 想修改的內容 | 檔案 |
| --- | --- |
| 研究興趣、研討會成果 | src/research.json |
| 個人介紹、學歷、獎項 | src/About.jsx |
| 姓名、首頁照片與聯絡信箱 | src/Home.jsx |
| 單頁 CV 的下載和預覽網址 | src/CV.jsx |
| 色彩、間距、手機排版及動畫 | src/styles.css |

在 presentations 陣列最前面新增一筆即可更新成果，年份篩選器會自動讀取 year 欄位。首頁互動和研究卡片都使用 interests 陣列。

執行 `pnpm build` 後，可以用 `pnpm preview` 檢視正式版本。GitHub Pages 從儲存庫根目錄發布。將 dist 裡的內容複製到儲存庫根目錄，與 website 裡的原始碼一起提交。公開 CV 使用 CV-public 的單頁 PDF 與其預覽圖。
