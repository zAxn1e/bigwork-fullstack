# Bigwork Project

โปรเจกต์ Fullstack ที่แยก **Frontend** และ **Backend** ออกจากกัน (ใช้ Git Submodule) และมี Root project สำหรับควบคุมทั้งหมด

---

## 📦 โครงสร้างโปรเจกต์

```text
bigwork-main/
├── frontend/   # Frontend (เช่น Vite / React)
├── backend/    # Backend (Node.js + Express.js + Prisma ORM)
├── package.json (ตัวควบคุมหลัก)
```

---

## ⚙️ สิ่งที่ต้องติดตั้งก่อน (Prerequisites)

* Node.js (แนะนำ v18 ขึ้นไป)
* npm
* PostgreSQL (ต้องรันอยู่)

---

## 🚀 ขั้นตอนการติดตั้ง (แนะนำใช้วิธีนี้)

### 1. Clone โปรเจกต์

```bash
git clone --recurse-submodules https://github.com/zAxn1e/bigwork-fullstack.git
cd bigwork-main
npm install
```

---

### 2. Setup ทั้งหมด (แนะนำ)

```bash
npm run setup
```

👉 คำสั่งนี้จะ:

* โหลด submodules
* copy `.env.example` → `.env` (ถ้ายังไม่มี)
* ติดตั้ง dependencies
* generate Prisma client
* migrate database
* seed ข้อมูล

---

## 🔐 การตั้งค่า `.env` (สำคัญมาก)

แม้ระบบจะ copy `.env` ให้อัตโนมัติแล้ว
👉 **ต้องแก้ค่า `DATABASE_URL` ให้ถูกต้องด้วยตนเอง**

---

## 🗄️ Backend (.env)

ไฟล์อยู่ที่:

```text
backend/.env
```

ตัวอย่าง:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/bigwork_mini?schema=public"
```

👉 สิ่งที่ต้องเช็ค:

* username / password ถูกต้อง
* database มีอยู่จริง (เช่น `bigwork_mini`)
* PostgreSQL รันอยู่

---

## 🌐 Frontend (.env)

ไฟล์อยู่ที่:

```text
frontend/.env
```

ตัวอย่าง:

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_API_KEY=your-api-key-here
```

---

## ▶️ รันโปรเจกต์

```bash
npm run start
```

จะรัน:

* Backend (port 3000)
* Frontend (Vite dev server)

---

## 🔄 อัปเดต Submodules

```bash
npm run pull
```

---

## 🧹 ล้าง Dependencies

```bash
npm run clean
```

---

## 📌 คำสั่งที่ใช้บ่อย

| คำสั่ง                  | ความหมาย                                  |
| ----------------------- | ----------------------------------------- |
| `npm run setup`         | setup ทั้งหมดแบบอัตโนมัติ                 |
| `npm run prisma:setup`  | setup database (generate + deploy + seed) |
| `npm run install:all`   | ติดตั้ง dependencies                      |
| `npm run prisma:deploy` | migrate database                          |
| `npm run dev`           | รัน frontend + backend                    |
| `npm run pull`          | อัปเดต submodule                          |
| `npm run clean`         | ลบ node_modules                           |

---

## ⚠️ ข้อควรระวัง

* ❌ ห้าม commit `.env`
* ✅ ต้องแก้ `DATABASE_URL` ให้ถูกต้องก่อนใช้งาน

---

## 💡 Workflow แนะนำ

```bash
git clone --recurse-submodules https://github.com/zAxn1e/bigwork-fullstack.git
cd bigwork-main

npm run setup
npm run dev
```

---

พร้อมใช้งาน 🚀
