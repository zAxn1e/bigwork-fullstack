# Bigwork Project

โปรเจกต์ Fullstack ที่แยก **Frontend** และ **Backend** ออกจากกัน (ใช้ Git Submodule) และมี root project สำหรับควบคุมทั้งหมด

---

## 📦 โครงสร้างโปรเจกต์

```text
bigwork-main/
├── frontend/   # Frontend (เช่น Vite / React)
├── backend/    # Backend (Node.js + Prisma)
├── package.json (ตัวควบคุมหลัก)
```

---

## ⚙️ สิ่งที่ต้องติดตั้งก่อน (Prerequisites)

* Node.js (แนะนำ v18 ขึ้นไป)
* npm
* PostgreSQL (ต้องรันอยู่)

---

## 🚀 ขั้นตอนการติดตั้งครั้งแรก

### 1. Clone โปรเจกต์ (รวม submodules)

```bash
git clone --recurse-submodules <your-repo-url>
cd bigwork-main
```

ถ้า clone มาแล้วแต่ยังไม่มี submodule:

```bash
git submodule update --init --recursive
```

---

## 🔐 ตั้งค่า Environment Variables (สำคัญมาก)

⚠️ ต้องตั้งค่า `.env` ก่อนรันโปรเจกต์

---

## 🗄️ Backend (.env)

เข้าไปที่โฟลเดอร์ backend:

```bash
cd backend
cp .env.example .env
```

แก้ไข `.env`:

```env
# Application
POSTGRES_PORT=5432
PORT=3000
OPENAPI_SERVER_URL=http://localhost:3000
OPENAPI_SERVER_URLS=http://localhost:3000

# Database (Prisma + PostgreSQL)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/bigwork_mini?schema=public"

# Internal API Key Security
INTERNAL_API_KEY=change-this
API_KEY_REQUIRED=true

# JWT Authentication
JWT_SECRET=change-this-jwt-secret
JWT_EXPIRES_IN=7d

# Local Media Storage
MEDIA_BASE_DIR=media
MAX_UPLOAD_FILE_SIZE_MB=5

# Media Processing
WEBP_QUALITY=95
THUMBNAIL_WIDTH=320
```

👉 ตรวจสอบ:

* PostgreSQL ต้องรันอยู่
* มี database ชื่อ `bigwork_mini`

---

## 🌐 Frontend (.env)

```bash
cd ../frontend
cp .env.example .env
```

แก้ไข:

```env
VITE_API_BASE_URL=http://localhost:3000
VITE_API_KEY=your-api-key-here
```

👉 `VITE_API_BASE_URL` ต้องชี้ไป backend

---

## 📥 ติดตั้ง Dependencies

กลับมาที่ root:

```bash
npm run install:all
```

---

## 🗄️ ตั้งค่า Database (Prisma)

```bash
npm run prisma:generate
npm run prisma:migrate
```

---

## ▶️ รันโปรเจกต์

```bash
npm run dev
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

| คำสั่ง                    | ความหมาย                                 |
| ------------------------- | ---------------------------------------- |
| `npm run setup`           | setup ทั้งหมด (clone + install + prisma) |
| `npm run install:all`     | ติดตั้ง dependencies                     |
| `npm run prisma:migrate`  | migrate database (dev)                   |
| `npm run prisma:generate` | generate Prisma client                   |
| `npm run dev`             | รัน frontend + backend                   |
| `npm run pull`            | อัปเดต submodule                         |
| `npm run clean`           | ลบ node_modules                          |

---

## ⚠️ ข้อควรระวัง

* ❌ ห้าม commit `.env`
* ✅ ใช้ `.env.example` เป็น template
* 🚫 production ห้ามใช้ `prisma migrate dev` ให้ใช้:

  ```bash
  npm run prisma:deploy
  ```

---

## 💡 Workflow แนะนำ

```bash
git clone --recurse-submodules <repo>
cd bigwork-main

npm run setup
npm run dev
```

---

พร้อมใช้งาน 🚀
