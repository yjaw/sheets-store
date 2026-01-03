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
1.  **Data Source**: The application retrieves data from a published Google Sheet CSV.
2.  **Display**: It automatically creates product cards for each item in your sheet.
3.  **Image Handling**: It smartly converts Google Drive sharing links into viewable images.

### Setup Instructions (No Coding Skills Needed!)

1.  **Get your own copy**
    - Click the **Fork** button at the top right corner of this page to copy this project to your GitHub account.

2.  **Turn on the website**
    - Go to the **Settings** tab in your forked repository.
    - Click **Pages** in the left sidebar.
    - Under **Branch**, select `main` and click **Save**.
    - Wait a few seconds and refresh the page. You will see your website link (e.g., `https://<your-username>.github.io/sheets-store/`).

3.  **Prepare your data**
    - Create a new Google Sheet.
    - Add the following headers in the first row: `name`, `price`, `description`, `image`, `status`.
    - Fill in your products.
    - **Images**: Upload images to Google Drive, right-click them -> "Share" -> "Copy link", and paste the link into the `image` column. *Make sure the folder/images are set to "Anyone with the link can view". Recommend to use folder, and put all images in the folder so that you only need to set the permission once.*
    - **Status**: You can use "In Stock", "Reserved", or "Sold Out".

4.  **Connect your data**
    - In your Google Sheet, go to **File** -> **Share** -> **Publish to web**.
    - Important: Select **Comma-separated values (.csv)** instead of "Web page".
    - Click **Publish** and copy the link generated.

5.  **Update your site**
    - Back on this GitHub page, click on the file named `index.html`.
    - Click the **Pencil icon** (Edit this file) at the top right of the file view.
    - Look for line 28: `const sheetUrl = "..."`.
    - Replace the link inside the quotes with your new CSV link.
    - Scroll down and click **Commit changes**.

6.  **Done!**
    - Open your website link (from step 2) to see your store live!

---

<a name="中文"></a>
## 中文

### 簡介
Google Sheet Store 是一個輕量級、純前端的線上商店模板。它直接從指定的 Google 試算表 (Google Sheet) 獲取產品數據，並顯示在網頁上，無需架設後端伺服器。

### 特色
-   **無需寫程式**: 只需編輯 Google 試算表即可管理您的產品庫存（名稱、價格、狀態、圖片）。
-   **動態圖片加載**: 支援 Google Drive 上的圖片。系統會自動格式化 Google Drive 連結，以高效顯示縮圖。
-   **圖片燈箱效果**: 點擊任何產品圖片即可查看原圖。
-   **響應式設計**: 使用 Tailwind CSS 構建，確保在手機、平板和桌機上都能完美呈現。
-   **即時更新**: 對 Google 試算表所做的更改會立即反映在網站上（重新整理後）。

### 運作原理
1.  **資料來源**: 程式會讀取您發布的 Google 試算表 CSV。
2.  **顯示**: 自動將試算表中的每一列資料轉換成漂亮的商品卡片。
3.  **圖片處理**: 貼心設計，自動將 Google Drive 的分享連結轉換成可直接顯示的圖片。

### 設定教學 (完全不需要程式基礎！)

1.  **複製專案**
    - 點擊本頁面右上角的 **Fork** 按鈕，將此專案複製到您的 GitHub 帳號。

2.  **開啟網站**
    - 點擊 **Settings** (設定) 標籤。
    - 點擊左側選單的 **Pages**。
    - 在 **Branch** (分支) 下方選擇 `main`，然後按 **Save** (儲存)。
    - 等待幾秒鐘後重新整理頁面，您會看到您的網站連結 (例如：`https://<您的使用者名稱>.github.io/sheets-store/`)。

3.  **準備商品資料**
    - 建立一個新的 Google 試算表。
    - 在第一列輸入以下標題：`name` (名稱), `price` (價格), `description` (描述), `image` (圖片), `status` (狀態)。
    - 輸入您的商品資訊。
    - **圖片**: 將圖片上傳至 Google Drive，右鍵點擊 -> "共用" -> "複製連結"，貼到 `image` 欄位。 *請確保資料夾或圖片權限設定為 "任何知道連結的人都能查看" (Anyone with the link)。 推薦使用資料夾，並把圖片放到該資料夾中，這樣僅需設定一次權限即可*。
    - **狀態**: 可填寫 "In Stock" (有貨), "Reserved" (預訂) 或 "Sold Out" (售完)。

4.  **發布資料**
    - 在 Google 試算表中，點選 **檔案** (File) -> **共用** (Share) -> **發布到網路** (Publish to web)。
    - **重要**：格式請務必選擇 **逗號分隔值 (.csv)** (Comma-separated values)。
    - 點擊 **發布** (Publish) 並複製產生的連結。

5.  **連結您的商店**
    - 回到這個 GitHub 頁面，點擊 `index.html` 檔案。
    - 點擊右上角的 **鉛筆圖示** (編輯檔案)。
    - 找到大約第 28 行：`const sheetUrl = "..."`。
    - 將引號內的連結換成您剛剛複製的 CSV 連結。
    - 往上滑並點擊綠色的 **Commit changes** 按鈕 (提交變更)。

6.  **大功告成！**
    - 打開您的網站連結（步驟 2 中產生的），即可看到您的專屬商店！
