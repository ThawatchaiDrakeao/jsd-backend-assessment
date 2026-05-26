# Project Summary / สรุปโปรเจกต์

## English

This project is a beginner-friendly backend assessment built with Node.js and Express.

It is a small Product CRUD API. The API can read, create, update, and delete products. The project does not use a database yet. Product data is stored in an in-memory `products` array inside `index.js`.

## ภาษาไทย

โปรเจกต์นี้เป็น backend assessment สำหรับผู้เริ่มต้น สร้างด้วย Node.js และ Express

เป็น Product CRUD API ขนาดเล็กที่สามารถอ่าน สร้าง แก้ไข และลบสินค้าได้ โปรเจกต์นี้ยังไม่ได้ใช้ database ข้อมูลสินค้าถูกเก็บไว้ใน `products` array ภายในไฟล์ `index.js`

---

## Main Files / ไฟล์สำคัญ

| File | Purpose |
| --- | --- |
| `index.js` | Main Express server and all product routes |
| `package.json` | Project info, scripts, and dependencies |
| `requests.http` | REST Client requests for testing the API |
| `my-understanding.md` | Explanation of what I understand about the project |
| `TASKS.md` | Phase-by-phase checklist for the assessment |

| ไฟล์ | หน้าที่ |
| --- | --- |
| `index.js` | ไฟล์หลักของ Express server และ product routes ทั้งหมด |
| `package.json` | ข้อมูลโปรเจกต์ scripts และ dependencies |
| `requests.http` | ไฟล์สำหรับทดสอบ API ด้วย REST Client |
| `my-understanding.md` | เอกสารอธิบายความเข้าใจของผมเกี่ยวกับโปรเจกต์ |
| `TASKS.md` | checklist การทำงานแต่ละ phase |

---

## How To Run / วิธีรันโปรเจกต์

```bash
cd project
npm install
npm run dev
```

The server runs on:

```text
http://localhost:3000
```

Server จะรันที่:

```text
http://localhost:3000
```

---

## API Routes / เส้นทาง API

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/products` | Get all products |
| `GET` | `/products/:id` | Get one product by id |
| `POST` | `/products` | Create a new product |
| `PATCH` | `/products/:id` | Update some fields of a product |
| `DELETE` | `/products/:id` | Delete a product |

| Method | Route | คำอธิบาย |
| --- | --- | --- |
| `GET` | `/products` | ดึงสินค้าทั้งหมด |
| `GET` | `/products/:id` | ดึงสินค้าหนึ่งรายการตาม id |
| `POST` | `/products` | สร้างสินค้าใหม่ |
| `PATCH` | `/products/:id` | แก้ไขข้อมูลบางส่วนของสินค้า |
| `DELETE` | `/products/:id` | ลบสินค้า |

---

## Important Concepts / แนวคิดสำคัญ

### `express.json()`

English: `express.json()` lets Express read JSON data from request bodies. It is needed for `POST` and `PATCH` routes.

ไทย: `express.json()` ช่วยให้ Express อ่าน JSON ที่ส่งมาใน request body ได้ จำเป็นสำหรับ `POST` และ `PATCH`

### `req.body`

English: `req.body` contains JSON data sent by the client, such as `name`, `price`, and `quantity`.

ไทย: `req.body` คือข้อมูล JSON ที่ client ส่งมา เช่น `name`, `price`, และ `quantity`

### `req.params`

English: `req.params` contains values from the URL path, such as the product id in `/products/1`.

ไทย: `req.params` คือค่าที่อยู่ใน URL path เช่น id ของสินค้าใน `/products/1`

### Middleware

English: Middleware runs before routes or before the final response. This project has a logger middleware that logs timestamp, method, and URL.

ไทย: Middleware คือโค้ดที่ทำงานก่อน route หรือก่อนส่ง response โปรเจกต์นี้มี logger middleware สำหรับ log เวลา method และ URL

### Error Handling

English: The API returns clean JSON errors with `success: false` and a message.

ไทย: API ตอบ error เป็น JSON ที่อ่านง่าย โดยใช้ `success: false` และ `message`

---

## Status Codes / Status Code ที่ใช้

| Code | Meaning | Used When |
| --- | --- | --- |
| `200` | OK | Request succeeds |
| `201` | Created | New product is created |
| `400` | Bad Request | Client sends invalid data |
| `404` | Not Found | Product or route is not found |
| `500` | Server Error | Unexpected server error |

| Code | ความหมาย | ใช้เมื่อ |
| --- | --- | --- |
| `200` | สำเร็จ | request ทำงานสำเร็จ |
| `201` | สร้างสำเร็จ | สร้างสินค้าใหม่สำเร็จ |
| `400` | request ไม่ถูกต้อง | client ส่งข้อมูลไม่ถูกต้อง |
| `404` | ไม่พบข้อมูล | ไม่พบสินค้า หรือไม่พบ route |
| `500` | server error | error ที่ไม่คาดคิดจาก server |

---

## How To Test / วิธีทดสอบ

Use the VS Code REST Client extension and open:

```text
project/requests.http
```

Click `Send Request` above each request.

ใช้ VS Code REST Client extension แล้วเปิดไฟล์:

```text
project/requests.http
```

จากนั้นกด `Send Request` เหนือ request ที่ต้องการทดสอบ

---

## Final Note / สรุปสั้น ๆ

English: This project shows the basic flow of building an Express API: setup server, read JSON, create CRUD routes, handle errors, and test requests.

ไทย: โปรเจกต์นี้แสดงพื้นฐานการสร้าง Express API ตั้งแต่ setup server, อ่าน JSON, สร้าง CRUD routes, จัดการ error และทดสอบ request
