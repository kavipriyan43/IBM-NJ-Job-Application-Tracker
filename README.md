# 🧩 Job Application Tracker

A simple **Job Application Tracker** built with HTML, CSS, JavaScript (Frontend), and Express.js (Backend).  
It helps users manage and track job applications efficiently.

---

## 🚀 Project Structure

```
Job-Application-Tracker/
 ┣ frontend/
 ┃ ┣ index.html
 ┃ ┣ styles.css
 ┃ ┗ app.js
 ┗ backend/
   ┣ server.js
   ┣ package.json
   ┗ package-lock.json
```

---

## 🖥 Frontend Deployment (Vercel)

### Live Frontend URL
➡️ **https://ibm-nj-job-application-tracker.vercel.app/**

### Steps:
1. Push your frontend folder to GitHub.
2. Go to [https://vercel.com](https://vercel.com).
3. Click **Add New Project → Import from GitHub**.
4. Choose your repository and click **Deploy**.
5. Your live site will be available automatically.

---

## ⚙️ Backend Setup (Render)

### Live Backend API
➡️ **https://ibm-nj-job-application-tracker.onrender.com**

### Local Setup:
```bash
cd backend
npm install
node server.js
```
Access locally: [http://localhost:5000](http://localhost:5000)

### Deploy on Render:
1. Go to [https://render.com](https://render.com).
2. Create a **New Web Service**.
3. Connect your backend GitHub repo.
4. **Build Command:** `npm install`
5. **Start Command:** `node server.js`
6. Deploy 🎉

---

## 📡 API Documentation

### Base URL
```
https://ibm-nj-job-application-tracker.onrender.com
```

### Endpoints

| Method | Endpoint | Description |
|:-------|:----------|:-------------|
| GET | `/` | API status message |
| GET | `/applications` | Fetch all job applications |
| POST | `/applications` | Add a new job application |

**Example POST Request:**
```json
{
  "company": "Google",
  "role": "Software Engineer",
  "status": "Interview Scheduled"
}
```

---

## 🛠 Technologies Used

**Frontend:** HTML, CSS, JavaScript  
**Backend:** Node.js, Express.js  
**Hosting:** Vercel (Frontend), Render (Backend)

---

## 👨‍💻 Author

**Kavi Priyan**  
Project for **IBM-Naan Mudhalvan (Job Application Tracker)**  
Department of **AI & DS**  

---

## 📄 License

This project is licensed under the **MIT License**.
