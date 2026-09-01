# 🚀 Railway Deployment Guide

## Method 1: GitHub + Railway (Easiest & Most Secure)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New Repository"**
3. Name it: `money-panel`
4. Set to **Private** ⚠️ (IMPORTANT for security)
5. Click **"Create repository"**

### Step 2: Upload Code to GitHub

Open command prompt in the panel folder and run:

```bash
git init
git add .
git commit -m "Initial commit - Money Panel"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/money-panel.git
git push -u origin main
```

### Step 3: Deploy on Railway

1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **"New Project"**
4. Click **"Deploy from GitHub repo"**
5. Select **"money-panel"** repository
6. Railway will auto-deploy! ✅

### Step 4: Set Environment Variables (IMPORTANT!)

1. Go to your Railway project
2. Click on **"Variables"** tab
3. Add these variables:

```
PANEL_BOT_TOKEN = 8884638434:AAFRR9AZuGryKw_1bMvqRt9lDgYJ3CPF9XQ
PANEL_CHAT_ID = 8319610847
```

4. Click **"Save"**
5. Project will auto-redeploy with secure credentials! ✅

### Step 5: Get Your URL

1. Go to project **"Settings"**
2. Click **"Generate Domain"**
3. Copy the URL (e.g., `money-panel.railway.app`)
4. Open it in browser! 🎉

---

## Security Features ✅

**Bot Token Protection:**
- ✅ Token stored in Railway environment variables
- ✅ NOT visible in source code
- ✅ Accessed only server-side via Node.js
- ✅ API calls proxied through `/api/telegram/sendMessage`

**What's Hidden:**
- Bot Token (server-side only)
- Chat ID (server-side only)
- Telegram API calls (proxied through server)

**What's Safe to Share:**
- Railway URL (public access)
- GitHub repo (if private, credentials hidden)

---

## Method 2: Railway CLI (Advanced)

### Step 1: Install Railway CLI

```bash
npm install -g @railway/cli
```

### Step 2: Login

```bash
railway login
```

### Step 3: Initialize & Deploy

```bash
cd "c:\Users\samop\Downloads\Telegram Desktop\panel src"
railway init
railway up
```

### Step 4: Set Environment Variables

```bash
railway variables set PANEL_BOT_TOKEN=8884638434:AAFRR9AZuGryKw_1bMvqRt9lDgYJ3CPF9XQ
railway variables set PANEL_CHAT_ID=8319610847
```

### Step 5: Generate Domain

```bash
railway domain
```

---

## Local Testing

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Create .env File

Copy `.env.example` to `.env` and add your credentials:

```env
PANEL_BOT_TOKEN=8884638434:AAFRR9AZuGryKw_1bMvqRt9lDgYJ3CPF9XQ
PANEL_CHAT_ID=8319610847
PORT=3000
```

### Step 3: Start Server

```bash
npm start
```

### Step 4: Open Browser

```
http://localhost:3000
```

---

## Important Security Notes

⚠️ **DO NOT:**
- ❌ Commit .env file to Git (already in .gitignore)
- ❌ Share bot token publicly
- ❌ Make GitHub repo public with hardcoded tokens

✅ **DO:**
- ✅ Use Railway environment variables
- ✅ Keep GitHub repo private
- ✅ Use server-side API proxy

---

## How It Works

### Old Way (Insecure):
```
Browser → Telegram API (token visible in source)
❌ Anyone can inspect and steal token
```

### New Way (Secure):
```
Browser → Server API → Telegram API
✅ Token hidden server-side
✅ Only server knows the token
✅ Source code is safe
```

---

## API Endpoints

**Get Config:**
```
GET /api/config
Returns: { botToken, chatId }
```

**Send Message:**
```
POST /api/telegram/sendMessage
Body: { text: "message" }
Returns: Telegram API response
```

---

## Troubleshooting

**Error: "Config loaded securely from server" not showing**
- Check if server is running
- Verify `/api/config` endpoint works
- Check browser console for errors

**Error: "Failed to send message"**
- Verify environment variables in Railway
- Check Railway logs: `railway logs`
- Ensure bot token is correct

**Panel not loading?**
- Check Railway deployment status
- Verify all files uploaded correctly
- Check for any build errors

---

## Need Help?

Contact: [@ofbanks](https://t.me/ofbanks)

---

💰 **MONEY PANEL - 100% SECURE!** 🔒🚀
