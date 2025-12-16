# Diet Recommendation System - Deployment Guide

## Quick Deploy to Render (Recommended - Free & Fast)

### Option 1: One-Click Deploy with render.yaml

1. **Push your code to GitHub**

   - Create a new repository on GitHub
   - Push this project to GitHub

2. **Deploy on Render**
   - Go to [render.com](https://render.com)
   - Sign up/Login (you can use your GitHub account)
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` file
   - Click "Apply" to deploy both frontend and backend

### Option 2: Manual Deploy (Step by Step)

#### Deploy Backend First:

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `diet-recommendation-backend`
   - **Root Directory**: `FastAPI_Backend`
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Plan**: Free
5. Click "Create Web Service"
6. **IMPORTANT**: Copy the backend URL (e.g., `https://diet-recommendation-backend.onrender.com`)

#### Deploy Frontend:

1. Click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `diet-recommendation-frontend`
   - **Root Directory**: `react-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
4. Add Environment Variable:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://your-backend-url.onrender.com` (use the URL you copied)
5. Click "Create Static Site"

### After Deployment:

- Your frontend will be available at: `https://diet-recommendation-frontend.onrender.com`
- The first request may take 30-50 seconds (free tier cold start)
- Subsequent requests will be faster

---

## Alternative: Deploy to Vercel + Render

### Backend on Render (same as above)

### Frontend on Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Root Directory**: `react-frontend`
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
6. Add Environment Variable:
   - **Name**: `REACT_APP_API_URL`
   - **Value**: `https://your-backend-url.onrender.com`
7. Click "Deploy"

---

## Troubleshooting

**If backend shows errors:**

- Check logs in Render dashboard
- Ensure all dependencies are in requirements.txt
- Verify the Data/dataset.csv file is committed to your repository

**If frontend can't connect to backend:**

- Verify `REACT_APP_API_URL` environment variable is set correctly
- Check CORS settings in backend
- Ensure backend is running (visit the backend URL directly)

**Free Tier Limitations:**

- Render free tier services spin down after 15 minutes of inactivity
- First request after inactivity takes 30-50 seconds
- Consider upgrading for production use

---

## Local Testing

To test locally:

```bash
# Terminal 1 - Backend
cd FastAPI_Backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8080

# Terminal 2 - Frontend
cd react-frontend
npm install
npm start
```

Visit http://localhost:3000
