# ⚡ Quick Deploy Reference Sheet

A fast cheat sheet for deploying the Gastro AI Recommendation project.

---

## 🐍 Backend: Railway Deployment

### 1. Repository
* Use your dedicated GitHub Repository: **`https://github.com/gsai-max/zomato-first-project`**

### 2. Environment Variables (Variables Tab)
Copy and paste these directly into your Railway service variables panel:

```env
LLM_PROVIDER=groq
LLM_MODEL=llama-3.1-8b-instant
DATA_PATH=data/processed/restaurants.parquet
LLM_API_KEY=your_actual_groq_api_key_here
```

### 3. Verify Health
Visit your generated Railway URL:
* Base Endpoint (Welcome message): `https://your-backend.up.railway.app/`
* Health Check: `https://your-backend.up.railway.app/api/v1/health`
* Interactive API Documentation: `https://your-backend.up.railway.app/docs`

---

## ⚡ Frontend: Vercel Deployment

### 1. Vercel Configuration Settings
When importing your repository in Vercel:

| Setting | Value |
| :--- | :--- |
| **Root Directory** | `frontend` |
| **Framework Preset** | `Vite` (automatically detected) |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

### 2. Environment Variables
Add this under Vercel's Environment Variables section before building:

```env
VITE_API_URL=https://your-backend-url.up.railway.app
```
*(⚠️ Ensure there is no trailing slash at the end of the URL)*

---

## 🔄 Deployment Sync Commands (If making changes)
To push new updates to both platforms:
```bash
git add .
git commit -m "update project details"
git push
```
*(Railway and Vercel will automatically trigger new builds upon push).*
