# 🚀 Railway Deployment Guide

## Method 1: GitHub + Railway (Easiest)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click **"New Repository"**
3. Name it: `money-panel`
4. Set to **Private** (to hide bot token)
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

### Step 4: Get Your URL

1. Go to your project settings
2. Click **"Generate Domain"**
3. Copy the URL (e.g., `money-panel.railway.app`)
4. Open it in browser! 🎉

---

## Method 2: Railway CLI (Direct Upload)

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

### Step 4: Generate Domain

```bash
railway domain
```

---

## Method 3: Railway Dashboard (Manual)

1. Zip the entire `panel src` folder
2. Go to [Railway.app](https://railway.app)
3. Click **"New Project"**
4. Click **"Deploy from template"**
5. Select **"Empty Project"**
6. Upload the ZIP file

---

## Important Notes

⚠️ **Security:**
- Repository ko **PRIVATE** rakho
- Bot token exposed nahi hoga kyunki code compiled hai
- Firebase URL aur keys visible nahi honge

✅ **After Deployment:**
- Panel URL mil jayega (e.g., `https://money-panel.railway.app`)
- Kisi ko bhi share kar sakte ho
- 24/7 online rahega

🔥 **Free Tier:**
- Railway gives $5 free credits per month
- Enough for 500+ hours of uptime
- Perfect for personal use

---

## Troubleshooting

**Error: "Cannot find module 'express'"**
- Railway automatically installs dependencies
- If not, run: `npm install`

**Error: "Port already in use"**
- Railway automatically assigns port
- Local testing: Change PORT in server.js

**Panel not loading?**
- Check Railway logs: `railway logs`
- Ensure index.html exists

---

## Need Help?

Contact: [@ofbanks](https://t.me/ofbanks)

---

💰 **MONEY PANEL - Ready for Railway!** 🚀
