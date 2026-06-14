# 💼 Ajith Kumar - Portfolio

A modern and responsive developer portfolio built with **React.js** showcasing my projects, skills, experience, and contact information.

---
## 💻 Live Demo

https://ajithfullstackdev.in
---

## ✨ Features

- Responsive Design
- Modern UI/UX
- Animated Hero Section
- About Me
- Skills Section
- Featured Projects
- Contact Form
- EmailJS Integration
- Resume Download
- Social Media Links
- Smooth Scrolling
- Mobile Friendly

---

## 🛠️ Tech Stack

- React.js
- CSS3
- JavaScript (ES6+)
- React Icons
- Framer Motion
- EmailJS
- React Toastify

---

# Installation

Clone the repository

```bash
git clone https://github.com/ajith-fullstack/portfolio.git
```

Go to project folder

```bash
cd portfolio
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# 📦 Required Packages

```bash
npm install react-icons
npm install framer-motion
npm install react-toastify
npm install @emailjs/browser
```

---

# 📧 EmailJS Setup

## Step 1

Create an account

https://www.emailjs.com/

---

## Step 2

Create a Gmail Service

Email Services

↓

Add New Service

↓

Gmail

↓

Connect your Gmail Account

---

## Step 3

Create a Template

Email Templates

↓

Create Template

Use the following template:

Subject

```text
New Portfolio Contact
```

Content

```text
Hello Ajith,

You have received a new message from your portfolio.

Name:
{{user}}

Email:
{{user_email}}

Subject:
{{subject}}

Message:
{{message}}
```

Save the template.

---

## Step 4

Copy

- Service ID
- Template ID
- Public Key

---

# 🔐 Environment Variables

Create a `.env` file in the project root.

```text
portfolio
│
├── src
├── public
├── .env
└── package.json
```

Add:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

---

## Restart Server

Whenever you update the `.env` file

```bash
npm run dev
```

---

# 🚀 Build

```bash
npm run build
```

---

# 👨‍💻 Author

**AjithKumar**

Full Stack Developer

# 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.
