# ChatEase – Netlify-Ready Website (React + Vite + Tailwind)

A clean, fast, multi-page marketing site for **ChatEase** (AI chatbots & automation).  
Built with **React (Vite)** + **Tailwind CSS**, deployed on **Netlify**.  
Includes a **Netlify Forms** contact form and a placeholder for your **chatbot embed**.

## ✨ Features
- Pages: Home, Services, Pricing, About, Contact, Thank You
- Tailwind design with Navy (#1E293B), Sky Blue (#38BDF8), Green (#22C55E)
- Netlify Forms (no backend) on `/contact`
- SPA routing configured via `netlify.toml`
- Easy spot to paste your chatbot embed script in `index.html`

## 🚀 Local Dev
```bash
npm install
npm run dev
```

## 🏗️ Build
```bash
npm run build
```

## ☁️ Deploy to Netlify
1. Create a new GitHub repo and push this project.
2. In Netlify: **New site from Git** → select the repo.
3. Build command: `npm run build`  
   Publish directory: `dist`
4. Once deployed, add your **custom domain** in Netlify → Domains.
5. Test the contact form (submissions appear in Netlify → Forms).

## 🤖 Add Your Chatbot
Paste your provider’s `<script>` snippet into `index.html` (look for the placeholder comment).

## 📝 Content Edits
- All page content lives in `src/pages/*`. Update text, prices, etc., then redeploy.
- Colors live in `tailwind.config.js` under `extend.colors`.

## 🛡️ Notes
- This is a static SPA; no server needed.
- If you later need server logic, add **Netlify Functions** easily.