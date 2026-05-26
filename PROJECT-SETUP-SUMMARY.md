# Project Setup Summary

สรุปนี้อธิบายตั้งแต่เริ่ม setup โปรเจกต์ `jsd-backend-assessment` จนถึงการ push ขึ้น GitHub และสรุปภาพรวมงานที่ต้องทำต่อใน assessment นี้

---

## 1. ภาพรวมโปรเจกต์

โปรเจกต์นี้เป็น backend assessment สำหรับฝึกสร้าง REST API ด้วย **Express.js**

เป้าหมายหลักคือสร้าง API สำหรับจัดการสินค้าในตะกร้าสินค้า โดยต้องสามารถทำ CRUD ได้ครบ:

| CRUD | HTTP Method | Route | ความหมาย |
|---|---|---|---|
| Create | `POST` | `/products` | เพิ่มสินค้าใหม่ |
| Read | `GET` | `/products` | ดูสินค้าทั้งหมด |
| Read | `GET` | `/products/:id` | ดูสินค้ารายการเดียวตาม id |
| Update | `PUT` หรือ `PATCH` | `/products/:id` | แก้ไขสินค้า |
| Delete | `DELETE` | `/products/:id` | ลบสินค้า |

ข้อมูลสินค้าอย่างน้อยควรมี:

| Field | Type | รายละเอียด |
|---|---|---|
| `id` | string | สร้างตอนเพิ่มสินค้า เช่น `String(Date.now())` |
| `name` | string | ชื่อสินค้า จำเป็นต้องมี |
| `price` | number | ราคาสินค้า จำเป็นต้องมี |
| `quantity` | number | จำนวนสินค้า ค่าเริ่มต้นคือ `1` |

---

## 2. ตำแหน่งโปรเจกต์ในเครื่อง

โปรเจกต์อยู่ที่:

```bash
C:/Users/Acer/OneDrive/เดสก์ท็อป/jsd-backend-assessment/backend-assessment
```

ตอนเช็กด้วยคำสั่ง:

```bash
pwd
```

ผลลัพธ์คือ:

```bash
C:/Users/Acer/OneDrive/เดสก์ท็อป/jsd-backend-assessment/backend-assessment
```

แปลว่า terminal กำลังอยู่ในโฟลเดอร์โปรเจกต์ที่ถูกต้อง

---

## 3. ไฟล์เริ่มต้นในโปรเจกต์

ตอนเริ่มต้นมีไฟล์หลัก ๆ ดังนี้:

```bash
ASSESSMENT-BRIEF.md
LEARNERS-RUBRIC.md
MY_UNDERSTANDING_TEMPLATE.md
```

ความหมายของแต่ละไฟล์:

| File | หน้าที่ |
|---|---|
| `ASSESSMENT-BRIEF.md` | โจทย์และ requirement ของ assessment |
| `LEARNERS-RUBRIC.md` | เกณฑ์การให้คะแนนและสิ่งที่ต้องอธิบายให้ได้ |
| `MY_UNDERSTANDING_TEMPLATE.md` | template สำหรับเขียนอธิบายความเข้าใจของตัวเอง |
| `.gitignore` | กำหนดไฟล์หรือโฟลเดอร์ที่ไม่ต้องการให้ Git track |

---

## 4. การเชื่อมโปรเจกต์กับ GitHub

เพิ่ม remote repository ด้วยคำสั่ง:

```bash
git remote add origin https://github.com/ThawatchaiDrakeao/jsd-backend-assessment.git
```

ความหมาย:

- `git remote add` คือเพิ่มปลายทาง remote ให้ repository local
- `origin` คือชื่อมาตรฐานที่นิยมใช้เรียก remote หลัก
- URL ด้านหลังคือ GitHub repository ที่จะใช้เก็บโปรเจกต์นี้

ตรวจสอบ remote ด้วยคำสั่ง:

```bash
git remote -v
```

ผลลัพธ์:

```bash
origin  https://github.com/ThawatchaiDrakeao/jsd-backend-assessment.git (fetch)
origin  https://github.com/ThawatchaiDrakeao/jsd-backend-assessment.git (push)
```

แปลว่า repository นี้เชื่อมกับ GitHub แล้ว และสามารถทั้งดึงข้อมูล (`fetch`) และส่งข้อมูลขึ้นไป (`push`) ได้

---

## 5. การเปลี่ยนชื่อ branch เป็น main

ใช้คำสั่ง:

```bash
git branch -M main
```

ความหมาย:

- เปลี่ยนชื่อ branch ปัจจุบันจาก `master` เป็น `main`
- `main` เป็นชื่อ branch หลักที่นิยมใช้ใน GitHub ปัจจุบัน
- `-M` คือบังคับเปลี่ยนชื่อ branch แม้จะมีชื่อเดิมอยู่แล้ว

หลังจากคำสั่งนี้ prompt เปลี่ยนจาก:

```bash
(master)
```

เป็น:

```bash
(main)
```

แปลว่าตอนนี้เราอยู่บน branch `main`

---

## 6. การเตรียมไฟล์เพื่อ commit

ใช้คำสั่ง:

```bash
git add .
```

ความหมาย:

- เพิ่มไฟล์ทั้งหมดในโปรเจกต์เข้าสู่ staging area
- staging area คือพื้นที่เตรียมไฟล์ก่อนบันทึกเป็น commit
- จุด `.` หมายถึงไฟล์และโฟลเดอร์ทั้งหมดในตำแหน่งปัจจุบัน

---

## 7. การ commit โปรเจกต์ครั้งแรก

ใช้คำสั่ง:

```bash
git commit -m "initial backend assessment setup"
```

ผลลัพธ์:

```bash
[main (root-commit) 892b368] initial backend assessment setup
 4 files changed, 316 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 ASSESSMENT-BRIEF.md
 create mode 100644 LEARNERS-RUBRIC.md
 create mode 100644 MY_UNDERSTANDING_TEMPLATE.md
```

ความหมาย:

- สร้าง commit แรกของโปรเจกต์สำเร็จ
- commit id คือ `892b368`
- มีไฟล์ถูกเพิ่มทั้งหมด 4 ไฟล์
- มีเนื้อหาทั้งหมด 316 บรรทัด
- คำว่า `root-commit` หมายถึง commit แรกสุดของ repository นี้

---

## 8. การ push ขึ้น GitHub

ใช้คำสั่ง:

```bash
git push -u origin main
```

ความหมาย:

- `git push` คือส่ง commit จากเครื่องเราไปยัง GitHub
- `origin` คือ remote repository ที่ตั้งไว้
- `main` คือ branch ที่ต้องการ push
- `-u` คือผูก branch local `main` ให้ track กับ `origin/main`

ผลลัพธ์สำคัญ:

```bash
To https://github.com/ThawatchaiDrakeao/jsd-backend-assessment.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

แปลว่า:

- GitHub ได้รับ branch `main` แล้ว
- branch local `main` ถูกเชื่อมกับ `origin/main`
- ครั้งต่อไปสามารถใช้ `git push` หรือ `git pull` ได้ง่ายขึ้น โดยไม่ต้องระบุ `origin main` ทุกครั้ง

---

## 9. สถานะปัจจุบันของ Git

สถานะปัจจุบันคือ:

```bash
## main...origin/main
```

ความหมาย:

- local branch คือ `main`
- remote branch คือ `origin/main`
- ตอนนี้ไม่มีไฟล์ค้างที่ยังไม่ได้ commit
- โปรเจกต์ local และ GitHub อยู่ในสถานะตรงกัน

---

## 10. สิ่งที่ต้องทำต่อใน assessment

หลัง setup Git และ GitHub เรียบร้อย ขั้นตอนต่อไปคือเริ่มสร้าง Express API

Checklist งานหลัก:

- [ ] สร้าง `package.json`
- [ ] ติดตั้ง Express
- [ ] สร้างไฟล์ `index.js`
- [ ] สร้าง server และให้ listen บน port
- [ ] ใช้ `express.json()` เพื่ออ่าน JSON body จาก request
- [ ] สร้าง array สำหรับเก็บ products ใน memory
- [ ] ทำ route `GET /products`
- [ ] ทำ route `GET /products/:id`
- [ ] ทำ route `POST /products`
- [ ] ทำ route `PUT /products/:id` หรือ `PATCH /products/:id`
- [ ] ทำ route `DELETE /products/:id`
- [ ] เพิ่ม query string อย่างน้อย 1 แบบ เช่น filter หรือ sort
- [ ] เพิ่ม custom middleware เช่น request logger
- [ ] เพิ่ม error handling middleware
- [ ] ใช้ status code ให้เหมาะสม เช่น `200`, `201`, `400`, `404`
- [ ] เขียน `my-understanding.md` จาก template
- [ ] เตรียมอธิบายโค้ดใน video walkthrough

---

## 11. คำสั่งที่น่าจะใช้ต่อ

เริ่ม Node project:

```bash
npm init -y
```

ติดตั้ง Express:

```bash
npm install express
```

สร้างหรือแก้ไฟล์หลัก:

```bash
index.js
```

รัน server แบบ watch mode:

```bash
node --watch index.js
```

หลังเขียนโค้ดแล้วบันทึกขึ้น Git:

```bash
git status
git add .
git commit -m "build express products api"
git push
```

---

## 12. แนวคิดสำคัญที่ต้องอธิบายให้ได้

ตอนส่ง assessment ไม่ได้วัดแค่ว่าโค้ดทำงานได้ แต่วัดว่าเราเข้าใจสิ่งที่เขียนหรือไม่

ควรอธิบายเรื่องเหล่านี้ให้ได้:

- `GET`, `POST`, `PUT/PATCH`, `DELETE` ต่างกันอย่างไร
- `express.json()` ใช้ทำอะไร
- `req.body`, `req.params`, `req.query` ต่างกันอย่างไร
- HTTP status code แต่ละตัวใช้เมื่อไหร่
- Middleware คืออะไร
- ทำไมลำดับของ middleware ถึงสำคัญ
- CRUD คืออะไร
- ถ้าหา product ไม่เจอ API ควรตอบกลับอย่างไร
- เมื่อ request เข้ามา server ทำงานเป็นลำดับอย่างไร

---

## 13. สรุปสั้น ๆ

ตอนนี้โปรเจกต์ถูก setup เรียบร้อยแล้ว:

- อยู่ในโฟลเดอร์ `backend-assessment`
- ใช้ branch หลักชื่อ `main`
- เชื่อมกับ GitHub repository แล้ว
- commit แรกถูกสร้างแล้ว
- push ขึ้น `origin/main` สำเร็จแล้ว
- พร้อมเริ่มสร้าง Express REST API สำหรับ products

ขั้นต่อไปคือเขียน backend จริงตาม requirement ใน `ASSESSMENT-BRIEF.md`
