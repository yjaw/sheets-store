# Google Sheet Store

**[English](#english) | [中文](#中文)**

---

<a name="english"></a>
## English

### Introduction
Google Sheet Store is a lightweight, frontend-only online store template. It fetches product data directly from a specific Google Sheet and displays it on a webpage without requiring a backend server.

### Features
- **No Coding Required**: Manage your product inventory (name, price, status, image) simply by editing a Google Sheet.
- **Dynamic Image Loading**: Supports images hosted on Google Drive. The system automatically reformats Google Drive links to display thumbnails efficiently.
- **Image Lightbox**: Click on any product image to view it in full size.
- **Responsive Design**: Built with Tailwind CSS, ensuring it looks good on mobile, tablet, and desktop.
- **Real-time Updates**: Changes made to the Google Sheet are reflected on the website immediately (after a refresh).

### How it Works
1.  **Data Source**: The application uses `PapaParse` to fetch and parse a published CSV from a Google Sheet.
2.  **Display**: JavaScript iterates through the parsed data and renders a product card for each row.
3.  **Image Handling**: A custom function `formatImageUrl` detects Google Drive links and converts them into direct-viewable thumbnail URLs (`https://drive.google.com/thumbnail?id=...`).

### Setup Instructions
1.  Clone this repository.
2.  Create a new folder in Google Drive for your store images and set it to public.
3.  Create your own Google Sheet with the following headers: `name`, `price`, `description`, `image`, `status`.
    -   `image`: Use Google Drive share link.
    -   `status`: Use "有存貨" (In Stock), "預定中" (Reserved), etc.
4.  Publish your Google Sheet to the web as a **CSV**.
5.  Open `index.html` and replace the `sheetUrl` variable with your new CSV link.
6.  Open `index.html` in your browser to see your store.

---

<a name="中文"></a>
## 中文

### 簡介
Google Sheet Store 是一個輕量級、純前端的線上商店模板。它直接從指定的 Google 試算表 (Google Sheet) 獲取產品數據，並顯示在網頁上，無需後端伺服器。

### 特色
-   **無需寫程式**: 只需編輯 Google 試算表即可管理您的產品庫存（名稱、價格、狀態、圖片）。
-   **動態圖片加載**: 支援 Google Drive 上的圖片。系統會自動格式化 Google Drive 連結，以高效顯示縮圖。
-   **圖片燈箱效果**: 點擊任何產品圖片即可查看原圖。
-   **響應式設計**: 使用 Tailwind CSS 構建，確保在手機、平板和桌機上都能完美呈現。
-   **即時更新**: 對 Google 試算表所做的更改會立即反映在網站上（重新整理後）。

### 運作原理
1.  **資料來源**: 應用程式使用 `PapaParse` 抓取並解析已發布的 Google 試算表 CSV。
2.  **顯示**: JavaScript 遍歷解析後的數據，並為每一列渲染一個產品卡片。
3.  **圖片處理**: 自定義函數 `formatImageUrl` 會偵測 Google Drive 連結，並將其轉換為可直接瀏覽的縮圖網址 (`https://drive.google.com/thumbnail?id=...`)。

### 設定說明
1.  複製 (Clone) 此儲存庫。
2.  在 Google Drive 中創造一個新的文件夾，用於存放您的產品圖片，並設定為公開。
3.  建立您自己的 Google 試算表，並包含以下標題：`name` (名稱), `price` (價格), `description` (描述), `image` (圖片), `status` (狀態)。
    -   `image`: 使用Google Drive 的分享連結。
    -   `status`: 可使用 "有存貨"、"預定中"、"已售出"等狀態。
4.  將您的 Google 試算表發布到網路，格式選擇 **CSV**。
5.  打開 `index.html`，將 `sheetUrl` 變數替換為您的 Google 試算表的 CSV 連結。
6.  在瀏覽器中打開 `index.html` 即可看到您的商店。
