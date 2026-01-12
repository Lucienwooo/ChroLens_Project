# GitHub Pages 部署檢查清單

## ✅ 已完成的設定

### 1. Next.js 配置
- ✅ `output: 'export'` - 靜態導出
- ✅ `basePath: '/ChroLens-Project'` - GitHub Pages 路徑
- ✅ `images: { unoptimized: true }` - 圖片優化關閉
- ✅ `trailingSlash: true` - 尾部斜線

### 2. GitHub Actions Workflow
- ✅ 建立 `.github/workflows/deploy.yml`
- ✅ 自動建置和部署流程
- ✅ 正確的權限設定

### 3. 程式碼路徑修正
- ✅ 使用 Next.js `Link` 組件 (自動處理 basePath)
- ✅ 外部連結使用 `<a>` 標籤
- ✅ 移除硬編碼的 `/` 路徑

### 4. README 簡化
- ✅ 移除本地開發說明
- ✅ 保留技術棧和授權資訊
- ✅ 添加雙授權說明

---

## 🚀 部署步驟

### 1. Push 到 GitHub
```bash
cd c:\Users\Lucien\Documents\GitHub\ChroLens_Project
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. 設定 GitHub Pages
1. 前往 `https://github.com/LucienWooo/ChroLens-Project/settings/pages`
2. **Source** 選擇 `GitHub Actions`
3. 儲存

### 3. 等待部署
- 前往 `https://github.com/LucienWooo/ChroLens-Project/actions`
- 查看 "Deploy to GitHub Pages" workflow
- 等待綠色勾勾 ✅

### 4. 訪問網站
- 首頁: `https://lucienwooo.github.io/ChroLens-Project/`
- Mimic: `https://lucienwooo.github.io/ChroLens-Project/mimic/`

---

## 🔍 已修復的問題

### 問題 1: 路徑錯誤
**原因**: 使用 `<a href="/">` 會導向 `lucienwooo.github.io/` 而不是 `/ChroLens-Project/`
**解決**: 改用 Next.js `Link` 組件,自動加上 basePath

### 問題 2: 圖片載入失敗
**原因**: Next.js Image 組件需要伺服器支援
**解決**: 設定 `images: { unoptimized: true }`

### 問題 3: 404 錯誤
**原因**: GitHub Pages 需要靜態檔案
**解決**: 設定 `output: 'export'` 生成靜態 HTML

---

## ⚠️ 注意事項

1. **所有內部連結**必須使用 `Link` 組件
2. **外部連結**使用 `<a>` 標籤
3. **圖片路徑**使用相對路徑或 `/ChroLens-Project/` 開頭
4. **API 路由**不支援 (靜態導出模式)

---

## 🎯 驗證清單

部署後檢查:
- [ ] 首頁正常顯示
- [ ] 導航選單連結正常
- [ ] Mimic 頁面可訪問
- [ ] 主題切換功能正常
- [ ] 所有圖片正常載入
- [ ] CSS 樣式正確套用
